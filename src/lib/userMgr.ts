import { getAdminApp } from "./adminUtil";

interface UserData {
    userId: string;
    access_token: string;
    refresh_token: string;
}

export async function setUserToken(userId: string, access_token: string, refresh_token: string) {
    const data: UserData = { userId, access_token, refresh_token };

    const db = getAdminApp().firestore();
    const users = db.collection('users');

    // ユーザーIDで検索
    const query = await users.where("userId", "==", userId).get();
    // ユーザーが存在していなかったら新規登録
    if (query.size == 0) {
        await users.add(data);
    }
    // ユーザーが登録済みなら情報を更新
    else {
        await query.docs[0].ref.update({ ...data });
    }
}