declare namespace User {
  //DTO
  export interface SignInReqDto {
    email: string;
    password: string;
  }

  export interface SignUpDto {
    email: string;
    password: string;
    name: string;
    age: number;
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

  //Form
  export interface SignUpForm {
    email: string;
    password: string;
    passwordCheck: string;
    name: string;
    age: number;
  }

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

  export interface LayoutStore {
    message: false | string;
    success: boolean;
    failure: boolean | number;
    loading: false | "LOADCONTENT" | "GETRESULT";
    setMessage: (message: false | string) => void;
    setSuccess: (on: boolean) => void;
    setFailure: (on: boolean | number) => void;
    setLoading: (on: false | "LOADCONTENT" | "GETRESULT") => void;
  }
}
