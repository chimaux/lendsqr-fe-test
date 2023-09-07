import "./user.scss";
import Layout from "../../layout/Layout";
import tabIcon1 from "./images/tabIcon.png";
import tabIcon2 from "./images/tabIcon2.png";
import tabIcon3 from "./images/tabIcon3.png";
import tabIcon4 from "./images/tabIcon4.png";

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

</div>

    </Layout>
  );
};

export default User;
