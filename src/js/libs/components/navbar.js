import { searchData } from './search';

export function initNavbar() {
  return {
    scrolled: false,
    height: 10,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
      this.searchExpanded = false;
    },

    openMobileMenu() {
      this.mobileOpen = !this.mobileOpen;
    },

    searchMocked(e) {
      let searchTerm = e.target.value;
      const batch = searchData(searchTerm);
  },

    notificationsDropOpened: false,
    messagesDropOpened: false,
    accountDropOpened: false,

    openNavbarDropdowns(param) {
      switch (param) {
        case "notifications-nav-drop":
          this.notificationsDropOpened = true;
          break;
        case "messages-nav-drop":
          this.messagesDropOpened = true;
          break;
        case "account-nav-drop":
          this.accountDropOpened = true;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    closeNavbarDropdowns(param) {
      switch (param) {
        case "notifications-nav-drop":
          this.notificationsDropOpened = false;
          break;
        case "messages-nav-drop":
          this.messagesDropOpened = false;
          break;
        case "account-nav-drop":
          this.accountDropOpened = false;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    },

    openRightSidebar() {
      this.$store.app.isSidebarRightOpened = true;
      console.log(`Trigger Right Sidebar`, this.$store.app.isSidebarRightOpened);
    },

    toggleReaderMode() {
      document.querySelector('body').classList.toggle('reader-mode');
    }
  };
}
