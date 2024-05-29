import { create } from "zustand";

export const useStudyState = create<Animal.StudyStore>((set) => ({
  //State
  content: false,
  url: false,

  //Set function
  setStudy: (data) => {
    set(() => ({ content: data.content, url: data.url }));
  },
}));
