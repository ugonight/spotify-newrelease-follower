import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, cookies }) => {

    const res = await fetch('https://api.spotify.com/v1/me', { headers: { 'Authorization': 'Bearer ' + cookies.get("spotify_access_token") } })
    const userInfo = await res.json();

    return ({ username: userInfo.display_name });

}) satisfies PageServerLoad;