import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment";
import './style.less'

const dateFormat = "YYYY-MM-DD HH-mm-ss";

function index(props) {
  const { detailInfo, todoList } = props;
  const urlParam = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const { id } = urlParam;
    const payload = todoList.find((item) => item.date == id);
    if (!payload) {
      navigate("/");
      return;
    }
    props.getDetail(payload);
  }, []);
  return (
    <div className="details-content">
      <div className="title">{detailInfo.name}</div>
      <div className="date">
        创建时间：{moment(detailInfo.date).format(dateFormat)}
      </div>
    </div>
  );
}

export default index
