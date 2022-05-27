import { searchData } from "../search/search";

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
      console.log(
        `Trigger Right Sidebar`,
        this.$store.app.isSidebarRightOpened
      );
    },

    toggleReaderMode() {
      document.querySelector("body").classList.toggle("reader-mode");
    },
  };
}

export function initDemoNavbar() {
  return {
    scrolled: false,
    height: 60,
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
    initScrollAnchors() {
      document
        .querySelectorAll('.scroll-link[href^="#"]')
        .forEach((trigger) => {
          trigger.onclick = function (e) {
            e.preventDefault();
            let hash = this.getAttribute("href");
            let target = document.querySelector(hash);
            //let headerOffset = 72;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition + 800;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          };
        });
    },
  };
}
