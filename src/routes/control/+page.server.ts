import { error, redirect, type Cookies } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getAccessTokenUseAuthCode, getAccessTokenUseRefreshToken, setUserToken } from "$lib/userMgr";
import type { UserData } from "$lib/entity";
import { env } from '$env/dynamic/private';

export const load = (async ({ cookies, url }) => {
    const session = cookies ? cookies.get("__session") : null;
    // セッション切れ
    if (session === undefined) {
        throw redirect(301, "/")
    }

    let accessToken = await getAccessTokenUseRefreshToken(cookies, url);
    if (accessToken === null) {
        accessToken = await getAccessTokenUseAuthCode(cookies, url);
    }
    if (accessToken === null) {
        throw error(500, "アカウント認証に失敗しました。");
    }

    const res = await fetch('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + accessToken.access_token } })
    const userInfo = await res.json();

    // ユーザー登録・アクセストークン更新
    let userData: UserData = {
        userId: userInfo.id,
        accessToken
    }
    setUserToken(userData);
    cookies.set("__session", JSON.stringify(userData));

    return ({ username: userInfo.display_name });

}) satisfies PageServerLoad;
