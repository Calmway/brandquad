
export class LoginRequest {
    username: string = "";
    password: string = "";
}
export class LoginResponseData {
    token: string = "";
    error: string | undefined | null = undefined;
}
export class RegisterResponseData {
    message: string | undefined | null = undefined;
}
export class AboutResponse {
    data: AboutResponseData =  new AboutResponseData()
}
export class AboutResponseData {
    id: number = 0;
    username: string = "";
    about: string = "";
}
