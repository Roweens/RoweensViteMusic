export interface User {
    id: string;
    username: string;
    token: string;
}

export interface UserSchema {
    authData?: User;
    mounted?: boolean;
    isLoading?: boolean;
    error?: string;
}
