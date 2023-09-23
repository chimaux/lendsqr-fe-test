import Login from "./screen/login/Login";

 import { UseGlobalContext } from "./Context";
// import User from "./screen/user/User";
// import Dashboard from "./screen/dashboard/Dashboard";
import User from "./screen/user/User";



const Authentication: React.FC = () => {
  
 
 const {
   isLogged,

 } = UseGlobalContext();

return <>{isLogged == false ? <Login /> :  <User /> }</>;
};

export default Authentication;
