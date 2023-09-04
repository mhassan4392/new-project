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

$(".screen1-icon").on("click", function () {
  $(".screen1-icon").addClass("selected");
  $(".screen2-icon").removeClass("selected");
  $(".screen3-icon").removeClass("selected");
  $("#screen1").removeClass("hidden");
  $("#screen2").addClass("hidden");
  $("#screen3").addClass("hidden");
});

$(".screen2-icon").on("click", function () {
  $(".screen2-icon").addClass("selected");
  $(".screen1-icon").removeClass("selected");
  $(".screen3-icon").removeClass("selected");
  $("#screen2").removeClass("hidden");
  $("#screen1").addClass("hidden");
  $("#screen3").addClass("hidden");
});

$(".screen3-icon").on("click", function () {
  $(".screen3-icon").addClass("selected");
  $(".screen2-icon").removeClass("selected");
  $(".screen1-icon").removeClass("selected");
  $("#screen3").removeClass("hidden");
  $("#screen2").addClass("hidden");
  $("#screen1").addClass("hidden");

  displayScreen3Agents();
  displayCharts();
  renderCharts();
});

// date picker
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

// data table

const columns = [
  {
    title: "Customer",
    data: "name",
    render: function (data, _, row) {
      const avatar = data.split(" ");
      const one = avatar[0].substring(0, 1);
      const two = avatar[1].substring(0, 1);
      return `<div class="table-member">
        <span class="table-avatar" style="background-color:${row.color}">${
        one + two
      }</span>
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

const table = new DataTable("#index-data-table", {
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

const total_agents = $("#total-agents");

total_agents.text(agentInputs.length);

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

  total_agents.text(agentInputs.length);
});

$(".select-checkbox input").on("change", function (e) {
  const checked = e.target.checked;
  if (checked) {
    agentInputs.push(e.target.value);
  } else {
    const index = agentInputs.findIndex((a) => a == e.target.value);
    agentInputs.splice(index, 1);
  }

  total_agents.text(agentInputs.length);
});

// screen 2

let page = 1;
const limit = 4;
let as = agents.filter((o) => agentInputs.includes(o.name));
let screen2Boxes = as.length;
let count = Math.ceil(screen2Boxes / limit);

function displayScreen2Boxes() {
  if (as.length == 0) {
    page = 0;
  }
  const start = (page - 1) * limit;
  const end = limit * page;
  const a = as.slice(start, end);
  $(".screen2-boxes").empty();
  for (let agent of a) {
    $(".screen2-boxes").append(
      `<div class="screen2-box">
          <div class="box-title">
            <p>${agent.name}</p>
            <i class="fa-solid fa-circle-xmark close-box" id="${agent.name.replace(
              " ",
              ""
            )}"></i>
          </div>
          <div class="box-card">
            <div class="box-calls">
              <div>
                <i class="fa-solid fa-phone"></i>
                <span>${agent.totalCalls}</span>
              </div>
              <p>Total Calls</p>
            </div>
            <div class="box-calls">
              <div>
                <i class="fa-solid fa-stopwatch"></i>
                <span>${agent.averageCallTime}</span>
              </div>
              <p>Average Call Time</p>
            </div>
            <div class="box-calls">
              <div>
                <i class="fa-solid fa-stopwatch"></i>
                <span>${agent.averageRingTime}</span>
              </div>
              <p>Average Ring Time</p>
            </div>

            <div class="box-progress handled">
              <p class="title">Handled Calls</p>
              <p class="subtitle">${agent.handledCalls} in queue</p>
              <div class="progress">
                <div class="barOverflow">
                  <div class="bar"></div>
                </div>
                <span class="progress-number">${agent.handledCalls}</span>
              </div>

              <div class="progress-length">
                <p>0</p>
                <p>100</p>
              </div>
            </div>

            <div class="box-progress missed">
              <p class="title">Missed Calls</p>
              <p class="subtitle">${agent.missedCalls} calls</p>
              <div class="progress">
                <div class="barOverflow">
                  <div class="bar"></div>
                </div>
                <span class="progress-number">${agent.missedCalls}</span>
              </div>

              <div class="progress-length">
                <p>0</p>
                <p>100</p>
              </div>
            </div>

            <div class="box-progress rejected">
              <p class="title">Rejected Calls</p>
              <p class="subtitle">${agent.rejectedCalls} calls</p>
              <div class="progress">
                <div class="barOverflow">
                  <div class="bar"></div>
                </div>
                <span class="progress-number">${agent.rejectedCalls}</span>
              </div>

              <div class="progress-length">
                <p>0</p>
                <p>100</p>
              </div>
            </div>
          </div>
        </div>`
    );
  }

  if (page == 1 || page < 1) {
    $(".screen2-pagination .left-btn").addClass("disabled");
  } else {
    $(".screen2-pagination .left-btn").removeClass("disabled");
  }

  if (page == count || page > count) {
    $(".screen2-pagination .right-btn").addClass("disabled");
  } else {
    $(".screen2-pagination .right-btn").removeClass("disabled");
  }
  $(".page-number").text(page);
  $(".total-pages").text(count);

  $(".progress").each(function () {
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);

    $({ p: 0 }).animate(
      { p: perc },
      {
        duration: 3000,
        easing: "swing",
        step: function (p) {
          $bar.css({
            transform: "rotate(" + (45 + p * 1.8) + "deg)", // 100%=180° so: ° = % * 1.8
            // 45 is to add the needed rotation to have the green borders at the bottom
          });
          $val.text(p | 0);
        },
      }
    );
  });

  $(".screen2-boxes .close-box").on("click", screen2Close);
}

function screen2Close(e) {
  const index = agentInputs.findIndex((a) => a.replace(" ", "") == e.target.id);
  agentInputs.splice(index, 1);

  as = agents.filter((o) => agentInputs.includes(o.name));
  screen2Boxes = as.length;
  count = Math.ceil(screen2Boxes / limit);
  displayScreen2Boxes();
  total_agents.text(agentInputs.length);

  const selects = Array.from(
    document.getElementsByClassName("select-checkbox")
  );

  for (let select of selects) {
    const input = select.querySelector("input");
    if (input.value.replace(" ", "") == e.target.id) {
      input.checked = false;
    }
  }

  for (let agent of agents) {
    const row = $("#" + agent.name.replace(" ", ""))[0];
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
}

displayScreen2Boxes();

$(".screen2-pagination .right-btn").on("click", function (e) {
  if (page < count) {
    page = page + 1;
    displayScreen2Boxes();
  }
});

$(".screen2-pagination .left-btn").on("click", function (e) {
  if (page > 1) {
    page = page - 1;
    displayScreen2Boxes();
  }
});

function screen3Close(e) {
  const index = agentInputs.findIndex((a) => a.replace(" ", "") == e.target.id);
  agentInputs.splice(index, 1);

  as = agents.filter((o) => agentInputs.includes(o.name));
  screen2Boxes = as.length;
  count = Math.ceil(screen2Boxes / limit);
  displayScreen2Boxes();
  total_agents.text(agentInputs.length);
  displayScreen3Agents();
  const selects = Array.from(
    document.getElementsByClassName("select-checkbox")
  );

  for (let select of selects) {
    const input = select.querySelector("input");
    if (input.value.replace(" ", "") == e.target.id) {
      input.checked = false;
    }
  }

  for (let agent of agents) {
    const row = $("#" + agent.name.replace(" ", ""))[0];
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

  displayCharts();
  renderCharts();
}

function displayScreen3Agents() {
  $(".screen3-agents").empty();
  for (let agent of as) {
    $(".screen3-agents").append(`
     <div class="screen3-agent">
          <div class="agent-color" style="background-color:${
            agent.color
          }"></div>
          <p>${agent.name}</p>
          <i class="fa-solid fa-circle-xmark close-box" id="${agent.name.replace(
            " ",
            ""
          )}"></i>
        </div>`);
  }

  $(".screen3-agents .close-box").on("click", screen3Close);
}

displayScreen3Agents();

function getChartData(a, i) {
  let title = "";
  let data = {};
  // console.log(a, i);
  switch (i) {
    case 1:
      title = "Average Ring Time";
      data = {
        name: a.name,
        data: a.dataSet.averageRingTime,
      };
      break;
    case 2:
      title = "Average Call Time";
      data = {
        name: a.name,
        data: a.dataSet.averageCallTime,
      };
      break;
    case 3:
      title = "Total Calls";
      data = {
        name: a.name,
        data: a.dataSet.totalCalls,
      };
      break;
    case 4:
      title = "Handled Calls";
      data = {
        name: a.name,
        data: a.dataSet.handledCalls,
      };
      break;
    case 5:
      title = "Missed Calls";
      data = {
        name: a.name,
        data: a.dataSet.missedCalls,
      };
      break;
    case 6:
      title = "Rejected Calls";
      data = {
        name: a.name,
        data: a.dataSet.rejectedCalls,
      };
      break;
  }

  return { title, data };
}

let charts = [];

function displayCharts() {
  $(".screen3-charts").html(
    `   <div id="chartContainer1" class="screen3-chart"></div>
        <div id="chartContainer2" class="screen3-chart"></div>
        <div id="chartContainer3" class="screen3-chart"></div>
        <div id="chartContainer4" class="screen3-chart"></div>
        <div id="chartContainer5" class="screen3-chart"></div>
        <div id="chartContainer6" class="screen3-chart"></div>`
  );
  charts = [];
  const colors = as.map((c) => c.color);
  let i = 1;
  for (let b of Array.from({ length: 6 })) {
    let title = "Calls";
    const series = as.map((a) => {
      const d = getChartData(a, i);
      title = d.title;
      return {
        name: d.data.name,
        data: d.data.data,
      };
    });

    var options = {
      title: {
        text: title,
        align: "left",
        margin: 10,
      },
      legend: {
        show: false,
      },
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0.5,
          opacityFrom: 0.2,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      series,
      colors,

      xaxis: {
        categories: [
          "04/10",
          "04/11",
          "04/12",
          "04/13",
          "04/14",
          "04/15",
          "04/16",
        ],
      },
    };

    charts = [
      ...charts,
      new ApexCharts(document.querySelector(`#chartContainer${i}`), options),
    ];
    i = i + 1;
  }
}

function renderCharts() {
  for (let chart of charts) {
    chart.render();
  }
}

displayCharts();
renderCharts();

$("#apply-button").on("click", function () {
  for (let agent of agents) {
    const row = $("#" + agent.name.replace(" ", ""))[0];
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

  page = 1;
  as = agents.filter((o) => agentInputs.includes(o.name));
  screen2Boxes = as.length;
  count = Math.ceil(screen2Boxes / limit);
  displayScreen2Boxes();
  displayCharts();
  renderCharts();
  displayScreen3Agents();
});
