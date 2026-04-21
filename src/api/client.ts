import type { ApiResponse } from "../types/type";

export class Api {
    private baseURL: string;

    constructor() {
        this.baseURL = "http://192.168.1.37:8000"; 
    }

    private async request<T>(endpoint: string, options: RequestInit): Promise<ApiResponse<T>> {
        const url = `${this.baseURL}${endpoint}`;
        
        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
        });

        const data = await response.json();
        return {
            data,
            status: response.status,
            ok: response.ok
        };
    }

    async post<T>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: body ? JSON.stringify(body) : undefined,
        });
    }

    async get<T>(endpoint: string, body?: any): Promise<ApiResponse<T>> {
        return this.request<T>(endpoint, {
            method: 'GET',
            body: body ? JSON.stringify(body) : undefined,
        });
    }
}
