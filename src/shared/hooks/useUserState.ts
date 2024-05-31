import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserState = create<User.UserStore>()(
  immer((set) => ({
    //State
    isSignIn: false,
    name: "",
    statisticData: [],

    //Set function
    setName: (name) => {
      set(() => ({ isSignIn: true, name: name }));
    },

    setStatisticData: (data) => {
      set(() => ({ statisticData: data }));
    },
  }))
);
