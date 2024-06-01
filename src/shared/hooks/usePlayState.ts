import { create } from "zustand";

export const usePlayState = create<Question.PlayStore>((set) => ({
  id: -1,
  questionResponseType: "SELECT_WORD",
  content: "",
  feedback: undefined,

  setPlay: (data) => {
    set(() => ({ ...data }));
  },

  setFeedback: (data) => {
    set(() => ({
      feedback: data,
    }));
  },
}));
