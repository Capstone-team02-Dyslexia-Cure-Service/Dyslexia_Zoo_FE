import { create } from "zustand";

export const useLayoutState = create<User.LayoutStore>((set) => ({
  //State
  message: false,
  success: false,

  setMessage: (message) => {
    set(() => ({ message: message }));
  },

  setSuccess: (on) => {
    set(() => ({ success: on }));
  },
}));
