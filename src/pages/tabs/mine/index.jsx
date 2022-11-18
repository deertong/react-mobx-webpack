import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import './style.less'

export default function index() {
  return (
    <div className="mine-content">
      <Card style={{ padding: "10px"}}>
        <Avatar
          sx={{ width: 80, height: 80, bgcolor: "rgb(253, 126, 151)" }}
          children={"DT"}
          style={{ margin: "auto" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            deertong
          </Typography>
          <Typography variant="body2" color="text.secondary">
              使用 webpack5，react,mobx搭建的前端快速开发项目
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
