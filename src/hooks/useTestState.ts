import { create } from "zustand";

const useTestStore = create<Question.TestStore>((set) => ({
  //State
  testContent: undefined,
  testAnswers: undefined,

  //Set function
  setTestContent: (test: Question.BasicTestResDto) => {
    set((state) => {
      state.testContent = test;
      return {};
    });
  },

  setTestAnswers: (id: string, answer: string | File) => {
    set((state) => {
      state.testAnswers && state.testAnswers.set(id, answer);

      return {};
    });
  },

  setTest: (test: Question.BasicTestResDto) => {
    set((state) => {
      state.testContent = test;

      state.testAnswers = new FormData();
      test.questions.map(
        (question) =>
          state.testAnswers && state.testAnswers.append(question.id, "")
      );

      return {};
    });
  },
}));

export default useTestStore;
