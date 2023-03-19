import { getAdminApp } from "./adminUtil";
import { DB } from "./dbUtil";

interface UserData {
    userId: string;
    access_token: string;
    refresh_token: string;
}

export async function setUserToken(userId: string, access_token: string, refresh_token: string) {
    const data: UserData = { userId, access_token, refresh_token };

    const db = await new DB().init();
    db.updateOrAdd('users', data, { "userId": userId });
}