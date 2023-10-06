import {useState}  from "react"
import ReactPaginate from 'react-paginate';
import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";
import filter from './images/filterBtn.png'
// import nextInactive from './images/nextBtnInactive.png'
import nextActive from './images/nextBtnActive.png'
// import prevInactive from './images/prevBtnInactive.png'
import prevActive from './images/prevBtnActive.png'
import more from './images/more.png'
import PaginationDropdown from "./paginationDropdown/PaginationDropdown";
import { UseGlobalContext } from "../../Context";


const items = [
  {
    organization:"Lendsqr1",
    username:"Adedeji1",
    email:"adedeji@lendsqr.com1",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:01 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr2",
    username:"Adedeji2",
    email:"adedeji@lendsqr.com2",
    phoneno:"08078903722",
    datejoined:"May 15, 2020 10:02 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr3",
    username:"Adedej3",
    email:"adedeji@lendsqr.com3",
    phoneno:"08078903723",
    datejoined:"May 15, 2020 10:00 AM3",
    status:"active",
  },
  {
    organization:"Lendsqr4",
    username:"Adedeji4",
    email:"adedeji@lendsqr.com4",
    phoneno:"08078903724",
    datejoined:"May 15, 2020 10:04 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr3",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"blacklisted",
  },
  {
    organization:"Lendsqr4",
    username:"Adedeji4",
    email:"adedeji@lendsqr.com4",
    phoneno:"08078903724",
    datejoined:"May 15, 2020 10:04 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr5",
    username:"Adedeji5",
    email:"adedeji@lendsqr.com5",
    phoneno:"08078903725",
    datejoined:"May 15, 2020 10:05 AM",
    status:"inactive",
  },
  {
    organization:"Lendsqr6",
    username:"Adedeji6",
    email:"adedeji@lendsqr.com6",
    phoneno:"08078903726",
    datejoined:"May 15, 2020 10:06 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr7",
    username:"Adedeji7",
    email:"adedeji@lendsqr.com7",
    phoneno:"08078903727",
    datejoined:"May 15, 2020 10:07 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr8",
    username:"Adedeji8",
    email:"adedeji@lendsqr.com8",
    phoneno:"08078903728",
    datejoined:"May 15, 2020 10:08 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr9",
    username:"Adedeji9",
    email:"adedeji@lendsqr.com9",
    phoneno:"08078903729",
    datejoined:"May 15, 2020 10:09 AM",
    status:"pending",
  },
  {
    organization:"Lendsqr10",
    username:"Adedeji10",
    email:"adedeji@lendsqr.com10",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:10 AM",
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

const itemsLengths = items.length;

interface paginationComponentProps {
  itemsLength: number;
}

const paginationProbs: paginationComponentProps = {
  // itemsLength:2,
 itemsLength:itemsLengths,
};




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
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function Items({ usersData }: { usersData: any[] }) {
  return (
    <>
<div className="secondContainer">

{/* <div className="filterContainer">gogogo</div> */}
<table >

<thead>

<tr className="tr">


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
       usersData && usersData.map((item,index)=>(
          <tr key={index.toString()} id={`data${index}`} className="tableData">
          <td><span className="tdata">{item.organization}</span></td>
          <td><span className="tdata">{item.username}</span></td>
          <td><span className="tdata">{item.email}</span></td>
          <td><span className="tdata">{item.phoneno}</span></td>
          <td><span className="tdata">i{item.datejoined}</span></td>
          <td><div className="tdata "><div className={`tdata2 ${item.status === "inactive" ? "inactive": item.status === "active" ? "activee" : item.status === "pending" ? "pending" : "blacklist" }`}>{item.status}</div><img className="icon" src={more} alt=" " /></div></td>
        </tr>
        ))
      }
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
  const usersData = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };



  return (
    <>
    
      <Items usersData={usersData} />
<div className="pagination">
  <PaginationDropdown 
  {...paginationProbs}
  />
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




const User = () => {
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
