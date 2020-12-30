export function initEvents() {
  return {
    eventModalOpened: false,
    toggleEventModal() {
      this.eventModalOpened = !this.eventModalOpened;
    },
  };
}
