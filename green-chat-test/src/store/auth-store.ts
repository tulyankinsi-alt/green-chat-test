import { create } from "zustand";
import type { BaseAuthParams } from "../shared/types/base";
import { persist } from "zustand/middleware";

type AuthState = BaseAuthParams & {
  login: (params: BaseAuthParams) => void;
  logout: () => void;
};

const defaultParams: BaseAuthParams = {
  idInstance: "",
  apiTokenInstance: "",
  apiUrl: "",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      ...defaultParams,
      login(params: BaseAuthParams) {
        const { idInstance, apiTokenInstance, apiUrl } = params;
        set({ idInstance, apiTokenInstance, apiUrl });
      },
      logout() {
        set(defaultParams);
      },
    }),
    {
      name: "green-api-auth",
    },
  ),
);
