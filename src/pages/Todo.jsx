import React, { useEffect } from "react";
import { useState } from "react";
import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../services/allApi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Todo = () => {
  const [inputValue, setInputVal] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [EditData, SetEditDta] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    let apiResponse = await getTodo();

    console.log(apiResponse.data);

    setTodoData(apiResponse.data);
  };

  const searchClick = async () => {
    let reqBody = { todo: inputValue };

    let apiResponse = await createTodo(reqBody);

    console.log(apiResponse);
    loadTodos();
  };

  const onDeleteClick = async (id) => {
    let apiResponse = await deleteTodo(id);
    console.log(apiResponse);
    loadTodos();
  };
  const onEditClick = (data) => {
    console.log(data);
    SetEditDta(data);
    setShow(true);
  };

  const onUpdateClick = async () => {
    let requestBody = {
      todo: EditData.todo,
    };

    let apiResponse = await updateTodo(EditData.id, requestBody);
    console.log(apiResponse);
    loadTodos();
    setShow(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <input
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter your text"
          type="text"
        />

        <button onClick={searchClick} className="btn btn-primary">
          Create
        </button>
      </div>

      {todoData.map((eachData) => (
        <div className="d-flex justify-content-around mt-5 py-2 ">
          <h1> {eachData.todo}</h1>
          <button
            onClick={() => onEditClick(eachData)}
            className="btn btn-warning "
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteClick(eachData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={EditData.todo}
            onChange={(e) => SetEditDta({ ...EditData, todo: e.target.value })}
            className="form-control"
            placeholder="click here to edit"
            type="text"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todo;
