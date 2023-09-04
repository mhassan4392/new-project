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
    title: "3",
    subTitle: "Missed Calls",
    icon: `<i class="fa-solid fa-phone-slash" style="color: #ff4e3b"></i>`,
  },
  {
    title: "4",
    subTitle: "Abandoned Calls",
    icon: `<i class="fa-solid fa-circle-xmark" style="color: #ff3b1e"></i>`,
  },
  {
    title: "8",
    subTitle: "Handled Calls",
    icon: `<i class="fa-solid fa-thumbs-up" style="color: #25d01b"></i>`,
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
];

const activities = [
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-right-from-bracket" style="color: #ff5c46"></i>
    <span class="bold">Patrick Sulivian</span>
    <span>ended session</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-circle-minus" style="color: orange"></i>
    <span class="bold">Patrick Sulivian</span>
    <span>marked as away</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
   <i class="fa-solid fa-circle-check" style="color: #33d128"></i>
    <span class="bold">Karl Anderson</span>
    <span>marked as ready</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-clock" style="color: #8d30f2"></i>
    <span class="bold">Patrick Sulivian</span>
    <span>ended recovery time</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-clock" style="color: #8d30f2"></i>
    <span class="bold">Patrick Sulivian</span>
    <span>ended recovery time</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-phone-slash" style="color: #ff5c46"></i>
     <span>call ended between</span>
    <span class="bold">Patrick Sulivian</span>
    <span>and</span>
    <span class="bold">+1 415-287-4032</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-circle-minus" style="color: orange"></i>
    <span class="bold">Karl Anderson marked as away</span>
    <span>ended session</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-circle-minus" style="color: orange"></i>
    <span class="bold">Darren Schreiber</span>
    <span>marked as away</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-circle-minus" style="color: orange"></i>
    <span class="bold">Kristn Muramoto</span>
    <span>marked as away</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
  },
  {
    element: `
    <div class="activity">
    <i class="fa-solid fa-bolt" style="color: #ff5c46"></i>
    <span class="bold">Patrick Sulivian</span>
    <span>on call</span>
    </div>
    `,
    time: "03/15/18 - 17:15:36",
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
    title: "",
    data: "element",
  },
  {
    title: "",
    data: "time",
  },
];

const table = new DataTable("#activity-data-table", {
  dom: "Bfrtip",
  info: false,
  paging: false,
  columns,
  sort: false,
  data: activities,
  language: {
    search: "",
    searchPlaceholder: "Search by Event, Queue or Phone Number",
  },
  buttons: ["copy", "print"],
});

$(".buttons-print").text("");
$(".buttons-print").html('<i class="fa-solid fa-print"></i>');
$(".buttons-copy").text("");
$(".buttons-copy").html('<i class="fa-solid fa-download"></i>');

$(".table-search").html($("#activity-data-table_filter"));
$(".table-buttons").html($(".dt-buttons"));
// $("#activity-data-table_filter").empty();
