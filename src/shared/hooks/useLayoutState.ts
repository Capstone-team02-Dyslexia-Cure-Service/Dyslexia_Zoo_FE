import { create } from "zustand";

export const useLayoutState = create<User.LayoutStore>((set) => ({
  //State
  message: false,
  success: false,
  failure: false,
  loading: false,

  setMessage: (message) => {
    set(() => ({ message: message }));
  },

  setSuccess: (on) => {
    set(() => ({ success: on }));
  },

  setFailure: (on) => {
    set(() => ({ failure: on }));
  },

  setLoading: (on) => {
    set(() => ({ loading: on }));
  },
}));
