import type { Actions } from './$types';

export const actions: Actions = {
    default: async (event) => {
        // TODO log the user in
        const data = await event.request.formData()
        console.log(data);
    }
};