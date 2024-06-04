import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useTestState = create<Question.TestStore>()(
  immer((set) => ({
    testId: -1,
    questionList: [],
    answers: [], //file의 경우에만 사용된다.

    setTest: (data) => {
      set((state) => {
        const newAnswers: undefined[] = [];
        data.questionList.map(() => {
          newAnswers.push(undefined);
        });

        state.testId = data.testId;
        state.questionList = data.questionList;
        state.answers = newAnswers;
      });
    },

    setAnswer: (index, data) => {
      set((state) => {
        state.answers[index] = data;
      });
    },
  }))
);
