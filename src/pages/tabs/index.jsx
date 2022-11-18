import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/ListAltOutlined";
import FaceIcon from "@mui/icons-material/Face";
import Home from "./home/index";
import List from "./list/index";
import Mine from "./mine/index";
import "./style.less";

function index() {
  const [activTab, setActivTab] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname.split("/");
    const payload = pathname[pathname.length - 1];
    setActivTab(payload);
  }, [location.pathname]);

  return (
    <div className="tabs-content">
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/mine" element={<Mine />} />
        </Routes>
      </div>
      <div className="nav-bar">
        <div className="bar-box">
          <HomeIcon
            style={activTab === "tab" ? { color: "red" } : {}}
            onClick={() => navigate("/tab")}
          />
        </div>
        <div className="bar-box">
          <ListIcon
            style={activTab === "list" ? { color: "red" } : {}}
            onClick={() => navigate("/tab/list")}
          />
        </div>
        <div className="bar-box">
          <FaceIcon
            style={activTab === "mine" ? { color: "red" } : {}}
            onClick={() => navigate("/tab/mine")}
          />
        </div>
      </div>
      <div style={{ height: "25px" }} />
    </div>
  );
}

export default index;
