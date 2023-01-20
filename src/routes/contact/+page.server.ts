import type { Actions } from './$types';
import { sendMail } from "$lib/sendMail";

export const actions: Actions = {
    default: async (event) => {
        // TODO log the user in
        const data = await event.request.formData()
        console.log(data);

        try {
            await sendMail(
                data.get("name")?.toString(),
                data.get("email")?.toString(),
                data.get("content")?.toString()
            );
            return { status: "success" }
        } catch (error) {
            console.error(error)
            return { status: "error" }
        }

    }
};