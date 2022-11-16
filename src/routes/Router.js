import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import LostFound from "../pages/LostFound";
import Faq from "../pages/Faq";
import Settings from "../pages/Settings";
import Employee from "../pages/Employee";
import Noticeboard from "../pages/Noticeboard";
import NoticeEmployee from "../pages/NoticeEmployee";
const Router = ({token}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/faqs" element={<Faq />} />}
      />
      <Route path="/dashboard" element={<Dashboard token={token} />} />
      <Route path="/lostandfound" element={<LostFound />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/settings" element={<Settings token={token} />} />
      <Route path="/empDashboard" element={<Employee />} />
      <Route path="/noticeboard" element={<Noticeboard />} />
      <Route path="/empNotice" element={<NoticeEmployee />} />
    </Routes>
  );
};

export default Router;
