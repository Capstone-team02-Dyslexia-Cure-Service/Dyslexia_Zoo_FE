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

  export interface Feedback {
    videoPath: string;
    speedFeedback: string | null;
    accuracyFeedback: string;
  }

  //DTO
  export type TestResDto = { testId: number; questions: QuestionResDto[] };

  export interface QuestionResDto {
    questionId: number;
    questionResponseType: QuestionType;
    content: string;
  }

  export interface QuestionSubmitResDto extends Feedback {
    isCorrect: boolean;
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

  export interface PlayStore {
    id: number;
    questionResponseType: QuestionType;
    content: string;
    answer: File | string | undefined;
    feedback: Feedback | undefined;

    setPlay: (data: QuestionResDto) => void;
    setAnswer: (data: File | string) => void;
    setFeedback: (data: Feedback | undefined) => void;
  }
}
