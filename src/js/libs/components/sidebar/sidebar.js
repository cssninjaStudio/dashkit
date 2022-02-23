//import "../../store/store";

export function initSidebar() {
  return {
    openSidebar(param) {
      if (this.$store.app.sidebarOpenedState === false) {
        this.$store.app.sidebarOpenedState = !this.$store.app
          .sidebarOpenedState;
      }
      this.$store.app.activeSidebar = param;
      console.log(this.$store.app.activeSidebar);
    },

    toggleProfile() {
      if (this.$store.app.isProfileOpen === false) {
        this.$store.app.isProfileOpen = true;
        setTimeout(function () {
          document.querySelector('body').classList.add("is-fixed");
        }, 700);
      } else {
        this.$store.app.isProfileOpen = false;
        document.querySelector('body').classList.remove("is-fixed");
      }
    },

    profileFabOpen: false,
    toggleProfileFab() {
      this.profileFabOpen = !this.profileFabOpen;
    },

    activeProfileTab: 'overview-tab',
    switchProfileView(param) {
      switch (param) {
        case "overview-tab":
          this.activeProfileTab = 'overview-tab';
          this.profileFabOpen = false;
          break;
        case "team-tab":
          this.activeProfileTab = 'team-tab';
          this.profileFabOpen = false;
          break;
        case "notifications-tab":
          this.activeProfileTab = 'notifications-tab';
          this.profileFabOpen = false;
          break;

        default:
          console.log(`Sorry, something went wrong.`);
      }
    }
  };
}
