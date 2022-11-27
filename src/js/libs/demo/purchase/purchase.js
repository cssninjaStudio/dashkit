export function initPurchaseCard() {
  return {
    activeTab: "starter",
    toggleTabs(e) {
      const target = e.target.getAttribute("data-tab");
      this.activeTab = target;
    },
  };
}
