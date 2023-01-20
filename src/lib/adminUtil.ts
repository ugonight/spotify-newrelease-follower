import type { FirebaseError } from "firebase-admin";
import * as admin from "firebase-admin";

export function getAdminApp() {
    let app;
    try {
        app = admin.app();
    } catch (error) {
        app = admin.initializeApp();
    }
    return app;
}