export function initContactGrid() {
  return {
    newContactModalOpened: false,
    toggleNewContactModal() {
      this.newContactModalOpened = !this.newContactModalOpened;
    },
  };
}
