import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useTestState = create<Question.TestStore>()(
  immer((set) => ({
    //State
    testContent: undefined,
    testAnswersInfo: [],
    testAnswers: [],

    //Set function
    setTestAnswers: (id, type, answer) => {
      set((state) => {
        const findIndex = state.testAnswersInfo.findIndex(
          (answerInfo) =>
            answerInfo.id === id && answerInfo.questionResponseType === type
        );
        if (findIndex !== -1) {
          state.testAnswersInfo.splice(findIndex, 1);
          state.testAnswers.splice(findIndex, 1);
        }

        state.testAnswersInfo.push({ id: id, questionResponseType: type });
        state.testAnswers.push(answer);
      });
    },

    setTest: (test: Question.TestResDto) => {
      set((state) => {
        state.testContent = test;
        state.testAnswers = [];
        state.testAnswersInfo = [];
      });
    },
  }))
);
