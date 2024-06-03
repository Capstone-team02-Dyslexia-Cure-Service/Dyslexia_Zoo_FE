import { create } from "zustand";

export const useLayoutState = create<User.LayoutStore>((set) => ({
  //State
  message: false,
  success: false,
  failure: false,

  setMessage: (message) => {
    set(() => ({ message: message }));
  },

  setSuccess: (on) => {
    set(() => ({ success: on }));
  },

  setFailure: (on) => {
    set(() => ({ failure: on }));
  },
}));
