import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { setUserToken } from "$lib/userMgr";

export const load = (async ({ params, cookies }) => {
    const session = cookies.get('__session');

    // セッション切れ
    if (session === undefined) {
        throw redirect(301, "/")
    }

    const cookie = JSON.parse(session);
    const res = await fetch('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + cookie.spotify_access_token } })
    const userInfo = await res.json();

    // ユーザー登録・アクセストークン更新
    setUserToken(userInfo.id, cookie.spotify_access_token, cookie.spotify_refresh_token);

    return ({ username: userInfo.display_name });

}) satisfies PageServerLoad;