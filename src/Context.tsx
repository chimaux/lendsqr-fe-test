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
  toggleUserDataMoreItems: null| boolean;
  setToggleUserDataMoreItems:React.Dispatch<React.SetStateAction<null|  boolean>>;
  moreIndex_b:number;
  setMoreIndex_b:React.Dispatch<React.SetStateAction<number>>;
  btnOff3:boolean;
  setBtnOff3:React.Dispatch<React.SetStateAction<boolean>>;
  set_user_more_overlay:React.Dispatch<React.SetStateAction<boolean>>;
  user_more_overlay:boolean;
  active_page_number:number;
  set_active_page_number:React.Dispatch<React.SetStateAction<number>>
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
const [  toggleUserDataMoreItems,setToggleUserDataMoreItems] =useState<null|  boolean>(null)
// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE

// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE
const [  moreIndex_b,setMoreIndex_b] =useState<number>(0)
// PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE

// USER MORE OVERLAY STARTS HERE
const [ user_more_overlay, set_user_more_overlay] =useState<boolean>(false)
// USER MORE OVERLAY ENDS  HERE

// USER MORE OVERLAY STARTS HERE
const [ active_page_number, set_active_page_number] =useState<number>(0)
// USER MORE OVERLAY ENDS  HERE




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
  btnOff3,setBtnOff3,
  set_user_more_overlay,
  user_more_overlay,
  active_page_number, set_active_page_number
  

}
  return (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )
};

export const UseGlobalContext = () => useContext(Context);