import { eventStartDatepicker, eventEndDatepicker } from '../../components/datepicker/datepicker';

export function initProjectList() {
  return {
    activeTab: "projects-tab",
    toggleTabs(param) {
      switch (param) {
        case "projects-tab":
          this.activeTab = "projects-tab";
          break;
        case "members-tab":
          this.activeTab = "members-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    newProjectModalOpened: false,
    toggleNewProjectModal() {
      this.newProjectModalOpened = !this.newProjectModalOpened;
    },
    activeModalTab: "overview-modal-tab",
    toggleModalTabs(param) {
      switch (param) {
        case "overview-modal-tab":
          this.activeModalTab = "overview-modal-tab";
          break;
        case "members-modal-tab":
          this.activeModalTab = "members-modal-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    //newProjectStartDatepicker: eventStartDatepicker,
    //newProjectEndDatepicker: eventEndDatepicker,

    inviteMemberModalOpened: false,
    toggleInviteMemberModal() {
      this.inviteMemberModalOpened = !this.inviteMemberModalOpened;
    },
  };
}
