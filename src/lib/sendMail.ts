import { getAdminApp } from "./adminUtil";
import { DB } from "./dbUtil";

export async function sendMail(name?: string, email?: string, content?: string) {
    if (!name || !email || !content) {
        throw new Error("メール送信に必要な引数が足りません。");
    }

    const text = `問い合わせフォームから以下の内容でお問い合わせを受け付けました。

    お名前: ${name}
    
    メールアドレス: ${email}
    
    内容:
    ${content}`;

    const db = await new DB().init();
    db.add('mail', {
        to: process.env.OWNER_MAIL,
        message: {
            subject: '[Spotify New Release Follower] お問い合わせ',
            text: text,
        },
    });
}