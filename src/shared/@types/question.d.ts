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
  export type TestResDto = { testId: number; questionList: QuestionResDto[] };

  export interface QuestionResDto {
    id: number;
    questionResponseType: QuestionType;
    content: string;
  }

  export interface QuestionSubmitResDto {
    answerVideoFilePath: string;
    speedFeedback: string | null;
    accuracyFeedback: string;
    isCorrect: boolean;
  }

  //Form type
  export interface WriteQuestionFrom {
    answer: string;
  }

  export interface ReadQuestionFrom {}

  //Store
  export interface TestStore {
    testId: number;
    questionList: QuestionResDto[];
    answers: (File | string | undefined)[];

    setTest: (data: TestResDto) => void;
    setAnswer: (index: number, data: File | string) => void;
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
