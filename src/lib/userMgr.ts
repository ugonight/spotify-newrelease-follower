import { error, type Cookies } from "@sveltejs/kit";
import { getAdminApp } from "./adminUtil";
import { DB } from "./dbUtil";
import type { AccessToken, UserData } from "./entity";
import { env } from "$env/dynamic/private";

export async function setUserToken(userData: UserData) {
    const db = await new DB().init();
    db.updateOrAdd('users', userData, { "userId": userData.userId });
}

export async function getAccessTokenUseAuthCode(cookies: Cookies, url: URL) {
    const code = url.searchParams.get("code") || null;
    const state = url.searchParams.get("state") || null;
    const storedState = cookies ? cookies.get("__session") : null;
    const redirect_uri = url.origin + '/control';

    if (code === null || state === null || state !== storedState) {
        return null;
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

    return {
        access_token: authInfo.access_token,
        refresh_token: authInfo.refresh_token
    } as AccessToken;
}

export async function getAccessTokenUseRefreshToken(cookies: Cookies, url: URL) {
    const session = cookies ? cookies.get("__session") : null;
    if (session === null || session === undefined) return null;

    let userData: UserData;
    try {
        userData = JSON.parse(session) as UserData;
    } catch (error) {
        return null;
    }
    if (userData.accessToken === undefined) return null;

    const params = new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: userData.accessToken.refresh_token
    });

    let res = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(env.SPOTIFY_CLIENT_ID + ':' + env.SPOTIFY_CLIENT_SECRET).toString('base64')),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params,
    });

    const authInfo = await res.json();
    const refresh_token = authInfo.refresh_token ?? userData.accessToken.refresh_token;

    return {
        access_token: authInfo.access_token,
        refresh_token
    } as AccessToken;
}