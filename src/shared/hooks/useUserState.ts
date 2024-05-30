import { create } from "zustand";

export const useUserState = create<User.UserStore>((set) => ({
  //State
  isSignIn: true,
  name: "강민규",
  statisticData: [],

  //Set function
  setName: (name) => {
    set(() => ({ isSignIn: true, name: name }));
  },

  setStatisticData: (data) => {
    set(() => ({ statisticData: data }));
  },
}));
