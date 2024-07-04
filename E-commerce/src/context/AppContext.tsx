import { createContext } from "react";

type AppContextProps = {
  toastMessage: (status: string, message: string) => void;
};
export const AppContext = createContext<AppContextProps | null>(null);
