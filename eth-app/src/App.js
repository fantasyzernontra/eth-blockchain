import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "./config";
import TodoList from "./ToDoList";

import { Container, Row } from "react-bootstrap";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:7545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    this.setState({ todoList });
    const taskCount = await todoList.methods.taskCount().call();
    this.setState({ taskCount });
    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call();
      if (!task.isDeleted) {
        this.setState({
          tasks: [...this.state.tasks, task],
        });
      }
    }
    this.setState({ loading: false });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      taskCount: 0,
      tasks: [],
      loading: true,
    };

    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  createTask(content) {
    this.setState({ loading: true });
    this.state.todoList.methods
      .createTask(content)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({
          tasks: [],
          taskCount: 0,
          loading: false,
        });

        this.loadBlockchainData();
      });
    window.location.reload();
  }

  deleteTask(taskId) {
    this.setState({ loading: true });
    this.state.todoList.methods
      .deleteTask(taskId)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        this.setState({
          tasks: [],
          taskCount: 0,
          loading: false,
        });

        this.loadBlockchainData();
      });
    window.location.reload();
  }

  render() {
    return (
      <Container className="p-5" style={{ height: "100vh" }}>
        <Row className="d-flex flex-column text-center justify-content-center">
          <h1>Non Nontra's To Do List</h1>
          <h3>Powered by Ethereum.</h3>
        </Row>
        <Row>
          <Container
            fluid
            className="d-flex align-items-center justify-content-center w-100"
            style={{ height: "75vh" }}
          >
            <Row className="border rounded justify-content-center align-items-center w-100 shadow-lg">
              <main
                role="main"
                className="col-lg-12 d-flex justify-content-center align-items-center"
              >
                {this.state.loading ? (
                  <Row className="text-center d-flex justify-content-center align-content-center">
                    <Row className="text-center">Loading...</Row>
                  </Row>
                ) : (
                  <TodoList
                    tasks={this.state.tasks}
                    createTask={this.createTask}
                    deleteTask={this.deleteTask}
                  />
                )}
              </main>
            </Row>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default App;
