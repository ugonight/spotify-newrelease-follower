import { MongoClient } from "mongodb";
import { getAdminApp } from "./adminUtil";

export class DB {
    dbAccessor: DBAccessor | undefined;

    async init() {
        try {
            await getAdminApp().firestore().getAll({});
            this.dbAccessor = new FireStoreAccessor();
        } catch (error) {
            // FireStoreにアクセスできなかったらMongoDBに繋ぐ
            this.dbAccessor = new MondoDBAccessor();
        } finally {
            return this;
        }
    }

    async add(collectionName: string, document: object) {
        if (this.dbAccessor == undefined) throw new Error("Please init DB");
        await this.dbAccessor.add(collectionName, document);
    }

    async updateOrAdd(collectionName: string, document: object, searchParams: { [x: string]: any }) {
        if (this.dbAccessor == undefined) throw new Error("Please init DB");
        await this.dbAccessor.updateOrAdd(collectionName, document, searchParams);
    }
}

interface DBAccessor {
    add(collectionName: string, document: object): Promise<void>;
    updateOrAdd(collectionName: string, document: object, searchParams: { [x: string]: any }): Promise<void>;
}

class FireStoreAccessor implements DBAccessor {
    db: FirebaseFirestore.Firestore;
    constructor() {
        this.db = getAdminApp().firestore();
    }

    async add(collectionName: string, document: object): Promise<void> {
        await this.db.collection(collectionName).add(document);
    }

    async updateOrAdd(collectionName: string, document: object, searchParams: { [x: string]: any; }): Promise<void> {
        const collection = this.db.collection(collectionName);

        // 検索
        let query = collection.select();
        for (let i = 0; i < Object.keys(searchParams).length; i++) {
            const key = Object.keys(searchParams)[i];
            const value = Object.values(searchParams)[i];
            query = collection.where(key, "==", value);
        }
        const querySnapshot = await query.get()

        // データが存在していなかったら新規登録
        if (querySnapshot.size == 0) {
            await collection.add(document);
        }
        // データが登録済みなら情報を更新
        else {
            await querySnapshot.docs[0].ref.update({ ...document });
        }
    }

}

class MondoDBAccessor implements DBAccessor {
    static readonly dbName = "spotify_newrelease_follower";
    client: MongoClient;

    constructor() {
        this.client = new MongoClient("mongodb://localhost:27017", { auth: { username: "root", password: "example" } });
    }

    async add(collectionName: string, document: object): Promise<void> {
        await this.client.connect();
        const db = this.client.db(MondoDBAccessor.dbName);
        const collection = db.collection(collectionName);

        await collection.insertOne(document);

        await this.client.close();
    }

    async updateOrAdd(collectionName: string, document: object, searchParams: { [x: string]: any; }): Promise<void> {
        await this.client.connect();
        const db = this.client.db(MondoDBAccessor.dbName);
        const collection = db.collection(collectionName);

        const updateResult = await collection.updateOne(searchParams, { $set: document });
        if (updateResult.modifiedCount == 0) {
            await collection.insertOne(document);
        }

        await this.client.close();
    }

}