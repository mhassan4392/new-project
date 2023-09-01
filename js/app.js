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
    render: function (data, type) {
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

new DataTable("#data-table", {
  info: false,
  paging: false,
  searching: false,
  columns,
  data: agents,
});
