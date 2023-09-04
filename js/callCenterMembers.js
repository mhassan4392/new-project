import agents from "../data/data.js";

// call center members

// data table

const columns2 = [
  {
    title: "Members",
    data: "name",
    render: function (data, _, row) {
      const avatar = data.split(" ");
      const one = avatar[0].substring(0, 1);
      const two = avatar[1].substring(0, 1);
      return `<div class="table-member">
        <span class="table-avatar" style="background-color: ${
          row.color
        }"><span class="online"></span>${one + two}</span>
        <span class="table-name">${data}</span>
        </div>`;
    },
  },
  {
    title: "Session Duration",
    data: "sessionDuration",
  },
  {
    title: "Assigned Queues",
    data: "assignedQueues",
    render: function (data, type) {
      let element = ``;

      if (data == null) {
        element = "-";
      } else if (data.length > 1) {
        element = `<span>${data.length} &nbsp; <i class="fa-regular fa-copy"></i></span>`;
      } else {
        element = `<span>${data[0].type}</span><span class="member-role ${data[0].role}">${data[0].role}</span>`;
      }
      return element;
    },
  },
  {
    title: "Call Recording",
    data: "callRecording",
    render: function (data, type) {
      return `<label class="switch">
  <input type="checkbox" ${data ? "checked" : ""}>
  <span class="slider round"></span>
</label>`;
    },
  },
  {
    title: "Skills",
    data: "skills",
    render: function (data, type) {
      let element = ``;
      for (let d of data) {
        element += `<span class="member-skill">${d}</span>`;
      }
      return element;
    },
  },
];

new DataTable("#members-data-table", {
  dom: "Bfrtip",
  info: false,
  paging: false,
  columns: columns2,
  data: agents,
  language: { search: "", searchPlaceholder: "Search for member" },
  buttons: [
    { text: "Manage Members", action: function () {} },
    { text: "Manage Skills", action: function () {} },
  ],
  createdRow: function (row, data) {
    $(row).attr("id", data.name.replace(" ", ""));
  },
});
