import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";

type TaskContents = {
  task_id: number;
  task_name: string;
  task_describe: string | null;
  task_deadline: string | null;
  task_is_completed: number;
};

type Props = {
  tasks: Array<TaskContents>
  handleEditModalShow: (event: React.MouseEvent) => void
  handleDeleteModalShow: (event: React.MouseEvent) => void
}

export default function Tasks(props: Props) {
  if (props.tasks.length === 0) {
    return <div className="task-empty-view">タスクがありません</div>;
  }
  return (
    <ListGroup>
      {props.tasks.map((value, index) => {
        return (
          <ListGroupItem key={index}>
            <p>{value.task_name}</p>
            <Button
              className="btn btn-secondary"
              onClick={props.handleEditModalShow}
              data-task-id={value.task_id}
            >
              編集
            </Button>
            <Button
              className="btn btn-danger"
              onClick={props.handleDeleteModalShow}
              data-task-id={value.task_id}
            >
              削除
            </Button>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
