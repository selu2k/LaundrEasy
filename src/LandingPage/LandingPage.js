import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function LandingPage({setSign}) {
  return (
    //Removed ROuter
      <Home setSign={setSign}/>
    
  );
}

export default LandingPage;
