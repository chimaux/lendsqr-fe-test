import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect
} from "react";
import { useNavigate } from "react-router-dom";



type MyType = {
  isLogged: boolean;
  setIsLogged:React.Dispatch<React.SetStateAction<boolean>>;
  moreOpen: boolean;
  setMoreopen:React.Dispatch<React.SetStateAction<boolean>>;
  btnOff: boolean;
  setBtnOff:React.Dispatch<React.SetStateAction<boolean>>;
  linesPerPage: number;
  setLinesPerPage:React.Dispatch<React.SetStateAction<number>>;
};

export const Context = createContext<MyType>({} as MyType);

export const GlobalContext = ({ children }: { children: ReactNode }) => {

  const navigate = useNavigate()

  const [ isLogged,setIsLogged] = useState(false);
  const [ moreOpen,setMoreopen] = useState(false);
    // BTN OPEN STATE STARTS HERE
    const [btnOff, setBtnOff] = useState<boolean>(false);
    // BTN OPEN STATE ENDS HERE

    const initialPageLoad = ()=>{
      isLogged === true ? navigate("/user"): navigate("/");
      console.log(isLogged,"Chima")
     }

    useEffect(()=>{
      initialPageLoad();
    },[isLogged]);

// PAGINATION CONFIGURATION STARTS HERE
const [linesPerPage, setLinesPerPage] = useState(10);
// PAGINATION CONFIGURATION ENDS HERE





const store = {
  isLogged,
  setIsLogged,
  moreOpen,
  setMoreopen,
  btnOff, 
  setBtnOff,
  linesPerPage, 
  setLinesPerPage
}
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  );
};

export const UseGlobalContext = () => useContext(Context);