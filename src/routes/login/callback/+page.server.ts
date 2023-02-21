import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load = (async ({ cookies, url, fetch }) => {
    const code = url.searchParams.get("code") || null;
    const state = url.searchParams.get("state") || null;
    const storedState = cookies ? cookies.get("__session") : null;
    const redirect_uri = url.origin + '/login/callback';

    if (code === null || state === null || state !== storedState) {
        throw error(500, "アカウント認証に失敗しました。");
    }

    cookies.delete("__session");

    const params = new URLSearchParams({
        "code": code,
        "redirect_uri": redirect_uri,
        "grant_type": 'authorization_code'
    });

    let res = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(env.SPOTIFY_CLIENT_ID + ':' + env.SPOTIFY_CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params,
    })

    if (res.status != 200) {
        throw error(res.status, res.statusText);
    }

    const authInfo = await res.json();
    cookies.set("__session", JSON.stringify({
        spotify_access_token: authInfo.access_token,
        spotify_refresh_token: authInfo.refresh_token
    }), { path: '/' });

    throw redirect(307, "/control");

}) satisfies PageServerLoad;