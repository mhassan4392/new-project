const agents = [
  {
    name: "Alex Garcia",
    time: "00:15:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#562863",
    dataSet: {
      totalCalls: [10, 15, 20, 25, 30, 35, 40],
      handledCalls: [10, 15, 20, 25, 30, 35, 40],
      missedCalls: [10, 15, 20, 25, 30, 35, 40],
      rejectedCalls: [10, 15, 20, 25, 30, 35, 40],
      averageRingTime: [10, 15, 20, 25, 30, 35, 40],
      averageCallTime: [10, 15, 20, 25, 30, 35, 40],
    },
    sessionDuration: "-",
    callRecording: true,
    skills: ["Spanish"],
    assignedQueues: [
      {
        type: "Billing Support",
        role: "Agent",
      },
    ],
  },
  {
    name: "Alice Smith",
    time: "00:12:20",
    totalCalls: 45,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "15",
    missedCalls: "19",
    rejectedCalls: "14",
    color: "#496240",
    dataSet: {
      totalCalls: [5, 10, 5, 55, 40, 15, 10],
      handledCalls: [5, 10, 5, 55, 40, 15, 10],
      missedCalls: [5, 10, 5, 55, 40, 15, 10],
      rejectedCalls: [5, 10, 5, 55, 40, 15, 10],
      averageRingTime: [5, 10, 5, 55, 40, 15, 10],
      averageCallTime: [5, 10, 5, 55, 40, 15, 10],
    },
    sessionDuration: "02:01:28",
    callRecording: false,
    skills: ["Rochester", "Spanish"],
    assignedQueues: [
      {
        type: "Billing Support",
        role: "Agent",
      },
      {
        type: "Billing Support",
        role: "Agent",
      },
      {
        type: "Billing Support",
        role: "Agent",
      },
    ],
  },
  {
    name: "Amelia Johns",
    time: "00:10:13",
    totalCalls: 35,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "22",
    missedCalls: "29",
    rejectedCalls: "24",
    color: "#bc9cd1",
    dataSet: {
      totalCalls: [25, 30, 15, 5, 10, 45, 60],
      handledCalls: [25, 30, 15, 5, 10, 45, 60],
      missedCalls: [25, 30, 15, 5, 10, 45, 60],
      rejectedCalls: [25, 30, 15, 5, 10, 45, 60],
      averageRingTime: [25, 30, 15, 5, 10, 45, 60],
      averageCallTime: [25, 30, 15, 5, 10, 45, 60],
    },
    sessionDuration: "-",
    callRecording: false,
    skills: [],
    assignedQueues: [
      {
        type: "Billing Support",
        role: "Agent",
      },
      {
        type: "Billing Support",
        role: "Agent",
      },
      {
        type: "Billing Support",
        role: "Agent",
      },
    ],
  },
  {
    name: "Charles Williams",
    time: "00:13:23",
    totalCalls: 25,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "32",
    missedCalls: "39",
    rejectedCalls: "34",
    color: "#39aa43",
    dataSet: {
      totalCalls: [15, 10, 45, 25, 30, 15, 20],
      handledCalls: [15, 10, 45, 25, 30, 15, 20],
      missedCalls: [15, 10, 45, 25, 30, 15, 20],
      rejectedCalls: [15, 10, 45, 25, 30, 15, 20],
      averageRingTime: [15, 10, 45, 25, 30, 15, 20],
      averageCallTime: [15, 10, 45, 25, 30, 15, 20],
    },
    sessionDuration: "-",
    callRecording: false,
    skills: ["Spanish"],
    assignedQueues: null,
  },
  {
    name: "Evelin Miller",
    time: "00:11:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#4bd64d",
    dataSet: {
      totalCalls: [35, 10, 25, 55, 10, 10, 5],
      handledCalls: [35, 10, 25, 55, 10, 10, 5],
      missedCalls: [35, 10, 25, 55, 10, 10, 5],
      rejectedCalls: [35, 10, 25, 55, 10, 10, 5],
      averageRingTime: [35, 10, 25, 55, 10, 10, 5],
      averageCallTime: [35, 10, 25, 55, 10, 10, 5],
    },
    sessionDuration: "-",
    callRecording: false,
    skills: ["French", "Priority"],
    assignedQueues: null,
  },
  {
    name: "Jeremy Brown",
    time: "00:09:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#8a7818",
    dataSet: {
      totalCalls: [15, 40, 25, 55, 20, 5, 25],
      handledCalls: [15, 40, 25, 55, 20, 5, 25],
      missedCalls: [15, 40, 25, 55, 20, 5, 25],
      rejectedCalls: [15, 40, 25, 55, 20, 5, 25],
      averageRingTime: [15, 40, 25, 55, 20, 5, 25],
      averageCallTime: [15, 40, 25, 55, 20, 5, 25],
    },
    sessionDuration: "-",
    callRecording: false,
    skills: ["Spanish", "Rochester"],
    assignedQueues: [
      {
        type: "Customer Support",
        role: "Manager",
      },
    ],
  },
  {
    name: "Larry Davis",
    time: "00:08:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#d85b46",
    dataSet: {
      totalCalls: [5, 10, 15, 20, 25, 30, 35],
      handledCalls: [5, 10, 15, 20, 25, 30, 35],
      missedCalls: [5, 10, 15, 20, 25, 30, 35],
      rejectedCalls: [5, 10, 15, 20, 25, 30, 35],
      averageRingTime: [5, 10, 15, 20, 25, 30, 35],
      averageCallTime: [5, 10, 15, 20, 25, 30, 35],
    },
    sessionDuration: "02:01:28",
    callRecording: true,
    skills: ["Rochester"],
    assignedQueues: [
      {
        type: "Billing Support",
        role: "Agent",
      },
      {
        type: "Billing Support",
        role: "Agent",
      },
    ],
  },
  {
    name: "Peter Johson",
    time: "00:07:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#c20c60",
    dataSet: {
      totalCalls: [60, 10, 45, 25, 15, 25, 15],
      handledCalls: [60, 10, 45, 25, 15, 25, 15],
      missedCalls: [60, 10, 45, 25, 15, 25, 15],
      rejectedCalls: [60, 10, 45, 25, 15, 25, 15],
      averageRingTime: [60, 10, 45, 25, 15, 25, 15],
      averageCallTime: [60, 10, 45, 25, 15, 25, 15],
    },
    sessionDuration: "02:01:28",
    callRecording: false,
    skills: [],
    assignedQueues: [
      {
        type: "Billing Support",
        role: "Agent",
      },
    ],
  },
  {
    name: "John Doe",
    time: "00:07:23",
    totalCalls: 15,
    averageCallTime: "7:12:4:34",
    averageRingTime: "00:00",
    handledCalls: "2",
    missedCalls: "9",
    rejectedCalls: "4",
    color: "#ade5cf",
    dataSet: {
      totalCalls: [15, 60, 40, 15, 5, 45, 15],
      handledCalls: [15, 60, 40, 15, 5, 45, 15],
      missedCalls: [15, 60, 40, 15, 5, 45, 15],
      rejectedCalls: [15, 60, 40, 15, 5, 45, 15],
      averageRingTime: [15, 60, 40, 15, 5, 45, 15],
      averageCallTime: [15, 60, 40, 15, 5, 45, 15],
    },
    sessionDuration: "02:01:28",
    callRecording: false,
    skills: [],
    assignedQueues: null,
  },
];

export default agents;
