export interface Led {
    state: string;
}

export interface ApiError {
    detail: string;
    [key: string]: any;
}

export interface ApiResponse<T> {
    data?: T;
    error?: ApiError | string;
    status?: number;
    ok?: boolean;
}