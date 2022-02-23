//import "../../store/store";

export function initSidebarLeft() {
  return {
    closeSidebar() {
      this.$store.app.sidebarOpenedState = !this.$store.app.sidebarOpenedState;
      console.log(this.$store.app.activeSidebar);
    },

    openSidebarMenu(param) {
      if (this.$store.app.activeSidebarMenu === param) {
        this.$store.app.activeSidebarMenu = "";
      } else {
        switch (param) {
          case "dashboard-menu-1":
            this.$store.app.activeSidebarMenu = "dashboard-menu-1";
            break;
          case "dashboard-menu-2":
            this.$store.app.activeSidebarMenu = "dashboard-menu-2";
            break;
          case "dashboard-menu-3":
            this.$store.app.activeSidebarMenu = "dashboard-menu-3";
            break;
          case "dashboard-menu-4":
            this.$store.app.activeSidebarMenu = "dashboard-menu-4";
            break;
          case "dashboard-menu-5":
            this.$store.app.activeSidebarMenu = "dashboard-menu-5";
            break;
          case "documents-menu-1":
            this.$store.app.activeSidebarMenu = "documents-menu-1";
            break;
          case "documents-menu-2":
            this.$store.app.activeSidebarMenu = "documents-menu-2";
            break;
          case "documents-menu-3":
            this.$store.app.activeSidebarMenu = "documents-menu-3";
            break;
          case "business-menu-1":
            this.$store.app.activeSidebarMenu = "business-menu-1";
            break;
          case "business-menu-2":
            this.$store.app.activeSidebarMenu = "business-menu-2";
            break;
          case "business-menu-3":
            this.$store.app.activeSidebarMenu = "business-menu-3";
            break;
          case "misc-menu-1":
            this.$store.app.activeSidebarMenu = "misc-menu-1";
            break;
          case "misc-menu-2":
            this.$store.app.activeSidebarMenu = "misc-menu-2";
            break;
          case "misc-menu-3":
            this.$store.app.activeSidebarMenu = "misc-menu-3";
            break;

          default:
            console.log(`Sorry, something went wrong.`);
        }
      }
    },
  };
}
