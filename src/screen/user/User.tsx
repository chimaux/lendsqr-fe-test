import {useState}  from "react"

import ReactPaginate from 'react-paginate';
import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";
import filter from './images/filterBtn.png'
import more from './images/more.png'


const items = [
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
    organization:"Lendsqr2",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"active",
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
    organization:"Lendsqr3",
    username:"Adedeji",
    email:"adedeji@lendsqr.com",
    phoneno:"08078903721",
    datejoined:"May 15, 2020 10:00 AM",
    status:"blacklisted",
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
    status:"inactive",
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
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function Items({ usersData }: { usersData: any[] }) {
  return (
    <>
<div className="secondContainer">
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
          <td><div className="tdata "><div className={`tdata2 ${item.status === "inactive" ? "inactive": item.status === "active" ? "active" : item.status === "pending" ? "pending" : "blacklist" }`}>{item.status}</div><img className="icon" src={more} alt=" " /></div></td>
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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        activeClassName="active"
        containerClassName="paginationContainer"
      />
    </>
  );
}




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

{/* <div className="secondContainer">



  
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
        usersData.map((item,index)=>(
          <tr key={index.toString()} id={`data${index}`} className="tableData">
          <td><span className="tdata">{item.organization}</span></td>
          <td><span className="tdata">{item.username}</span></td>
          <td><span className="tdata">{item.email}</span></td>
          <td><span className="tdata">{item.phoneno}</span></td>
          <td><span className="tdata">i{item.datejoined}</span></td>
          <td><div className="tdata "><div className={`tdata2 ${item.status === "inactive" ? "inactive": item.status === "active" ? "active" : item.status === "pending" ? "pending" : "blacklist" }`}>{item.status}</div><img className="icon" src={more} alt=" " /></div></td>
        </tr>
        ))
      }
    </tbody>


  </table>


</div> */}


<PaginatedItems itemsPerPage={4} />
    </Layout>
  );
};



export default User;
