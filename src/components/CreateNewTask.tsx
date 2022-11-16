import { Card, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

type Props = {
  handleCreateNewTask: (data: any) => void;
  createTaskErrorMsg: string;
};

export default function CreateNewTask(props: Props) {
  const { register, handleSubmit } = useForm();
  return (
    <Card className="card create-task">
      <Card.Header>タスク作成</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit(props.handleCreateNewTask)}>
          <Form.Label>タスク名</Form.Label>
          <Form.Control
            type="text"
            placeholder="タスク名"
            {...register("newTask")}
          />
          <p style={{ color: "#f00", fontWeight: "bold" }}>{props.createTaskErrorMsg}</p>
          <Button type="submit" className="btn btn-primary">
            追加
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
