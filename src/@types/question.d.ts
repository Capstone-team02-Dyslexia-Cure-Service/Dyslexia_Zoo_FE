declare namespace Question {
  //Basic
  export interface ReadWordQuestionAnswer {
    id: sting;
    type: "WRITEWORD";
    answer: string;
  }

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

  export interface BasicTestForm {
    answers: ReadWordQuestionAnswer[];
  }
}
