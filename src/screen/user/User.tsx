import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";
import filter from './images/filterBtn.png'
import more from './images/more.png'


const usersData = [
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"pending",
  },
]






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

const User = () => {
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

<div className="secondContainer">
<table>
<thead>
<tr>
    <th ><div className="thead">ORGANIZATION<img className="icon" src={filter} alt=" " /></div></th>
    <th ><div className="thead">USERNAME<img className="icon" src={filter} alt=" " /></div></th>
    <th><div className="thead">EMAIL<img className="icon" src={filter} alt=" " /></div></th>
    <th><div className="thead">PHONE NUMBER<img className="icon" src={filter} alt=" " /></div></th>
    <th><div className="thead">DATE JOINED<img className="icon" src={filter} alt=" " /></div></th>
    <th><div className="thead">STATUS<img className="icon" src={filter} alt=" " /></div></th>
  </tr>
</thead>
<tbody>
    
{
    usersData.map((item,index)=>(
      <tr key={index.toString()} className="tableData">
      <td><span className="tdata">{item.organization}</span></td>
      <td><span className="tdata">{item.username}</span></td>
      <td><span className="tdata">{item.email}</span></td>
      <td><span className="tdata">{item.phoneno}</span></td>
      <td><span className="tdata">i{item.datejoined}</span></td>
      <td><div className="tdata "><div className="tdata2 pending">{item.status}</div><img className="icon" src={more} alt=" " /></div></td>
    </tr>
    ))
  }
</tbody>

  </table>
</div>

    </Layout>
  );
};

export default User;
