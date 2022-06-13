import react from 'react'
import { Container, Card, Form, Button } from 'react-bootstrap'
import '../style/Setting.scss'

export default function Setting() {
  return (
    <Container>
      <Card >
        <Card.Header>設定</Card.Header>
        <Card.Body>
          <Form>
            <Form.Label>タスク消去時に確認する</Form.Label>
            <Form.Check></Form.Check>
            <Button variant="primary">更新</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}