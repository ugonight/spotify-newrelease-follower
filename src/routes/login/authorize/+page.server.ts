import { error, redirect } from '@sveltejs/kit';
import type { Action, Actions, PageServerLoad } from '../$types'
import { env } from '$env/dynamic/private';

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

export const load: PageServerLoad = async ({ url, cookies }) => {
    var state = generateRandomString(16);
    cookies.set("__session", state);

    const scope = 'user-read-private user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';
    const redirect_uri = url.origin + '/login/callback';

    const authURL = new URL('https://accounts.spotify.com/authorize');
    const params = new URLSearchParams({
        response_type: 'code',
        client_id: env.SPOTIFY_CLIENT_ID ?? "",
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    });
    authURL.search = params.toString();

    // your application requests authorization
    throw redirect(307, authURL.toString());
}
