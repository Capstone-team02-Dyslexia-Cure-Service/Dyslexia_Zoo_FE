import { create } from "zustand";

const useTestStore = create<Question.TestStore>((set) => ({
  //State
  testContent: undefined,
  testAnswers: [],

  //Set function
  setTestContent: (test: Question.BasicTestResDto) => {
    set((state) => {
      state.testContent = test;
      return {};
    });
  },

  setTestAnswers: (id: string, answer: string) => {
    set((state) => {
      state.testAnswers.find((answer) => answer.id === id)!.answer = answer;

      console.log(state);
      return {};
    });
  },

  setTest: (test: Question.BasicTestResDto) => {
    set((state) => {
      console.log(test.questions);

      state.testContent = test;
      test.questions.map((question) => {
        if (question.type === "WRITEWORD")
          state.testAnswers.push({
            id: question.id,
            type: question.type,
            answer: "",
          });
      });

      return {};
    });
  },
}));

export default useTestStore;
