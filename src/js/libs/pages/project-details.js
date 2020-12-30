export function initProjectDetails() {
  return {
    activeTab: "tasks-tab",
    toggleTabs(param) {
      switch (param) {
        case "tasks-tab":
          this.activeTab = "tasks-tab";
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

    newTaskModalOpened: false,
    toggleNewTaskModal() {
      this.newTaskModalOpened = !this.newTaskModalOpened;
    },
    activeTaskModalTab: "task-overview-modal-tab",
    toggleTaskModalTabs(param) {
      switch (param) {
        case "task-overview-modal-tab":
          this.activeTaskModalTab = "task-overview-modal-tab";
          break;
        case "task-members-modal-tab":
          this.activeTaskModalTab = "task-members-modal-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    inviteMemberModalOpened: false,
    toggleInviteMemberModal() {
      this.inviteMemberModalOpened = !this.inviteMemberModalOpened;
    },
  };
}
