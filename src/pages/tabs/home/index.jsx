import React, { useState, useRef } from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import { useObserver } from "mobx-react";
import { useStores } from "~/store/hooks";
import moment from "moment";

import "./style.less";

function index() {
  const { todoStore } = useStores();
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const textChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const onSubmit = () => {
    const todoList = todoStore.todoList;
    const datas = [...todoList];
    datas.push({ name: value,done:false, date: moment().valueOf() });
    todoStore.setList(datas);
    setValue("");
    inputRef.current.focus();
  };

  const onCheckChange = (e,record, data) => {
    const todoList = todoStore.todoList;
    const payload = todoList.map((item) => {
      if (item.date === data.date) {
        item.done = record;
      }
      return item;
    });
    todoStore.setList(payload);
  };

  const onDelete = (data) => {
    const todoList = todoStore.todoList;
    const payload = todoList.filter((item) => item.date !== data.date);
    todoStore.setList(payload);
  };

  return useObserver(() => {
    const todoList = todoStore.todoList;
    return (
      <div className="home-content">
        <div className="text-in">
          <TextField
            fullWidth
            label="待办事项"
            variant="outlined"
            value={value}
            inputRef={inputRef}
            onChange={textChange}
          />
        </div>
        <div className="button-box">
          <Button
            className="button"
            disabled={value === ""}
            variant="outlined"
            onClick={onSubmit}
          >
            创建
          </Button>
        </div>

        <div className="list">
          {todoList.map((item) => {
            return (
              <div key={item.date} className="column-box">
                <div>
                  <Checkbox
                    checked={item.done}
                    onChange={(e,record) => onCheckChange(e,record, item)}
                  />
                  <span
                    style={
                      item.done
                        ? { textDecoration: "line-through", color: "#999" }
                        : {}
                    }
                  >
                    {item.name}
                  </span>
                </div>
                <Button onClick={() => onDelete(item)}>删除</Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  });
}

export default index;
