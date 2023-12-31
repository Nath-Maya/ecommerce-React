import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import './CheckoutForm.css'

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const dataUser = {
      name,
      phone,
      email,
    };
    onConfirm(dataUser);
  };

  return (
    <div className="container-form">
      <Form onSubmit={handleConfirm} className="form">
        <Form.Group className="mb-3">
          <Form.Label className="label">
            Nombre
            <Form.Control
              className="input"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label">
            Telefono
            <Form.Control
              className="input"
              type="text"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="label">
            Email
            <Form.Control
              className="input"
              type="text"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.Label>
        </Form.Group>
        <div className="btn-orden">
          <Button variant="outline-dark" type="submit">
            Crear Orden
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CheckoutForm;
