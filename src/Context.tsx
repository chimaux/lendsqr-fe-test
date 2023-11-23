import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

interface filter_input_state_type {
  organization: string;
  Username: string;
  email: string;
  date: string;
  phone_number: string;
  status: string;
}

type MyType = {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  moreOpen: boolean;
  setMoreopen: React.Dispatch<React.SetStateAction<boolean>>;
  btnOff: boolean;
  setBtnOff: React.Dispatch<React.SetStateAction<boolean>>;
  linesPerPage: number;
  setLinesPerPage: React.Dispatch<React.SetStateAction<number>>;
  pageName: string;
  setPageName: React.Dispatch<React.SetStateAction<string>>;
  showMobileNav: boolean;
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  btnOff2: boolean;
  setBtnOff2: React.Dispatch<React.SetStateAction<boolean>>;
  popup_check: string;
  set_popup_check: React.Dispatch<React.SetStateAction<string>>;
  toggleUserDataMoreItems: null | boolean;
  setToggleUserDataMoreItems: React.Dispatch<
    React.SetStateAction<null | boolean>
  >;
  moreIndex_b: string;
  setMoreIndex_b: React.Dispatch<React.SetStateAction<string>>;
  btnOff3: boolean;
  setBtnOff3: React.Dispatch<React.SetStateAction<boolean>>;
  set_user_more_overlay: React.Dispatch<React.SetStateAction<boolean>>;
  user_more_overlay: boolean;
  active_page_number: number;
  set_active_page_number: React.Dispatch<React.SetStateAction<number>>;
  items: any[] | undefined;
  indexDB_items: any[] | undefined;
  set_items: React.Dispatch<React.SetStateAction<any[] | undefined>>;
  itemOffset: number;
  setItemOffset: React.Dispatch<React.SetStateAction<number>>;
  // filter_component_function: () => void;
  filter_component_function2: () => void;
  filter_input_state22: filter_input_state_type;
  set_filter_input_state22: React.Dispatch<
    React.SetStateAction<filter_input_state_type>
  >;
  status_update_popup: boolean;
  set_status_update_popup: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<MyType>({} as MyType);

export const GlobalContext = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  // const [ isLogged,setIsLogged] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [moreOpen, setMoreopen] = useState(false);
  // BTN OPEN STATE STARTS HERE
  const [btnOff, setBtnOff] = useState<boolean>(false);
  // BTN OPEN STATE ENDS HERE

  const initialPageLoad = () => {
    isLogged === true ? navigate("/user") : navigate("/");
  };

  useEffect(() => {
    initialPageLoad();
  }, [isLogged]);

  // PAGINATION CONFIGURATION STARTS HERE
  const [linesPerPage, setLinesPerPage] = useState(10);
  // PAGINATION CONFIGURATION ENDS HERE

  // PAGE NAME FOR SIDE NAVIGATION STARTS HERE
  // const [pageName,setPageName] =useState("Users")
  const [pageName, setPageName] = useState("");
  // PAGE NAME FOR SIDE NAVIGATION ENDS HERE

  // SHOW MOBILE SIDE NAVIGATION STARTS HERE
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  // SHOW MOBILE SIDE NAVIGATION ENDS HERE

  // SHOW FILTER STARTS HERE
  const [showFilter, setShowFilter] = useState<boolean>(false);
  // SHOW FILTER ENDS HERE
  // SHOW FILTER STARTS HERE
  const [btnOff2, setBtnOff2] = useState<boolean>(false);
  // SHOW FILTER ENDS HERE
  // SHOW PENDING ACTIVE BLACKLIST AND INACTIVE MORE COMPONENT STARTS HERE
  const [btnOff3, setBtnOff3] = useState<boolean>(false);
  //SHOW PENDING ACTIVE BLACKLIST AND INACTIVE MORE COMPONENT STARTSENDS HERE
  // PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE
  const [toggleUserDataMoreItems, setToggleUserDataMoreItems] = useState<
    null | boolean
  >(null);
  // PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE

  // PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE
  const [moreIndex_b, setMoreIndex_b] = useState<string>("");
  // PENDING ACTIVATE BLACKLIST INACTIVE STARTS HERE

  // USER MORE OVERLAY STARTS HERE
  const [user_more_overlay, set_user_more_overlay] = useState<boolean>(false);
  // USER MORE OVERLAY ENDS  HERE

  // USER MORE OVERLAY STARTS HERE
  const [active_page_number, set_active_page_number] = useState<number>(0);
  // USER MORE OVERLAY ENDS  HERE

  // FOR PAGINATION
  const [itemOffset, setItemOffset] = useState(0);
  // FOR PAGINATION

  // FOR PAGINATION
  const [popup_check, set_popup_check] = useState("");
  // FOR PAGINATION

  const [status_update_popup, set_status_update_popup] = useState(false);

  const userDatabase = new Dexie("user_db");

  userDatabase.version(1).stores({
    customerData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",
    guarantorTable:
      "++id,user_id,guarantor_name,guarantor_phone_number,guarantor_email,guarantor_relationship",
  });

  const customerData1 = userDatabase.table("customerData");

  const indexDB_items = useLiveQuery(() => customerData1.toArray(), []);

  // DATA FROM INDEXDB STATE
  const [items, set_items] = useState<any[] | undefined>(indexDB_items);

  useEffect(() => {
    set_items(indexDB_items);
  }, [indexDB_items]);

  // FILTER INPUTS STATE STARTS HERE
  const [filter_input_state22, set_filter_input_state22] =
    useState<filter_input_state_type>({
      organization: "",
      Username: "",
      email: "",
      date: "",
      phone_number: "",
      status: "",
    });
  // FILTER INPUTS STATE ENDS HERE

  const for_filtered_items = useLiveQuery(() => customerData1.toArray(), []);

  const { organization, Username, email, date, phone_number, status } =
    filter_input_state22;
  // const filter_component_function = () => {
  //   let status_new_value: string;
  //   switch (status) {
  //     case "Inactive user":
  //       status_new_value = "inactive";
  //       break;
  //     case "Pending user":
  //       status_new_value = "pending";
  //       break;
  //     case "Active user":
  //       status_new_value = "active";
  //       break;
  //     case "Blacklisted user":
  //       status_new_value = "blacklist";
  //       break;
  //     default:
  //       status_new_value = "";
  //   }

  //   if (
  //     status_new_value !== "" ||
  //     phone_number !== "" ||
  //     email !== "" ||
  //     date !== "" ||
  //     Username !== "" ||
  //     organization !== ""
  //   ) {
    
  //     const sorted_status = for_filtered_items?.filter((data) => {
  //       const new_value =
  //         (status_new_value !== "" ? data.status === status_new_value : true) &&
  //         (phone_number !== "" ? data.phone_number === phone_number : true) &&
  //         (date !== "" ? data.date_joined === date : true) &&
  //         (email !== "" ? data.email === email : true) &&
  //         (organization !== "" ? data.organization === organization : true) &&
  //         (Username !== "" ? data.username === Username : true);
  //       // console.log(new_value, "new valve");
  //       return new_value;
  //     });
  //     console.log(sorted_status);
  //     // console.log(new_value);
  //     if (sorted_status?.length !== 0) {
  //       set_items(sorted_status);
  //       setShowFilter((prev) => !prev);
  //       setItemOffset(0);
  //       set_active_page_number(0);
  //     }
  //     else{
  //       console.log("not found")
  //     }
  //   }
  // };

  const filter_component_function2 = () => {
    let status_new_value: string;
    switch (status) {
      case "Inactive user":
        status_new_value = "inactive";
        break;
      case "Pending user":
        status_new_value = "pending";
        break;
      case "Active user":
        status_new_value = "active";
        break;
      case "Blacklisted user":
        status_new_value = "blacklist";
        break;
      default:
        status_new_value = "";
    }

    if (
      status_new_value !== "" ||
      phone_number !== "" ||
      email !== "" ||
      date !== "" ||
      Username !== "" ||
      organization !== ""
    ) {
    
      const sorted_status = for_filtered_items?.filter((data) => {
        const new_value =
          (status_new_value !== "" ? data.status === status_new_value : true) &&
          (phone_number !== "" ? data.phone_number === phone_number : true) &&
          (date !== "" ? data.date_joined === date : true) &&
          (email !== "" ? data.email === email : true) &&
          (organization !== "" ? data.organization === organization : true) &&
          (Username !== "" ? data.username === Username : true);
        // console.log(new_value, "new valve");
        return new_value;
      });
      // console.log(sorted_status);
      // console.log(new_value);
      if (sorted_status?.length !== 0) {
        set_items(sorted_status);
  
      }
      else{
        console.log("not found")
      }
    }
  };

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
    btnOff3,
    setBtnOff3,
    set_user_more_overlay,
    user_more_overlay,
    active_page_number,
    set_active_page_number,
    items,
    set_items,
    indexDB_items,
    itemOffset,
    setItemOffset,
    filter_component_function2,
    filter_input_state22,
    set_filter_input_state22,
    status_update_popup,
    set_status_update_popup,
    popup_check,
    set_popup_check
  };
  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const UseGlobalContext = () => useContext(Context);
