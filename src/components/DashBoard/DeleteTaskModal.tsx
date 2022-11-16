import { Modal, Button } from "react-bootstrap";
export default function DeleteTaskModal(props: {
  isDeleteModalVisible: boolean;
  setDeleteModalVisible: (isVisible: boolean) => void;
  handleDeleteTask: () => void
}) {
  return (
    <Modal
      show={props.isDeleteModalVisible}
      onHide={() => props.setDeleteModalVisible(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>削除</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>本当に削除しても良いですか？ この操作は取り消せません.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setDeleteModalVisible(false)}>
          キャンセル
        </Button>
        <Button variant="danger" onClick={props.handleDeleteTask}>
          削除
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
