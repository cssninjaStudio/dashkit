export function initProjectMyTasks() {
  return {
    activeTab: "teams-tab",
    toggleTabs(param) {
      switch (param) {
        case "teams-tab":
          this.activeTab = "teams-tab";
          break;
        case "projects-tab":
          this.activeTab = "projects-tab";
          break;
        case "tasks-tab":
          this.activeTab = "tasks-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    newTeamModalOpened: false,
    toggleNewTeamModal() {
      this.newTeamModalOpened = !this.newTeamModalOpened;
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
  };
}
