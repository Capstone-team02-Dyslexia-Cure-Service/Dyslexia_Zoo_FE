import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useUserState = create<User.UserStore>()(
  immer((set) => ({
    //State
    isSignIn: true,
    name: "",
    statisticData: [],

    //Set function
    setName: (name) => {
      set(() => ({ isSignIn: true, name: name }));
    },

    setStatisticData: (data) => {
      set((state) => {
        const setData: User.StatisticData = [];

        data.map((oneData) => {
          setData.unshift({
            day: `${oneData.achievementDate.split("-")[1]}월 ${
              oneData.achievementDate.split("-")[2]
            }일`,
            score: oneData.score,
          });
        });
        state.statisticData = setData;
      });
    },
  }))
);
