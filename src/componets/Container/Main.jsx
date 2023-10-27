import React from "react";
import SidebarWithHeader from "../Sidebar/Sidebar";

const Main = ({ children }) => {
  return <SidebarWithHeader>{children}</SidebarWithHeader>;
};

export default Main;
