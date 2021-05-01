pragma solidity ^0.5.0;

contract TodoList {
    uint256 public taskCount = 0;

    struct Task {
        uint256 id;
        string content;
        bool isDeleted;
    }

    mapping(uint256 => Task) public tasks;

    event TaskCreated(uint256 id, string content, bool isDeleted);


    event TaskDeleted(uint256 id, bool isDeleted);

    constructor() public {
        createTask("Hi from Non Nontra ETH network using Solidity :)");
    }

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
        emit TaskCreated(taskCount, _content, false);
    }

    function deleteTask(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.isDeleted = !_task.isDeleted;
        tasks[_id] = _task;
        emit TaskDeleted(_id, _task.isDeleted);
    }
}
