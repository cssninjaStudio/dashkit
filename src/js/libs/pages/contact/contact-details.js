export function initContactDetails() {
  return {
    activeTab: "overview-tab",
    toggleTabs(param) {
      switch (param) {
        case "overview-tab":
          this.activeTab = "overview-tab";
          break;
        case "events-tab":
          this.activeTab = "events-tab";
          break;
        case "calls-tab":
          this.activeTab = "calls-tab";
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },
  };
}
