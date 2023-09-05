import agents from "../data/data.js";

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
    data: "sessionDuration",
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
  data: agents,
  language: {
    search: "",
    searchPlaceholder: "Search Members",
  },
  buttons: [
    {
      text: "Manage Members",
      action: function (e, dt, node, config) {
        $(".managers-view").addClass("hidden");
        $(".manage-members-view").removeClass("hidden");
      },
    },
  ],
});

$(".table-search").html($("#members-data-table_filter"));
$(".table-buttons").html($(".dt-buttons"));

$(".settings-dropdown").on("click", function () {
  $(".right-sidebar").removeClass("hidden");
});

$(".right-sidebar-end-call").on("click", function () {
  $(".right-sidebar").addClass("hidden");
});

$(".back-button").on("click", function () {
  $(".managers-view").removeClass("hidden");
  $(".manage-members-view").addClass("hidden");
});

const unqueueCols = [
  {
    data: "name",
    render: function (data, _, row) {
      const avatar = data.split(" ");
      const one = avatar[0].substring(0, 1);
      const two = avatar[1].substring(0, 1);
      return `<div class="table-member">
        <span class="table-avatar" style="background-color: ${row.color}">${
        one + two
      }</span>
        <span class="table-name">${data}</span>
        </div>`;
    },
  },
  {
    data: "queues",
    render: function (data, _, row) {
      return `<div class="table-queues">
      <span style="font-weight: bold; margin-right: 5px">${data}</span>
      <span> queues</span>
        </div>`;
    },
  },

  {
    data: "role",
    render: function (data, _, row) {
      return `<div class="table-role">
      <p>Role</p>
      <div class="dropdown">
      <div style="width: 100px" class="dropdown-button">
      ${data}
      </div>
      <div class="dropdown-menu dropdown-select-menu">
      <div class="dropdown-select-option">Manager</div>
      <div class="dropdown-select-option">Agent</div>
      </div>
      </div>
        </div>`;
    },
  },
];

const queueCols = [
  {
    data: "name",
    render: function (data, _, row) {
      const avatar = data.split(" ");
      const one = avatar[0].substring(0, 1);
      const two = avatar[1].substring(0, 1);
      return `<div class="table-member">
        <span class="table-avatar" style="background-color: ${row.color}">${
        one + two
      }</span>
        <span class="table-name">${data}</span>
        </div>`;
    },
  },
  {
    data: "role",
    render: function (data, _, row) {
      return `<div class="table-role-queue"><div class="${data}">${data}</div></div>`;
    },
  },
];

const unqueueAgents = [...agents];
const queueAgents = [];

const unqueueTable = new DataTable("#unqueue-data-table", {
  info: false,
  paging: false,
  columns: unqueueCols,
  sort: false,
  data: unqueueAgents,
  language: {
    search: "",
    searchPlaceholder: "Search",
  },
});

const queueTable = new DataTable("#queue-data-table", {
  info: false,
  paging: false,
  columns: queueCols,
  sort: false,
  data: queueAgents,
  language: {
    search: "",
    searchPlaceholder: "Search",
  },
});

function displayMemberNumbers() {
  const unqueueLength = unqueueTable.rows().data().length;
  const queueLength = queueTable.rows().data().length;
  $(".unqueue-members-number").text(unqueueLength);
  $(".queue-members-number").text(queueLength);
}

displayMemberNumbers();

unqueueTable.on("click", "tbody tr", function (e) {
  if (
    !e.target.classList.contains("dropdown-button") &&
    !e.target.classList.contains("dropdown-select-option")
  ) {
    e.currentTarget.classList.toggle("select");
    const length = unqueueTable.rows(".select").data().length;
    $(".unqueue-select-number").text(length);

    if (length > 0) {
      $(".unqueue-clear").removeClass("hidden");
      $(".unqueue-button").prop("disabled", false);
    } else {
      $(".unqueue-clear").addClass("hidden");
      $(".unqueue-button").prop("disabled", true);
    }
  }
});

$(".unqueue-clear").on("click", function () {
  unqueueTable.rows(".select").nodes().to$().removeClass("select");
  $(".unqueue-select-number").text(0);
  $(".unqueue-clear").addClass("hidden");
});

queueTable.on("click", "tbody tr", function (e) {
  if (
    !e.target.classList.contains("dropdown-button") &&
    !e.target.classList.contains("dropdown-select-option")
  ) {
    e.currentTarget.classList.toggle("select");
    const length = queueTable.rows(".select").data().length;
    $(".queue-select-number").text(length);

    if (length > 0) {
      $(".queue-clear").removeClass("hidden");
      $(".queue-button").prop("disabled", false);
    } else {
      $(".queue-clear").addClass("hidden");
      $(".queue-button").prop("disabled", true);
    }
  }
});

$(".queue-clear").on("click", function () {
  queueTable.rows(".select").nodes().to$().removeClass("select");
  $(".queue-select-number").text(0);
  $(".queue-clear").addClass("hidden");
});

$(".unqueue-button").on("click", function () {
  const rs = unqueueTable.rows(".select").data();
  queueTable.rows.add(rs).draw(false);
  unqueueTable.rows(".select").remove().draw(false);
  $(".unqueue-select-number").text(0);
  $(".unqueue-clear").addClass("hidden");
  $(".unqueue-button").prop("disabled", true);
  displayMemberNumbers();
});

$(".queue-button").on("click", function () {
  const rs = queueTable.rows(".select").data();
  unqueueTable.rows.add(rs).draw(false);
  queueTable.rows(".select").remove().draw(false);
  $(".queue-select-number").text(0);
  $(".queue-clear").addClass("hidden");
  $(".queue-button").prop("disabled", true);
  displayMemberNumbers();
});

window.addEventListener("click", (e) => {
  const dropdowns = document.getElementsByClassName("dropdown-menu show");
  const arr = Array.from(dropdowns);

  for (let d of arr) {
    if (d) {
      const p = d.parentElement;

      if (p.contains(e.target) && e.target != p) {
      } else {
        d.classList.remove("show");
      }
    }
  }
});

const dropdowns_arr = document.getElementsByClassName("dropdown-button");
const dropdowns = Array.from(dropdowns_arr);

for (const dropdown of dropdowns) {
  dropdown.addEventListener("click", (e) => {
    const menu = dropdown.nextElementSibling;
    if (menu) {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      } else {
        menu.classList.add("show");
      }
    }
  });
}

$(".dropdown-select-option").on("click", function (e) {
  $(e.target).parent().removeClass("show");
  $(e.target).parent().prev().text($(e.target).text());
});

$(".unqueue-table-search").html($("#unqueue-data-table_filter"));
$(".queue-table-search").html($("#queue-data-table_filter"));
