export function initSidebarRight() {
  return {
    closeRightSidebar() {
      this.$store.app.isSidebarRightOpened = false;
    },

    activeTab: "people-tab",
    switchSidebarTabs(param) {
      switch (param) {
        case "people-tab":
          this.activeTab = "people-tab";
          break;
        case "reminders-tab":
          this.activeTab = "reminders-tab";
          break;
        case "settings-tab":
          this.activeTab = "settings-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },
  };
}
