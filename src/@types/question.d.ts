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
    answer_1: ReadWordQuestionAnswer;
    answer_2: ReadWordQuestionAnswer;
    answer_3: ReadWordQuestionAnswer;
    answer_4: ReadWordQuestionAnswer;
    answer_5: ReadWordQuestionAnswer;
    answer_6: ReadWordQuestionAnswer;
    answer_7: ReadWordQuestionAnswer;
    answer_8: ReadWordQuestionAnswer;
    answer_9: ReadWordQuestionAnswer;
  }
}
