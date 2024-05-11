import { create } from "zustand";

const useUserState = create<User.userStore>((set) => ({
  //State
  isSignIn: true,
  name: "",
  statisticData: [],

  //Set function
  setName: (name) => {
    set(() => ({ isSignIn: true, name: name }));
  },

  setStatisticData: (data) => {
    set(() => ({ statisticData: data }));
  },
}));

export default useUserState;
