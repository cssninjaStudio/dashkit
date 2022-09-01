export function initInbox() {
  return {
    solidNav() {
      const navbar = document.querySelector(".navbar");
      navbar.classList.add("is-solid");
    },

    isMobileActive: false,
    isMobileMessageActive: false,

    toggleMobileSidebar() {
      this.isMobileMessageActive = false;
      this.isMobileActive = !this.isMobileActive;
    },

    closeMobileMessage() {
      this.isMobileMessageActive = false;
    },

    activeMessage: "message-1",
    switchMessage(e) {
      const overlay = document.querySelector(".inbox-message-overlay");
      const message = e.target.getAttribute("data-message");
      overlay.classList.add("is-active");
      this.isMobileMessageActive = true;
      setTimeout(() => {
        this.activeMessage = message;
        overlay.classList.remove("is-active");
      }, 1000);
    },
  };
}
