import { Dispatch, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";
import filter from "./images/filterBtn.png";
// import nextInactive from './images/nextBtnInactive.png'
import nextActive from "./images/nextBtnActive.png";
// import prevInactive from './images/prevBtnInactive.png'
import prevActive from "./images/prevBtnActive.png";
import more from "./images/more.png";
import PaginationDropdown from "./paginationDropdown/PaginationDropdown";
import { UseGlobalContext } from "../../Context";
import FilterComponent from "./filterComponent/FilterComponent";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import UserMoreItems from "./userMoreItem/UserMoreItems";

const User = () => {
  const userDB = new Dexie("user_database");

  userDB.version(2).stores({
    customersData:
      "++id,user_id,organization,username,email,phone_number,date_joined,status,full_name,users_tier,amount,bank_name,bank_account_number,bvn,gender,marital_status,children,type_of_residence,education,employment,sector_of_employment,duration_of_employment,office_email,monthly_income,loan_repayment,twitter,facebook,instagram",
    guarantorsTable:
      "++id,user_id,guarantor_name,guarantor_phone_number,guarantor_email,guarantor_relationship",
  });

  const customersData1 = userDB.table("customersData");

  const items = useLiveQuery(() => customersData1.toArray(), []);
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
    setBtnOff3,
    btnOff3
  }: {
    usersData: any[] | undefined;
    setShowFilter: Dispatch<React.SetStateAction<boolean>>;
    showFilter: boolean;
    setToggleUserDataMoreItems: Dispatch<React.SetStateAction<boolean>>;
    setMoreIndex_b: Dispatch<React.SetStateAction<string>>;
    btnOff3:boolean;
    setBtnOff3: Dispatch<React.SetStateAction<boolean>>;
  }) {
    const showFilterBoxHandler = () => {
      setShowFilter((prev) => !prev);
    };

    return (
      <>
        <div className="secondContainer">
          {showFilter && <FilterComponent />}
          <table>
            <thead>
              <tr className="tr">
                <th>
                  <div onClick={showFilterBoxHandler} className="thead">
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
                    key={index.toString()}
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
                        <UserMoreItems moreIndex_a={index.toString()} />
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
                         className="user_more_Btn "
                          disabled={btnOff3}
                          onClick={() => {
                            setBtnOff3(true);
                            setMoreIndex_b(index.toString());
                            setToggleUserDataMoreItems((prev) => !prev);
                          }}
                        >

<img
                          className="user_more_icon"
                          src={more}
                          alt=" "
                        />
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const usersData = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(
      items?.length === undefined ? 1 : items.length / itemsPerPage
    );

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
      const newLength = items?.length === undefined ? 1 : items.length;
      const newOffset = (event.selected * itemsPerPage) % newLength;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    const {
      setShowFilter,
      showFilter,
      setToggleUserDataMoreItems,
      setMoreIndex_b,
      setBtnOff3,
      btnOff3
    } = UseGlobalContext();

    return (
      <>
        <Items
          usersData={usersData}
          setShowFilter={setShowFilter}
          showFilter={showFilter}
          setToggleUserDataMoreItems={setToggleUserDataMoreItems}
          setMoreIndex_b={setMoreIndex_b}
          setBtnOff3={setBtnOff3}
          btnOff3={btnOff3}
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
          />
        </div>
      </>
    );
  }

  const [check_if_DB_exist, setcheck_if_DB_exist] = useState<boolean>();

  const customersData = userDB.table("customersData");
  const guarantorsTable = userDB.table("guarantorsTable");

  const customerDataList = useLiveQuery(() => customersData.toArray(), []);
  const customerGuarantorsList = useLiveQuery(
    () => guarantorsTable.toArray(),
    []
  );

  // CHECK IF INDEX DB CONTAINS DATA UP TO 500
  const test_for_db = () => {
    console.log(customerDataList, "list list");

    if (
      customerDataList?.length === 500 &&
      customerGuarantorsList?.length === 500
    ) {
      setcheck_if_DB_exist(true);
      console.log("true meme");
    } else if (
      customerDataList?.length === 0 &&
      customerGuarantorsList?.length === 0
    ) {
      setcheck_if_DB_exist(false);
      console.log("false meme");
    }
    console.log(check_if_DB_exist, " you sure!!");
  };

  useEffect(() => {
    test_for_db();
  }, [customerDataList?.length]);

  // LOAD 500 USER DATA INTO INDEX DB
  useEffect(() => {
    if (check_if_DB_exist === false) {
      const customersData = userDB.table("customersData");
      const guarantorsTable = userDB.table("guarantorsTable");

      let i = 1;
      const loop = setInterval(() => {
        const addCDL = async (val: number) => {
          await customersData.add({
            user_id: `xxxx${val}`,
            organization: `Lenders${val}`,
            username: `kemi${val}`,
            email: `kemi@gmail.com${val}`,
            phone_number: `09076543566${val}`,
            date_joined: `22-10-2023${val}`,
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
          await guarantorsTable.add({
            user_id: `xxxx${val}`,
            guarantor_name: `Shola Fumilayo${val}`,
            guarantor_phone_number: `0908788876${val}`,
            guarantor_email: `shola111@gmail.com${val}`,
            guarantor_relationship: `${val < 150 ? "brother" : "sister"}`,
          });
        };
        addCDL(i);
        console.log(i);
        i++;
        if (i === 501) {
          clearTimeout(loop);
        }
      }, 10);
      return () => {
        clearTimeout(loop);
      };
    }
  }, [check_if_DB_exist]);

  const { linesPerPage } = UseGlobalContext();
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
