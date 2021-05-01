export const TODO_LIST_ADDRESS = "0x24a5dEaaC1387F65712aC2CcFab5a98B71c90D0d";

export const TODO_LIST_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "content",
        type: "string",
      },
      {
        name: "isDeleted",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "taskCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "content",
        type: "string",
      },
      {
        indexed: false,
        name: "isDeleted",
        type: "bool",
      },
    ],
    name: "TaskCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "isDeleted",
        type: "bool",
      },
    ],
    name: "TaskDeleted",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_content",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_id",
        type: "uint256",
      },
    ],
    name: "deleteTask",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
