import { switchDemoImages } from "../../utils/utils";

export function initDatatableAdvanced() {
  return {
    advancedDatatable: new DataTable(
      document.querySelector("#advanced-datatable"),
      {
        pageSize: 5,
        sort: {
          picture: false,
          firstname: true,
          lastname: true,
          position: false,
          status: true,
          action: false,
        },
        filters: {
          picture: false,
          firstname: true,
          lastname: true,
          position: false,
          status: true,
          action: false,
        },
        filterText: "Type to Filter... ",
        pagingDivSelector: "#paging-first-datatable",
        firstPage: '<i class="material-icons">arrow_back</i>',
        lastPage: '<i class="material-icons">arrow_forward</i>',
        nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
        prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
        afterRefresh: function () {
          switchDemoImages();
        },
        data: [
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/nick.jpg">',
            firstname: "Nick",
            lastname: "Schwartz",
            position: "Manager",
            status: '<span class="tag">Available</span>',
            action: `
                        <button class="button">Action</button>
                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/elie.jpg">',
            firstname: "Elie",
            lastname: "Daniels",
            position: "Head of Sales",
            status: '<span class="tag">Busy</span>',
            action: `
                        <button class="button">Action</button>

                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250"  data-demo-src="/img/avatars/lakisha.jpg">',
            firstname: "Lakisha",
            lastname: "Jackson",
            position: "HR Director",
            status: '<span class="tag">Offline</span>',
            action: `
                        <button class="button">Action</button>

                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/helen.jpg">',
            firstname: "Helen",
            lastname: "Miller",
            position: "Sales Manager",
            status: '<span class="tag">Offline</span>',
            action: `
                        <button class="button">Action</button>

                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/terry.jpg">',
            firstname: "Terry",
            lastname: "Daniels",
            position: "Scientist",
            status: '<span class="tag">Offline</span>',
            action: `
                    <button class="button">Action</button>

                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/alan.jpg">',
            firstname: "Alan",
            lastname: "Maynard",
            position: "BP Manager",
            status: '<span class="tag">Offline</span>',
            action: `
                    <button class="button">Action</button>

                    `,
          },
          {
            picture:
              '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="/img/avatars/christina.jpg">',
            firstname: "Christina",
            lastname: "Chu",
            position: "Designer",
            status: '<span class="tag">Offline</span>',
            action: `
                    <button class="button">Action</button>

                    `,
          },
        ],
      }
    ),
  };
}
