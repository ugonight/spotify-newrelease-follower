export type StateType = 'list' | 'detail';

export interface AccessToken {
    access_token: string,
    refresh_token: string
}

export interface UserData {
    userId: string;
    accessToken: AccessToken;
}