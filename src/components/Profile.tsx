import react, { useState } from "react";
import { emitter } from "../service/event";
import { Card, Container } from "react-bootstrap";
import { getUserId, getUserName } from "../datastore/userDataStore";
import "../style/Profile.scss";

export default function Profile() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState(0);
  emitter.once("signin-ok", () => {
    setUserName(getUserName());
    setUserId(getUserId());
  });
  return (
    <div className="profile">
      <Container>
        <Card className="card">
          <Card.Header>プロフィール</Card.Header>
          <Card.Body>
            <div id="user-name">名前: {userName}</div>
            <div id="user-id">ユーザーid: {userId}</div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
