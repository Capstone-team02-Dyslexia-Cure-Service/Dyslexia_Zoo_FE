declare namespace Question {
  //Basic
  /*   export interface ReadWordQuestionAnswer {
    id: sting;
    answer: string;
  } */

  //DTO
  export interface BasicTestResDto {
    id: string;
    questions: QuestionResDto[];
  }

  export interface QuestionResDto {
    id: string;
    type: "READWORD" | "WRITEWORD" | "READSENTENSE";
    content: string;
  }

  //Form type
  export interface ReadWordQuestionFrom {
    answer: string;
  }

  //Store
  //문자 쓰기만 가정하고 설계됨. -> ( | )[]으로 변경 예정
  //문자 쓰기만 가정하고 설계됨. -> answer type 변경 예정
  export interface TestStore {
    testContent: BasicTestResDto | undefined;
    testAnswers: FormData | undefined;
    setTest: (test: BasicTestResDto) => void;
    setTestAnswers: (id: string, answer: string | File) => void;
  }
}
