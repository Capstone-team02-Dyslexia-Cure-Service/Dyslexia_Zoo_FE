declare namespace Question {
  //Basic
  type QuestionType =
    | "SELECT_WORD"
    | "READ_WORD"
    | "WRITE_WORD"
    | "READ_SENTENSE";

  export interface TestAnswerInfo {
    id: sting;
    questionResponseType: QuestionType;
  }

  //DTO
  export type TestResDto = QuestionResDto[];

  export interface QuestionResDto {
    id: number;
    questionResponseType: QuestionType;
    content: string;
  }

  export interface Feedback {
    url: string;
    speedFeedback: string | null;
    accuracyFeedback: string;
  }

  //Form type
  export interface WriteQuestionFrom {
    answer: string;
  }

  export interface ReadQuestionFrom {}

  //Store
  export interface TestStore {
    testContent: TestResDto | undefined;
    testAnswers: (File | string)[];
    testAnswersInfo: TestAnswerInfo[];
    testFeedback: Feedback | undefined;
    setTest: (test: TestResDto) => void;
    setTestAnswers: (
      id: number,
      type: QuestionType,
      answer: string | File
    ) => void;
    setTestFeedback: (feedback: Feedback | undefined) => void;
  }
}
