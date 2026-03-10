const API_BASE = 'http://localhost:8000';

class ApiClient {

private baseUrl: string;

constructor(baseUrl: string){
    this.baseUrl = baseUrl;
}


async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
        if(!response.ok) throw Error(`GET request got error: ${response.status}`);
    return response.json();
}


async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
        if(!response.ok) throw Error(`POST request got error: ${response.status}`);
    return response.json();
}



}

export const apiClient = new ApiClient(API_BASE);