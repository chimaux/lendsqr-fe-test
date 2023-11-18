import { Dispatch, useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";
import filter from "./images/filterBtn.png";
import nextActive from "./images/nextBtnActive.png";
import prevActive from "./images/prevBtnActive.png";
import more from "./images/more.png";
import PaginationDropdown from "./paginationDropdown/PaginationDropdown";
import { UseGlobalContext } from "../../Context";
import FilterComponent from "./filterComponent/FilterComponent";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import UserMoreItems from "./userMoreItem/UserMoreItems";
import FocusFix1 from "./FocusFix1";
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
const User = () => {
  const userDatabase = new Dexie("user_db");

  userDatabase.version(1).stores({
    customerData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",
    guarantorTable:
      "++id,user_id,guarantor_name,guarantor_phone_number,guarantor_email,guarantor_relationship",
  });

  const customerData1 = userDatabase.table("customerData");

  const items = useLiveQuery(() => customerData1.toArray(), []);
  const itemsLengths = items?.length === undefined ? 1 : items.length;

  interface paginationComponentProps {
    itemsLength: number;
  }

  const paginationProbs: paginationComponentProps = {
    // itemsLength:2,
    itemsLength: itemsLengths,
  };

  // USERS, ACTIVE USERS, USERS WITH LOANS, USERS WITH SAVINGS
  const tabContent = [
    {
      icon: tabIcon1,
      title: "USERS",
      number: "2,453",
    },
    {
      icon: tabIcon2,
      title: "ACTIVE USERS",
      number: "2,453",
    },
    {
      icon: tabIcon3,
      title: "USERS WITH LOANS",
      number: "2,453",
    },
    {
      icon: tabIcon4,
      title: "USERS WITH SAVINGS",
      number: "2,453",
    },
  ];

  function Items({
    usersData,
    setShowFilter,
    showFilter,
    setToggleUserDataMoreItems,
    setMoreIndex_b,
    set_user_more_overlay,
    set_active_page_number,
    linesPerPage,
    itemOffset,
    toggleUserDataMoreItems,
    itemsLengths
  }: {
    usersData: any[] | undefined;
    setShowFilter: Dispatch<React.SetStateAction<boolean>>;
    showFilter: boolean;
    toggleUserDataMoreItems: null | boolean;
    setToggleUserDataMoreItems: Dispatch<React.SetStateAction<null | boolean>>;
    setMoreIndex_b: Dispatch<React.SetStateAction<number>>;
    setItemOffset: Dispatch<React.SetStateAction<number>>;
    btnOff3: boolean;
    setBtnOff3: Dispatch<React.SetStateAction<boolean>>;
    set_user_more_overlay: Dispatch<React.SetStateAction<boolean>>;
    set_active_page_number: Dispatch<React.SetStateAction<number>>;
    active_page_number: number;
    linesPerPage: number;
    itemOffset: number;
    itemsLengths: number;
    handlePageClick:(event: {
      selected: number;
  }) => void;

  }) {
    const showFilterBoxHandler = () => {
      setShowFilter((prev) => !prev);
    };
    const targetElementRef = useRef<HTMLButtonElement | null>(null);
    const tableRef = useRef<HTMLTableElement | null>(null);

    return (
      <>
        <div className="secondContainer" >
          {showFilter && <FilterComponent />}
          <table>
            <thead>
              <tr className="tr">
                <th>
                  <div onClick={showFilterBoxHandler} className="thead" ref={tableRef}>
                    ORGANIZATION
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
                <th>
                  {" "}
                  <div onClick={showFilterBoxHandler} className="thead">
                    USERNAME
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
                <th>
                  {" "}
                  <div onClick={showFilterBoxHandler} className="thead">
                    EMAIL
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
                <th>
                  {" "}
                  <div onClick={showFilterBoxHandler} className="thead">
                    PHONE NUMBER
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
                <th>
                  {" "}
                  <div onClick={showFilterBoxHandler} className="thead">
                    DATE JOINED
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
                <th>
                  {" "}
                  <div onClick={showFilterBoxHandler} className="thead">
                    STATUS
                    <img className="icon" src={filter} alt=" " />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData &&
                usersData.map((item, index) => (
                  <tr
                    key={index}
                    id={`data${index}`}
                    className="tableData"
                  >
                    <td>
                      <span className="tdata">{item.organization}</span>
                    </td>
                    <td>
                      <span className="tdata">{item.username}</span>
                    </td>
                    <td>
                      <span className="tdata">{item.email}</span>
                    </td>
                    <td>
                      <span className="tdata">{item.phone_number}</span>
                    </td>
                    <td>
                      <span className="tdata">{item.date_joined}</span>
                    </td>
                    <td>
                      <div className="tdata ">
                        <UserMoreItems moreIndex_a={(linesPerPage * (itemOffset/linesPerPage)) +index} />
                        <FocusFix1 moreIndex_a={(linesPerPage * (itemOffset/linesPerPage)) +index} />
                        <div
                          className={`tdata2 ${
                            item.status === "inactive"
                              ? "inactive"
                              : item.status === "active"
                              ? "activee"
                              : item.status === "pending"
                              ? "pending"
                              : "blacklist"
                          }`}
                        >
                          {item.status}
                        </div>
                        <button
                          ref={targetElementRef}
                          className="user_more_Btn "
                      
                          onClick={() => {
                      
                            setMoreIndex_b((linesPerPage * (itemOffset/linesPerPage)) +index);
                   
                            if (toggleUserDataMoreItems === null || toggleUserDataMoreItems === false){
                              setToggleUserDataMoreItems(true)
                            }
                            else{
                              setToggleUserDataMoreItems(false)
                            }
                            
                            set_user_more_overlay((prev) => !prev)
                            set_active_page_number(itemOffset/linesPerPage)
                          }}
                        >
                          <img className="user_more_icon" src={more} alt=" " />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          
          </table>
  {
            itemsLengths === 0 ? 
            <div
            style={{
              display:"flex",
              flexDirection:"column",
              alignItems:"center"
            }}
            >
              <Spinner animating={itemsLengths === 0 ? true : false} />
              <div 
              style={{
                marginTop:10,
                color:"rgb(73,74,77)"
              }}
              >Loading data from IndexDB may be slow on Chrome, Safari and IE. Data will be up in a minute.</div>
            </div>:""
  }
        </div>
      </>
    );
  }
  const [itemOffset, setItemOffset] = useState(0);
  function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {

    const {
      setShowFilter,
      showFilter,
      setToggleUserDataMoreItems,
      setMoreIndex_b,
      setBtnOff3,
      btnOff3,
      set_user_more_overlay,
      active_page_number,
      toggleUserDataMoreItems,
      set_active_page_number

    } = UseGlobalContext();

    const endOffset = itemOffset + itemsPerPage;
    const usersData = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(
      items?.length === undefined ? 1 : items.length / itemsPerPage
    );

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
      const newLength = items?.length === undefined ? 1 : items.length;
      const newOffset = (event.selected * itemsPerPage) % newLength;
      // console.log(
      //   `User requested page number ${event.selected}, which is offset ${newOffset}`
      // );
      setItemOffset(newOffset);
      set_active_page_number(newOffset/itemsPerPage)
    
    
    };

   
    return (
      <>
        <Items
          usersData={usersData}
          setShowFilter={setShowFilter}
          showFilter={showFilter}
          setToggleUserDataMoreItems={setToggleUserDataMoreItems}
          toggleUserDataMoreItems={toggleUserDataMoreItems}
          setMoreIndex_b={setMoreIndex_b}
          setBtnOff3={setBtnOff3}
          btnOff3={btnOff3}
          set_user_more_overlay={set_user_more_overlay}
          active_page_number={active_page_number}
          linesPerPage={linesPerPage}
          itemOffset={itemOffset}
          setItemOffset = {setItemOffset}
          handlePageClick = {handlePageClick}
          set_active_page_number={set_active_page_number}
          itemsLengths={itemsLengths}

        />
        <div className="pagination">
          <PaginationDropdown {...paginationProbs} />
          <ReactPaginate
            breakLabel="..."
            nextLabel={<img className="icon" src={nextActive} alt=" " />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel={<img className="icon" src={prevActive} alt=" " />}
            renderOnZeroPageCount={null}
            activeClassName="active"
            activeLinkClassName="active"
            containerClassName="paginationContainer"
            previousClassName="previousLi"
            pageClassName="eachLI"
            pageLinkClassName="eachPageNum"
            nextClassName="previousLi"
            breakClassName="previousLi eachPageNum"
            forcePage={active_page_number !== null ? active_page_number : 0} 
          />
        </div>
      </>
    );
  }

  // CHECK IF INDEX DB CONTAINS DATA UP TO 500
  const test_for_db = () => {
    const db_state_string = localStorage.getItem("db_state");
    const dbState = db_state_string ? JSON.parse(db_state_string) : "false";
    return dbState;


    // if (
    //   customerDataList?.length === 500 &&
    //   customerGuarantorsList?.length === 500
    // ) {
    //   setcheck_if_DB_exist(true);
    //   console.log("true meme");
    // } else if (
    //   customerDataList?.length === 0 &&
    //   customerGuarantorsList?.length === 0
    // ) {
    //   setcheck_if_DB_exist(false);
    //   console.log("false meme");
    // }
    // console.log(check_if_DB_exist, " you sure!!");
  };

  const [check_if_DB_exist, setcheck_if_DB_exist] = useState<string>(
    test_for_db()
  );

  const customerData = userDatabase.table("customerData");


  const customerDataList = useLiveQuery(() => customerData.toArray(), []);


  useEffect(() => {
    test_for_db();
  }, [customerDataList?.length]);

  // LOAD 500 USER DATA INTO INDEX DB
  useEffect(() => {
    if (check_if_DB_exist === "false") {
      const customerData = userDatabase.table("customerData");
      const guarantorTable = userDatabase.table("guarantorTable");

      let i = 1;
      const loop = setInterval(() => {
        const addCDL = async (val: number) => {
          await customerData.add({
            user_id: `xxxx${val}`,
            organization: `Lenders${val}`,
            username: `kemi${val}`,
            email: `kemi@gmail.com${val}`,
            phone_number: `09076543566${val}`,
            date_joined:`${
              val <= 150
                ? "03 / 20 / 2023"
                : val > 150 && val <= 300
                ? "05 / 13 / 2023"
                : val > 300 && val < 450
                ? "10 / 10 / 2023"
                : "11 / 20 / 2023"
            }`,
            status: `${
              val <= 150
                ? "pending"
                : val > 150 && val <= 300
                ? "active"
                : val > 300 && val < 450
                ? "inactive"
                : "blacklist"
            }`,
            full_name: `Kemi Fumilayo${val}`,
            users_tier: `${val < 150 ? "2" : val > 400 ? "1" : "3"}`,
            amount: `200000${val}`,
            bank_name: `${
              val < 150
                ? "Providus Bank"
                : val > 400
                ? "Zenith Bank"
                : "Union Bank"
            }`,
            bank_account_number: `098765467${val}`,
            bvn: `767656563${val}`,
            gender: `${val < 150 ? "m" : "f"}`,
            marital_status: `${val < 150 ? "Single" : "Married"}`,
            children: `0${val}`,
            type_of_residence: `${
              val < 150 ? "Parents house" : "Personal apartment"
            }`,
            education: `${val < 150 ? "PHD" : val > 400 ? "BSC" : "HND"}`,
            employment: `${val < 150 ? "yes" : "no"}`,
            sector_of_employment: `Finance${val}`,
            duration_of_employment: `${
              val < 150 ? "2" : val > 400 ? "3" : "5"
            }`,
            office_email: `kemioffice@gmail.com${val}`,
            monthly_income: `60,000 - 80,000${val}`,
            loan_repayment: `30000${val}`,
            twitter: `twitter.com/kemis${val}`,
            facebook: `facebook.com/kemis${val}`,
            instagram: `instagram.com/kemis${val}`,
          });
          await guarantorTable.add({
            user_id: `xxxx${val}`,
            guarantor_name: `Shola Fumilayo${val}`,
            guarantor_phone_number: `0908788876${val}`,
            guarantor_email: `shola111@gmail.com${val}`,
            guarantor_relationship: `${val < 150 ? "brother" : "sister"}`,
          });
        };
        addCDL(i);
        // console.log(i);
        i++;
        if (i === 501) {
          clearTimeout(loop);
          setcheck_if_DB_exist("true");
          localStorage.setItem("db_state", JSON.stringify("true"));
        }
      }, 10);
      return () => {
        clearTimeout(loop);
      };
    }
  }, [check_if_DB_exist]);

  const { linesPerPage, active_page_number } = UseGlobalContext();

  useEffect(() => {
    // Update the forcePage prop when active_page_number changes
    if (active_page_number !== null) {
      const newOffset = active_page_number * linesPerPage;
      setItemOffset(newOffset);
    }
  }, [active_page_number, linesPerPage]);
  return (
    <Layout>
      <div className="userText">Users</div>
      {/* HEAD TABS STARTS HERE*/}
      <div className="tabs">
        {tabContent.map((item, index) => (
          <div className="headTabs" key={index.toString()}>
            <div>
              <img className="icon" src={item.icon} alt={`Image ${index}`} />
            </div>
            <div className="title">{item.title}</div>

            <div className="number">{item.number}</div>
          </div>
        ))}
      </div>
      {/* HEAD TABS ENDS HERE*/}

      <PaginatedItems itemsPerPage={linesPerPage} />
    </Layout>
  );
};

export default User;
