import React from "react";
import './sidebar.scss'


const Sidebar = (props) => {


return (
<div className="sidenav" style={{ width: props.width, paddingTop: "20px" }}>
<button className="menu-bar" onClick={() => {
              props.setSideBarExpanded(!props.sideBarExpanded);
            }}> <i className="fa fa-bars fa-1x" aria-hidden="true"></i></button>
  <div id="category-tags" className="sidebar-category mt-3">
     
      <a href="#section" className="tags"><span className="pr-4"><i class="fa fa-clone fa-1x"></i></span> Catalog </a>
      <a href="#section" className="tags"><span className="pr-4"><i class="fa fa-truck fa-1x"></i></span> Logistics </a>
      <a href="#section" className="tags"><span className="pr-4"><i class="fa fa-file fa-1x"></i></span> Reports </a>
      <a href="#section" className="tags"><span className="pr-4"><i class="fa fa-tasks fa-1x"></i></span> Programs</a>
    </div>
  </div>
 );
};
export default Sidebar;