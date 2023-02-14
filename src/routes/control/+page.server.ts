import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {
    const session = cookies.get('__session');
    if (session === undefined) {
        throw error(500, "セッションの読み込みに失敗しました。");
    }
    const cookie = JSON.parse(session);

    const res = await fetch('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + cookie.spotify_access_token } })
    const userInfo = await res.json();

    return ({ username: userInfo.display_name });

}) satisfies PageServerLoad;