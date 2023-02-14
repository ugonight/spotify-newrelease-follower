import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

const stateKey = 'spotify_auth_state';

export const load = (async ({ cookies, url, fetch }) => {
    const code = url.searchParams.get("code") || null;
    const state = url.searchParams.get("state") || null;
    const storedState = cookies ? cookies.get(stateKey) : null;
    const redirect_uri = url.origin + '/callback';

    if (code === null || state === null || state !== storedState) {
        throw redirect(307, "/");
    }

    cookies.delete(stateKey);

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
    cookies.set("spotify_access_token", authInfo.access_token);
    cookies.set("spotify_refresh_token", authInfo.refresh_token);

    throw redirect(307, "/control");

}) satisfies PageServerLoad;