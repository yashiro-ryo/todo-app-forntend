import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

type Props = {
  isEditModalVisible: boolean;
  handleEditModalClose: () => void;
  updateTask: (data: any) => void;
};

export default function EditTaskModal(props: Props) {
  const { register, handleSubmit } = useForm();
  return (
    <Modal show={props.isEditModalVisible} onHide={props.handleEditModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>タスク編集</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(props.updateTask)}>
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
              onClick={props.handleEditModalClose}
            >
              キャンセル
            </Button>
            <Button
              variant="primary"
              type="submit"
              className="submit-btn"
              onClick={props.handleEditModalClose}
            >
              更新
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
