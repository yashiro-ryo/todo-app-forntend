import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import LoadingPane from "./LoadingPane";
import Tasks from "./Tasks";

// TODO 型定義を一つの場所にまとめる (ex: /lib/valuesなど)
type TaskContents = {
  task_id: number;
  task_name: string;
  task_describe: string | null;
  task_deadline: string | null;
  task_is_completed: number;
};

type Props = {
  isLoadingVisible: boolean;
  tasks: Array<TaskContents>;
  handleEditModalShow: (event: React.MouseEvent) => void;
  handleDeleteModalShow: (event: React.MouseEvent) => void;
};

export default function DisplayTasks(props: Props) {
  return (
    <Card className="card uncomplete-task">
      <Card.Header>タスク</Card.Header>
      <Card.Body>
        {props.isLoadingVisible ? (
          <LoadingPane />
        ) : (
          <ListGroup>
            <Tasks
              tasks={props.tasks}
              handleEditModalShow={props.handleEditModalShow}
              handleDeleteModalShow={props.handleDeleteModalShow}
            />
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}
