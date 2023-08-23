import React, {
  useState,
  createContext,
  useContext,
  ReactNode
} from "react";

type MyType = {
  isLogged: boolean;
  setIsLogged:React.Dispatch<React.SetStateAction<boolean>>
};

export const Context = createContext<MyType>({} as MyType);

export const GlobalContext = ({ children }: { children: ReactNode }) => {

  const [ isLogged,setIsLogged] = useState(false);

const store = {isLogged,setIsLogged}
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export const UseGlobalContext = () => useContext(Context);