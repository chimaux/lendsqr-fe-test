import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
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
  pageName: string;
  setPageName:React.Dispatch<React.SetStateAction<string>>;
  showMobileNav: boolean;
  setShowMobileNav:React.Dispatch<React.SetStateAction<boolean>>;
  showFilter: boolean;
  setShowFilter:React.Dispatch<React.SetStateAction<boolean>>;
  btnOff2: boolean;
  setBtnOff2:React.Dispatch<React.SetStateAction<boolean>>;
  toggleUserDataMoreItems: boolean;
  setToggleUserDataMoreItems:React.Dispatch<React.SetStateAction<boolean>>;
  moreIndex_b:string;
  setMoreIndex_b:React.Dispatch<React.SetStateAction<string>>;
  btnOff3:boolean;
  setBtnOff3:React.Dispatch<React.SetStateAction<boolean>>;
  
};

export const Context = createContext<MyType>({} as MyType);

export const GlobalContext = ({ children }: { children: ReactNode }) => {

  const navigate = useNavigate()

  // const [ isLogged,setIsLogged] = useState(true);
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

// PAGE NAME FOR SIDE NAVIGATION STARTS HERE
// const [pageName,setPageName] =useState("Users")
const [pageName,setPageName] =useState("")
// PAGE NAME FOR SIDE NAVIGATION ENDS HERE

// SHOW MOBILE SIDE NAVIGATION STARTS HERE
const [showMobileNav,setShowMobileNav] =useState<boolean>(false)
// SHOW MOBILE SIDE NAVIGATION ENDS HERE

// SHOW FILTER STARTS HERE
const [showFilter,setShowFilter] =useState<boolean>(false)
// SHOW FILTER ENDS HERE
// SHOW FILTER STARTS HERE
const [  btnOff2,setBtnOff2] =useState<boolean>(false)
// SHOW FILTER ENDS HERE
// SHOW PENDING ACTIVE BLACKLIST AND INACTIVE MORE COMPONENT STARTS HERE
const [  btnOff3,setBtnOff3] =useState<boolean>(false)
//SHOW PENDING ACTIVE BLACKLIST AND INACTIVE MORE COMPONENT STARTSENDS HERE
// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE
const [  toggleUserDataMoreItems,setToggleUserDataMoreItems] =useState<boolean>(false)
// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE

// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE
const [  moreIndex_b,setMoreIndex_b] =useState<string>("")
// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE



const store = {
  isLogged,
  setIsLogged,
  moreOpen,
  setMoreopen,
  btnOff, 
  setBtnOff,
  linesPerPage, 
  setLinesPerPage,
  pageName,
  setPageName,
  showMobileNav,
  setShowMobileNav,
  showFilter,
  setShowFilter,
  btnOff2,
  setBtnOff2,
  toggleUserDataMoreItems,
  setToggleUserDataMoreItems,
  moreIndex_b,
  setMoreIndex_b,
  btnOff3,setBtnOff3
}
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
};

export const UseGlobalContext = () => useContext(Context);