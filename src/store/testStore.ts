import { create } from "zustand";

const useTestStore = create<Question.TestStore>((set) => ({
  //State
  testAnswers: [],

  //Set function
  setTestAnswers: (index: number, answer: string) => {
    set((state) => {
      state.testAnswers[index].answer = answer;

      return {};
    });
  },
  setIds: (ids: number[]) => {
    set((state) => {
      ids.map((id, index) => {
        state.testAnswers[index].id = id;
      });
      return {};
    });
  },
}));

export default useTestStore;
