declare namespace Question {
  //Basic
  type QuestionType = "SELECTWORD" | "READWORD" | "WRITEWORD" | "READSENTENSE";

  export interface TestAnswerInfo {
    id: sting;
    type: QuestionType;
  }

  //DTO
  export interface BasicTestResDto {
    id: number;
    questions: QuestionResDto[];
  }

  export interface QuestionResDto {
    id: number;
    type: QuestionType;
    content: string;
  }

  //Form type
  export interface WriteQuestionFrom {
    answer: string;
  }

  export interface ReadQuestionFrom {}

  //Store
  export interface TestStore {
    testContent: BasicTestResDto | undefined;
    testAnswers: (File | string)[];
    testAnswersInfo: TestAnswerInfo[];
    setTest: (test: BasicTestResDto) => void;
    setTestAnswers: (
      id: number,
      type: QuestionType,
      answer: string | File
    ) => void;
  }
}
