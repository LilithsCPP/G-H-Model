export interface Led {
    state: string;
}

export interface Relay {
    state: string;
}

// sensor_1 is 
export interface Sensor_1 {
    state: string;
}

// sensor_2 is 
export interface Sensor_2 {
    state: string;
}

// sensor_3 is 
export interface Sensor_3 {
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