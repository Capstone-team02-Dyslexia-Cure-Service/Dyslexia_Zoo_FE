declare namespace User {
  //DTO
  export interface SignInReqDto {
    email: string;
    password: string;
  }

  export interface SignInResDto {
    accessToken: string;
    refreshToken: string;
  }
}
