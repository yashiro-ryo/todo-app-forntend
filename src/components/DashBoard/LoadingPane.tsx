import { Spinner } from "react-bootstrap";

export default function LoadingPane() {
  return (
    <div className="spinner-container">
      <div className="spinner-wrapper">
        <Spinner animation="border" role="status" style={{ color: "#005b47" }}>
          <span className="visually-hidden">ロード中です...</span>
        </Spinner>
        <span className="label">ロード中です...</span>
      </div>
    </div>
  );
}
