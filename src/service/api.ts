import { BaseApi, ApiResult } from './baseApi.ts';
import { AboutResponse, LoginResponseData, RegisterResponseData } from '../models/types.ts';


class Api extends BaseApi {
    public async login(
        username: string,
        password: string): Promise<ApiResult<LoginResponseData>> {
        return this.post<LoginResponseData>('/login', {
            username,
            password
        });
    }
    public async register(
        username: string,
        password: string): Promise<ApiResult<RegisterResponseData>> {
        return this.post<RegisterResponseData>('/register', {
            username,
            password
        });
    }
    public async about(token: string): Promise<ApiResult<AboutResponse>> {
        return this.get<AboutResponse>('/about', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    }
}

export const api = new Api();