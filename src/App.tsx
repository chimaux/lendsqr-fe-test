import { useLocation } from "react-router-dom";
import Router from "./Router";
import "./app.scss";
import { useEffect } from "react";


function App() {
    const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
<Router/>
    </div>
  );
}

export default App;
