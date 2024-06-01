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
      set(() => {
        const setData: User.StatisticData = [];

        console.log(data);

        data.map((oneData) => {
          setData.unshift({
            day: `${oneData.achievementDate.split("-")[1]}월 ${
              oneData.achievementDate.split("-")[2]
            }일`,
            score: oneData.score,
          });
        });
        ({ statisticData: setData });
      });
    },
  }))
);
