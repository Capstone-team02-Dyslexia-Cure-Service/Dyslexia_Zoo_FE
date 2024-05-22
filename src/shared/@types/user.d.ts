declare namespace User {
  //DTO
  export interface SignInReqDto {
    email: string;
    password: string;
  }

  export interface SignInResDto {
    id: string;
    name: string;
    level: stiring;
  }

  /*   
  export interface SignInResDto {
    accessToken: string;
    refreshToken: string;
  } 
  */

  //Variable
  export type StatisticData = { day: string; score: number }[];

  //Store
  export interface userStore {
    isSignIn: boolean;
    name: string;
    statisticData: StatisticData;
    setName: (name: string) => void;
    setStatisticData: (data: StatisticData) => void;
  }
}
