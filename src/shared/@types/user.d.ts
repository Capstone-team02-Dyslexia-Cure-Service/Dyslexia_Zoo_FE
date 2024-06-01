declare namespace User {
  //DTO
  export interface SignInReqDto {
    email: string;
    password: string;
  }

  export interface SignInResDto {
    id: number;
    name: string;
    level: stiring;

    data?: { email?: sting };
  }

  export type LoadStatisticDataResDto = {
    id: numeber;
    achievementDate: string;
    memberId: number;
    solvingRecordIdList: number[];
    score: number;
  }[];
  /*   
  export interface SignInResDto {
    accessToken: string;
    refreshToken: string;
  } 
  */

  //Variable
  export type StatisticData = { day: string; score: number }[];

  //Store
  export interface UserStore {
    isSignIn: boolean;
    name: string;
    statisticData: StatisticData;
    setName: (name: string) => void;
    setStatisticData: (data: LoadStatisticDataResDto) => void;
  }

  export interface ApiStore {
    message: false | string;
    setMessage: (message: false | string) => void;
  }
}
