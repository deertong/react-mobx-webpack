import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import { useObserver } from "mobx-react";
import { useStores } from "~/store/hooks";

import "./style.less";

const dateFormat = "YYYY-MM-DD HH-mm-ss";

function index(props) {
  const { todoStore } = useStores();
  const [detailInfo, setDetailInfo] = useState({});
  const urlParam = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const { todoList } = todoStore;
    const { id } = urlParam;
    const payload = todoList.find((item) => item.date == id);
    if (!payload) {
      navigate("/");
      return;
    }
    setDetailInfo(payload);
  }, []);

  return useObserver(() => {
    return (
      <div className="details-content">
        <div className="title">{detailInfo.name}</div>
        <div className="date">
          创建时间：{moment(detailInfo.date).format(dateFormat)}
        </div>
      </div>
    );
  });
}

export default index;
