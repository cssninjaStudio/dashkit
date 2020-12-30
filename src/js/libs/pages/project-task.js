export function initProjectTask() {
  return {
    activeTab: "task-tab",
    toggleTabs(param) {
      switch (param) {
        case "task-tab":
          this.activeTab = "task-tab";
          break;
        case "files-tab":
          this.activeTab = "files-tab";
          break;
        case "activity-tab":
          this.activeTab = "activity-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    inviteMemberModalOpened: false,
    toggleInviteMemberModal() {
      this.inviteMemberModalOpened = !this.inviteMemberModalOpened;
    },

    newNoteModalOpened: false,
    toggleNewNoteModal() {
      this.newNoteModalOpened = !this.newNoteModalOpened;
    },
  };
}
