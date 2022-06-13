import axios from "../config/axiosConfig";
import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import "../style/DashBoard.scss";
import { useForm } from "react-hook-form";
import React from "react";
import { getUserToken, getUserId } from "../datastore/userDataStore";
import { emitter } from "../service/event";
import signin from "../service/authService";

type TaskContents = {
  task_id: number;
  task_name: string;
  task_describe: string;
  task_deadline: string;
  task_is_completed: number;
};

var deleteTaskIdChache = 0;
var updateTaskIdChache = 0;

export default function DashBoard() {
  const { register, handleSubmit } = useForm();
  const [task, setTask] = useState([]);
  // modal
  const [showEditModal, setEditModalShow] = useState(false);
  const [showDeleteModal, setDeleteModalShow] = useState(false);
  const handleEditModalClose = () => setEditModalShow(false);
  const handleEditModalShow = (event: React.MouseEvent) => {
    updateTaskIdChache = Number(
      event.currentTarget.getAttribute("data-task-id")
    );
    setEditModalShow(true);
  };
  const handleDeleteModalClose = () => setDeleteModalShow(false);
  const handleDeleteModalShow = (event: React.MouseEvent) => {
    deleteTaskIdChache = Number(
      event.currentTarget.getAttribute("data-task-id")
    );
    setDeleteModalShow(true);
  };
  // error msg
  const [taskErrorMsg, setTaskErrorMsg] = useState("");

  // methods
  const getAllTasks = () => {
    console.log("get all tasks");
    axios
      .get("/tasks", { headers: { token: getUserToken() } })
      .then((result: any) => {
        console.log(result);
        setTask(result.data.task);
      });
  };

  // create task
  // TODO any修正する
  const createNewTask = (data: any) => {
    if (data.newTask.length === 0) {
      setTaskErrorMsg("1文字以上入力してください");
      return;
    }
    console.log(data.newTask);
    setTaskErrorMsg("");
    axios.post(
      "/tasks",
      {
        taskName: data.newTask,
        describe: null,
        deadline: null,
        isCompleted: 0,
      },
      { headers: { token: getUserToken() } }
    );

    setTimeout(() => {
      getAllTasks();
    }, 100);
  };

  // delete task
  const deleteTask = (taskId: number) => {
    console.log("delete task id :" + taskId);
    axios.delete(`/tasks/${taskId}`, { headers: { token: getUserToken() } });
  };

  const handleDeleteTask = () => {
    // modal close
    setDeleteModalShow(false);
    console.log("delete task");
    if (deleteTaskIdChache == null) {
      return;
    }
    deleteTask(deleteTaskIdChache);

    setTimeout(() => {
      getAllTasks();
    }, 100);
  };

  // update task
  const updateTask = (data: any) => {
    console.log("task_name :" + data.taskName);
    console.log("describe :" + data.describe);
    console.log("desdline :" + data.deadline);
    if (data.taskName.length === 0) {
      return;
    }
    axios.patch(
      `/tasks/${updateTaskIdChache}`,
      {
        taskName: data.taskName,
        describe: data.describe.length === 0 ? null : data.describe,
        deadline: data.deadline.length === 0 ? null : data.deadline,
        isCompleted: 0,
      },
      { headers: { token: getUserToken() } }
    );

    setTimeout(() => {
      getAllTasks();
    }, 100);
  };

  // 初回のみログイン情報読み込み
  emitter.once("signin-ok", () => {
    getAllTasks();
  });

  const displayTaskInline = (taskArray: Array<TaskContents>) => {
    if (taskArray.length === 0) {
      return <div className="task-empty-view">タスクがありません</div>;
    }
    return (
      <ListGroup>
        {taskArray.map((value, index) => {
          return (
            <ListGroupItem key={index}>
              <p>{value.task_name}</p>
              <Button
                className="btn btn-secondary"
                onClick={handleEditModalShow}
                data-task-id={value.task_id}
              >
                編集
              </Button>
              <Button
                className="btn btn-danger"
                onClick={handleDeleteModalShow}
                data-task-id={value.task_id}
              >
                削除
              </Button>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    );
  };

  const editTaskModal = () => {
    return (
      <Modal show={showEditModal} onHide={handleEditModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>タスク編集</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(updateTask)}>
            <Form.Label>タスク名</Form.Label>
            <Form.Control
              type="text"
              placeholder="タスク名"
              {...register("taskName")}
            />
            <Form.Label>説明</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="説明"
              {...register("describe")}
            />
            <Form.Label>締切 (形式: yyyy/mm/dd hh:mm:ss)</Form.Label>
            <Form.Control
              type="text"
              placeholder="yyyy/mm/dd hh:mm:ss"
              {...register("deadline")}
            />
            <div className="btn-set">
              <Button
                className="cancel-btn"
                variant="secondary"
                onClick={handleEditModalClose}
              >
                キャンセル
              </Button>
              <Button
                variant="primary"
                type="submit"
                className="submit-btn"
                onClick={handleEditModalClose}
              >
                更新
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };

  const deleteTaskModal = () => {
    return (
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>削除</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>本当に削除しても良いですか？ この操作は取り消せません.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            キャンセル
          </Button>
          <Button variant="danger" onClick={handleDeleteTask}>
            削除
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div id="dashboard">
      <Container className="dashboard-container">
        <Card className="card create-task">
          <Card.Header>タスク作成</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(createNewTask)}>
              <Form.Label>タスク名</Form.Label>
              <Form.Control
                type="text"
                placeholder="タスク名"
                {...register("newTask")}
              />
              <p style={{ color: "#f00", fontWeight: "bold" }}>
                {taskErrorMsg}
              </p>
              <Button type="submit" className="btn btn-primary">
                追加
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card className="card uncomplete-task">
          <Card.Header>タスク</Card.Header>
          <Card.Body>
            <ListGroup>{displayTaskInline(task)}</ListGroup>
          </Card.Body>
        </Card>
      </Container>
      {editTaskModal()}
      {deleteTaskModal()}
    </div>
  );
}
