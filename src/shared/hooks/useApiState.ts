import { create } from "zustand";

export const useApiState = create<User.ApiStore>((set) => ({
  //State
  message: false,

  setMessage: (message) => {
    set(() => ({ message: message }));
  },
}));
