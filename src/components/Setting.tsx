import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Card, Form, Button } from "react-bootstrap";
import "../style/Setting.scss";
import { getSettings, getUserToken } from "../datastore/userDataStore";
import { emitter } from "../service/event";
import axios from "../config/axiosConfig";
import Log from '../lib/log'

export default function Setting() {
  const { register, handleSubmit } = useForm();
  const [statusMsg, setStatusMsg] = useState("");
  const [setting, setupSettings] = useState({ isDeleteModalShow: true });
  var settings = {
    isDeleteModalShow: true,
  };
  emitter.on("update-settings", () => {
    setupSettings(getSettings());
  });
  emitter.off("update-settings", () => {});
  // 設定の読み込み
  // 設定の反映
  const onSubmit = (data: any) => {
    Log.v(data.isDeleteModalShow)
    // axios
    axios
      .post(
        "/user/settings",
        { isDeleteModalShow: data.isDeleteModalShow },
        { headers: { token: getUserToken() } }
      )
      .then(() => {
        setStatusMsg("設定を更新しました。");
      });
  };

  return (
    <Container>
      <Card>
        <Card.Header>設定</Card.Header>
        <Card.Body>
          <p className="status-msg">{statusMsg}</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Label className="setting-index">タスク消去</Form.Label>
            <Form.Check
              type={"checkbox"}
              defaultChecked={settings.isDeleteModalShow}
              label={"タスク消去時に確認する"}
              {...register("isDeleteModalShow")}
            ></Form.Check>
            <Button variant="primary" className="btn-update" type="submit">
              更新
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
