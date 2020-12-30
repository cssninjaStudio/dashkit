export function initDocumentDetails() {
  return {
    activeTab: 'actions-tab',
    toggleTabs(param) {
      switch (param) {
        case 'actions-tab':
          this.activeTab = 'actions-tab';
          break;
        case 'comments-tab':
            this.activeTab = 'comments-tab';
          break;
        case "activity-tab":
            this.activeTab = 'activity-tab';
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },
  };
}
