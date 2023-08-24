import Login from "./screen/login/Login";

import { UseGlobalContext } from "./Context";
import Dashboard from "./screen/dashboard/Dashboard";


const Authentication: React.FC = () => {
 
  const {
    isLogged,

  } = UseGlobalContext();


  return <>{isLogged == false ? <Login /> : <Dashboard />}</>;
};

export default Authentication;
