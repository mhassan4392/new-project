const boxes = [
  {
    title: "4:47",
    subTitle: "Longest Wait",
    icon: `<i class="fa-solid fa-clock" style="color: orange"></i>`,
  },
  {
    title: "7",
    subTitle: "Call is Queue",
    icon: `<i class="fa-solid fa-phone" style="color: #2f9aff"></i>`,
  },
  {
    title: "4",
    subTitle: "Abandoned Calls",
    icon: `<i class="fa-solid fa-circle-xmark" style="color: #ff3b1e"></i>`,
  },
  {
    title: "8",
    subTitle: "Agents Ready",
    icon: `<i class="fa-solid fa-circle-check" style="color: #33d128"></i>`,
  },
  {
    title: "4",
    subTitle: "Agents Busy",
    icon: `<i class="fa-solid fa-triangle-exclamation" style="color: #ff4c3a"></i>`,
  },
  {
    title: "2",
    subTitle: "Agents Away",
    icon: `<i class="fa-solid fa-circle-minus" style="color: orange"></i>`,
  },
  {
    title: "3",
    subTitle: "Missed Calls",
    icon: `<i class="fa-solid fa-phone-slash" style="color: #ff4e3b"></i>`,
  },
  {
    title: "8",
    subTitle: "Handled Calls",
    icon: `<i class="fa-solid fa-thumbs-up" style="color: #25d01b"></i>`,
  },
];

const members = [
  {
    name: "Alice Smith",
    role: "Manager",
    status: "Ready",
    session: "02:18:56",
    markedAsAway: "0%",
    color: "#8af229",
  },
  {
    name: "Larry Devis",
    role: "Manager",
    status: "Away",
    session: "02:18:56",
    markedAsAway: "72%",
    color: "#6af0b1",
  },
  {
    name: "Peter Johnson",
    role: "Agent",
    status: "On Call",
    session: "02:18:56",
    markedAsAway: "0%",
    color: "#b5aada",
  },
];

function displayBoxes() {
  let element = ``;
  for (let box of boxes) {
    element += `<div class="status-box">
          <div class="icon">
            ${box.icon}
          </div>

          <div class="title-box">
            <h2 class="title">${box.title}</h2>
            <p class="subtitle">${box.subTitle}</p>
          </div>
        </div>`;
  }

  $(".status-boxes").html(element);
}

displayBoxes();

$(".tab1-button").on("click", function () {
  $(".tab1-button").addClass("selected");
  $(".tab2-button").removeClass("selected");
  $(".tab3-button").removeClass("selected");
  $(".tab1-view").removeClass("hidden");
  $(".tab2-view").addClass("hidden");
  $(".tab3-view").addClass("hidden");
});

$(".tab2-button").on("click", function () {
  $(".tab2-button").addClass("selected");
  $(".tab1-button").removeClass("selected");
  $(".tab3-button").removeClass("selected");
  $(".tab2-view").removeClass("hidden");
  $(".tab1-view").addClass("hidden");
  $(".tab3-view").addClass("hidden");
});

$(".tab3-button").on("click", function () {
  $(".tab3-button").addClass("selected");
  $(".tab2-button").removeClass("selected");
  $(".tab1-button").removeClass("selected");
  $(".tab3-view").removeClass("hidden");
  $(".tab2-view").addClass("hidden");
  $(".tab1-view").addClass("hidden");
});

const columns = [
  {
    title: "Manager",
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
    title: "Role",
    data: "role",
    render: function (data, _, row) {
      return `<div class="table-role ${data}">${data}</div>`;
    },
  },
  {
    title: "Status",
    data: "status",
    render: function (data, _, row) {
      let icon = "";
      if (data == "Ready") {
        icon =
          '<i class="fa-solid fa-circle-check" style="color: #1dce08"></i>';
      } else if (data == "Away") {
        icon =
          '<i class="fa-solid fa-circle-minus" style="color: #ffbf00"></i>';
      } else if (data == "On Call") {
        icon = '<i class="fa-solid fa-phone" style="color: #ff361d"></i>';
      }
      return `<div class="table-status">
      ${icon}
      <span>${data}</span>
      </div>`;
    },
  },
  {
    title: "Call Handling",
    data: "role",
    render: function (data, _, row) {
      return `<div class="table-call-handling">
      <div class="handling-inside"></div>
      </div>`;
    },
  },
  {
    title: "Session",
    data: "session",
  },
  {
    title: "Marked As Away",
    data: "markedAsAway",
    render: function (data, _, row) {
      return `<div class="table-marked-as-away">
      <span class="table-mark">${data}</span>
      <span class="table-mark-dot"></span>
      <span>00:00</span>
      </div>`;
    },
  },
];

const table = new DataTable("#members-data-table", {
  dom: "Bfrtip",
  info: false,
  paging: false,
  columns,
  data: members,
  language: {
    search: "",
    searchPlaceholder: "Search Members",
  },
  buttons: [{ text: "Manage Members" }],
});

$(".table-search").html($("#members-data-table_filter"));
$(".table-buttons").html($(".dt-buttons"));
