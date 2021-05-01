import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";

class TodoList extends Component {
  render() {
    return (
      <Container
        className="d-flex flex-row align-align-items-center justify-content-center text-center w-100"
        style={{ height: "300px" }}
      >
        <Row className="align-content-center d-flex justify-content-center w-25">
          <input
            ref={(input) => {
              this.task = input;
            }}
            type="text"
            className="form-control"
            placeholder="Add your task into Ethereum network :)"
          />
          <Button
            className="my-4"
            type="submit"
            onClick={() => {
              this.props.createTask(this.task.value);
            }}
          >
            Add
          </Button>
        </Row>
        <Row className="d-flex overflow-auto justify-content-center w-75">
          <Row id="taskList" className="list-unstyled  d-flex flex-column w-75">
            {this.props.tasks.map((task, key) => {
              return (
                <Row
                  className="d-flex flex-column border border-black p-4 justify-content-center align-content-center my-3"
                  key={key}
                >
                  <label>
                    <p>{"Task #" + (key + 1)}</p>
                    <h4>{task.content}</h4>
                  </label>
                  <Button
                    className="deleteButton"
                    type="submit"
                    onClick={() => {
                      this.props.deleteTask(task.id);
                    }}
                  >
                    Delete Task
                  </Button>
                </Row>
              );
            })}
          </Row>
        </Row>
      </Container>
    );
  }
}

export default TodoList;
