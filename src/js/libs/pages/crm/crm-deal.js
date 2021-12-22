import datepicker from "js-datepicker";

export function initCrmDeal() {
  return {
    initDatePicker() {
      const eventStartDatepicker = datepicker(".event-datepicker", {
        id: 1,
        overlayButton: "Confirm",
        minDate: new Date(),
        startDate: new Date(),
        showAllDates: true,
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString("en-EN", {
            month: "short",
            day: "numeric",
          });
          input.value = value;
        },
      });
    },

    detailsPanelOpened: true,
    contactPanelOpened: true,
    organisationPanelOpened: true,

    activeActionTab: "note-tab",
    toggleActionTabs(param) {
      switch (param) {
        case "note-tab":
          this.activeActionTab = "note-tab";
          break;
        case "event-tab":
          this.activeActionTab = "event-tab";
          break;
        case "file-tab":
          this.activeActionTab = "file-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    activeBusinessTab: "all-tab",
    toggleBusinessTabs(param) {
      switch (param) {
        case "all-tab":
          this.activeBusinessTab = "all-tab";
          break;
        case "activities-tab":
          this.activeBusinessTab = "activities-tab";
          break;
        case "notes-tab":
          this.activeBusinessTab = "notes-tab";
          break;
        case "files-tab":
          this.activeBusinessTab = "files-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    eventComboOpened: false,
    eventComboIcon: "im icon-Conference",
    eventComboText: "Conference Call",
    openEventCombo() {
      this.eventComboOpened = true;
    },
    closeEventCombo() {
      this.eventComboOpened = false;
    },
    updateEventCombo(e) {
      const icon = e.target.getAttribute("data-icon");
      const text = e.target.getAttribute("data-text");
      this.eventComboIcon = icon;
      this.eventComboText = text;
    },

    participantsComboOpened: false,
    participantsComboState: `
        <img id="img-placeholder" src="/img/avatars/avatar.png" alt="">
        <span class="selected-item">Who will participate?</span>
    `,
    eventParticipants: [],
    openParticipantsCombo() {
      this.participantsComboOpened = true;
    },
    closeParticipantsCombo() {
      this.participantsComboOpened = false;
    },
    renderParticipants(array) {
      console.log("ARRAY Length", array.length);
      if (array.length > 0) {
        this.participantsComboState = "";
        for (let i = 0; i < array.length; i++) {
          let template = `
                <img class="is-stacked" src="${array[i]}" alt="">
            `;
          this.participantsComboState += template;
        }
      } else {
        this.participantsComboState = `
                <img id="img-placeholder" src="/img/avatars/avatar.png" alt="">
                <span class="selected-item">Who will participate?</span>
            `;
      }
    },
    updateParticipantsCombo(e) {
      const src = e.target.getAttribute("data-src");
      if (e.target.classList.contains("is-active")) {
        const index = this.eventParticipants.indexOf(src);
        this.eventParticipants.splice(index, 1);
      } else {
        this.eventParticipants.push(src);
      }
      this.renderParticipants(this.eventParticipants);
      e.target.classList.toggle("is-active");

      console.log("INDEX", this.eventParticipants.indexOf(src));
    },
  };
}
