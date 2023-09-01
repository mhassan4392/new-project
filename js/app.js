import agents from "../data/data.js";

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

const h_icons_arr = document.getElementsByClassName("header-icon");
const h_icons = Array.from(h_icons_arr);
for (let icon of h_icons) {
  icon.addEventListener("click", (e) => {
    for (let i of h_icons) {
      i.classList.remove("selected");
    }
    icon.classList.add("selected");
  });
}

$(function () {
  $(".date-range-picker-icon").daterangepicker(
    {
      timePicker: true,
      startDate: moment().startOf("hour"),
      endDate: moment().startOf("hour").add(32, "hour"),
      locale: {
        format: "M/DD hh:mm A",
      },
    },
    function (start, end, label) {
      $("#date-range-1").text(start.format("DD/MM/YYYY"));
      $("#date-range-2").text(end.format("DD/MM/YYYY"));
    }
  );
});

const columns = [
  {
    title: "Customer",
    data: "name",
    render: function (data) {
      const avatar = data.split(" ");
      const one = avatar[0].substring(0, 1);
      const two = avatar[1].substring(0, 1);
      return `<div>
        <span class="table-avatar">${one + two}</span>
        <span class="table-name">${data}</span>
        </div>`;
    },
  },
  { title: "Time", data: "time" },
  {
    title: "Handled Calls",
    render: function () {
      return `<div class="table-calls">
                <div
                  style="background-color: #6fcd46; width: 140px"
                  class="calls1"
                ></div>
                <div
                  style="background-color: #c3dafc; width: 130px"
                  class="calls2"
                ></div>
              </div>`;
    },
  },
  {
    title: "Missed Calls",
    render: function (data, type) {
      return `<div class="table-calls">
                <div
                  style="background-color: #efc140; width: 120px"
                  class="calls1"
                ></div>
                <div
                  style="background-color: #c3dafc; width: 100px"
                  class="calls2"
                ></div>
              </div>`;
    },
  },
  {
    title: "Rejected Calls",
    render: function (data, type) {
      return `<div class="table-calls">
                <div
                  style="background-color: #e15134; width: 100px"
                  class="calls1"
                ></div>
                <div
                  style="background-color: #c3dafc; width: 90px"
                  class="calls2"
                ></div>
              </div>`;
    },
  },
];

const table = new DataTable("#data-table", {
  info: false,
  paging: false,
  searching: false,
  columns,
  data: agents,
  createdRow: function (row, data) {
    $(row).attr("id", data.name.replace(" ", ""));
  },
});

// select agents filter

for (let agent of agents) {
  $("#agents-select").append(
    `<div class="select-checkbox">
                <input type="checkbox" checked value="${agent.name}" name="" id="" />
                <label>${agent.name}</label>
              </div>`
  );
}

$(".search-input").on("keyup", function (e) {
  const selects_arr =
    e.target.parentElement.parentElement.nextElementSibling.getElementsByClassName(
      "select-checkbox"
    );

  const selects = Array.from(selects_arr);
  for (let select of selects) {
    if (e.target.value != "") {
      const input = Array.from(select.getElementsByTagName("input"))[0];
      if (input.value.includes(e.target.value)) {
        select.classList.remove("hidden");
      } else {
        select.classList.add("hidden");
      }
    } else {
      select.classList.remove("hidden");
    }
  }
});

$(".clear-btn").on("click", function () {
  const selects = Array.from($(".select-checkbox"));
  $(".search-input")[0].value = "";
  for (let select of selects) {
    select.classList.remove("hidden");
  }
});

let agentInputs = agents.map((a) => a.name);

const total_agents = document.getElementById("total-agents");

total_agents.textContent = agentInputs.length;

$(".select-all-checkbox input").on("change", function (e) {
  const checked = $(e.target).is(":checked");
  if (checked) {
    agentInputs = [];
    for (let select of Array.from($(".select-checkbox input"))) {
      select.checked = true;
      agentInputs.push(select.value);
    }
  } else {
    for (let select of Array.from($(".select-checkbox input"))) {
      select.checked = false;
    }
    agentInputs = [];
  }

  total_agents.textContent = agentInputs.length;
});

$(".select-checkbox input").on("change", function (e) {
  const checked = e.target.checked;
  if (checked) {
    agentInputs.push(e.target.value);
  } else {
    const index = agentInputs.findIndex((a) => a == e.target.value);
    agentInputs.splice(index, 1);
  }

  total_agents.textContent = agentInputs.length;
});

$("#apply-button").on("click", function () {
  for (let agent of agents) {
    const row = $("#" + agent.name.replace(" ", ""))[0];
    console.log(row);
    const inputs = agentInputs.map((a) => a.replace(" ", ""));

    if (row) {
      if (inputs.includes(row.id)) {
        const r = table.row("#" + agent.name.replace(" ", ""));
      } else {
        table
          .row("#" + agent.name.replace(" ", ""))
          .remove()
          .draw(false);
      }
    } else {
      if (inputs.includes(agent.name.replace(" ", ""))) {
        table.row.add(agent).draw();
      }
    }
  }
});
