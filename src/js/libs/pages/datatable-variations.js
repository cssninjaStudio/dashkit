export function initDatatableVariations() {
  return {
    borderedDatatable: new DataTable(
      document.querySelector("#bordered-datatable"),
      {
        pageSize: 5,
        sort: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filters: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filterText: "Type to Filter... ",
        pagingDivSelector: "#paging-bordered-datatable",
        firstPage: '<i class="material-icons">arrow_back</i>',
        lastPage: '<i class="material-icons">arrow_forward</i>',
        nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
        prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
        data: [
          {
            firstname: "Albert",
            lastname: "Einstein",
            position: "Scientist",
          },
          {
            firstname: "Linus",
            lastname: "Torvalds",
            position: "Scientist",
          },
          {
            firstname: "Ada",
            lastname: "Lovelace",
            position: "Scientist",
          },
          {
            firstname: "Helen",
            lastname: "Miller",
            position: "Scientist",
          },
          {
            firstname: "John",
            lastname: "Doe",
            position: "Scientist",
          },
          {
            firstname: "Adam",
            lastname: "Bradley",
            position: "Scientist",
          },
          {
            firstname: "Steve",
            lastname: "Krucziak",
            position: "Scientist",
          },
        ],
      }
    ),

    stripedDatatable: new DataTable(
      document.querySelector("#striped-datatable"),
      {
        pageSize: 5,
        sort: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filters: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filterText: "Type to Filter... ",
        pagingDivSelector: "#paging-striped-datatable",
        firstPage: '<i class="material-icons">arrow_back</i>',
        lastPage: '<i class="material-icons">arrow_forward</i>',
        nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
        prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
        data: [
          {
            firstname: "Albert",
            lastname: "Einstein",
            position: "Scientist",
          },
          {
            firstname: "Linus",
            lastname: "Torvalds",
            position: "Scientist",
          },
          {
            firstname: "Ada",
            lastname: "Lovelace",
            position: "Scientist",
          },
          {
            firstname: "Helen",
            lastname: "Miller",
            position: "Scientist",
          },
          {
            firstname: "John",
            lastname: "Doe",
            position: "Scientist",
          },
          {
            firstname: "Adam",
            lastname: "Bradley",
            position: "Scientist",
          },
          {
            firstname: "Steve",
            lastname: "Krucziak",
            position: "Scientist",
          },
        ],
      }
    ),

    narrowDatatable: new DataTable(
      document.querySelector("#narrow-datatable"),
      {
        pageSize: 5,
        sort: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filters: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filterText: "Type to Filter... ",
        pagingDivSelector: "#paging-narrow-datatable",
        firstPage: '<i class="material-icons">arrow_back</i>',
        lastPage: '<i class="material-icons">arrow_forward</i>',
        nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
        prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
        data: [
          {
            firstname: "Albert",
            lastname: "Einstein",
            position: "Scientist",
          },
          {
            firstname: "Linus",
            lastname: "Torvalds",
            position: "Scientist",
          },
          {
            firstname: "Ada",
            lastname: "Lovelace",
            position: "Scientist",
          },
          {
            firstname: "Helen",
            lastname: "Miller",
            position: "Scientist",
          },
          {
            firstname: "John",
            lastname: "Doe",
            position: "Scientist",
          },
          {
            firstname: "Adam",
            lastname: "Bradley",
            position: "Scientist",
          },
          {
            firstname: "Steve",
            lastname: "Krucziak",
            position: "Scientist",
          },
        ],
      }
    ),

    hoverableDatatable: new DataTable(
      document.querySelector("#hoverable-datatable"),
      {
        pageSize: 5,
        sort: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filters: {
          firstname: true,
          lastname: true,
          position: false,
        },
        filterText: "Type to Filter... ",
        pagingDivSelector: "#paging-hoverable-datatable",
        firstPage: '<i class="material-icons">arrow_back</i>',
        lastPage: '<i class="material-icons">arrow_forward</i>',
        nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
        prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
        data: [
          {
            firstname: "Albert",
            lastname: "Einstein",
            position: "Scientist",
          },
          {
            firstname: "Linus",
            lastname: "Torvalds",
            position: "Scientist",
          },
          {
            firstname: "Ada",
            lastname: "Lovelace",
            position: "Scientist",
          },
          {
            firstname: "Helen",
            lastname: "Miller",
            position: "Scientist",
          },
          {
            firstname: "John",
            lastname: "Doe",
            position: "Scientist",
          },
          {
            firstname: "Adam",
            lastname: "Bradley",
            position: "Scientist",
          },
          {
            firstname: "Steve",
            lastname: "Krucziak",
            position: "Scientist",
          },
        ],
      }
    ),
  };
}
