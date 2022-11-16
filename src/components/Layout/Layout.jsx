import React, {useState} from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebar";
import TopNav from "../TopNav/TopNav";
import Applog from "../../Login/AppLog";

import useToken from "../../useToken";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }
// function getToken() {
//   // console.log(sessionStorage.getItem('token'));
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function Layout() {
  const { token, setToken } = useToken();
  // const token = getToken();
  console.log(token);
  if (token) {
    return (
      <div className="layout">
        <Sidebar token={token} />
        <div className="main__layout">
          <TopNav />
          <div className="content">
            <Router token={token} />
          </div>
        </div>
      </div>
    )
  } else {
    return <Applog setToken={setToken}/>
  }

};

export default Layout;
