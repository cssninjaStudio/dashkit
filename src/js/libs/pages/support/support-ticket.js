import { successToast } from "../../components/toast/toast";

export function initSupportTicket() {
  return {
    typeReply(e) {
      let value = e.target.value;
      if (!value == "") {
        this.$refs.composemessage.classList.add("is-expanded");
      } else {
        this.$refs.composemessage.classList.remove("is-expanded");
      }
    },
    ticketSidebarOpen: false,
    toggleTicketSidebar() {
      this.ticketSidebarOpen = !this.ticketSidebarOpen;
    },

    groupComboOpened: false,
    groupComboIcon: "im icon-Box-Close",
    groupComboText: "Shipping",
    openGroupCombo() {
      this.groupComboOpened = true;
    },
    closeGroupCombo() {
      this.groupComboOpened = false;
    },
    updateGroupCombo(e) {
      const icon = e.target.getAttribute("data-icon");
      const text = e.target.getAttribute("data-text");
      this.groupComboIcon = icon;
      this.groupComboText = text;
    },

    assigneeComboOpened: false,
    assigneeComboIcon: "/img/avatars/ray.jpg",
    assigneeComboText: "Ray Donovan",
    openAssigneeCombo() {
      this.assigneeComboOpened = true;
    },
    closeAssigneeCombo() {
      this.assigneeComboOpened = false;
    },
    updateAssigneeCombo(e) {
      const icon = e.target.getAttribute("data-icon");
      const text = e.target.getAttribute("data-text");
      this.assigneeComboIcon = icon;
      this.assigneeComboText = text;
    },

    statusComboOpened: false,
    statusComboIcon: "fas fa-circle is-secondary",
    statusComboText: "In Progress",
    openStatusCombo() {
      this.statusComboOpened = true;
    },
    closeStatusCombo() {
      this.statusComboOpened = false;
    },
    updateStatusCombo(e) {
      const icon = e.target.getAttribute("data-icon");
      const text = e.target.getAttribute("data-text");
      this.statusComboIcon = icon;
      this.statusComboText = text;
    },

    priorityComboOpened: false,
    priorityComboIcon: "fas fa-circle is-orange",
    priorityComboText: "Medium",
    openPriorityCombo() {
      this.priorityComboOpened = true;
    },
    closePriorityCombo() {
      this.priorityComboOpened = false;
    },
    updatePriorityCombo(e) {
      const icon = e.target.getAttribute("data-icon");
      const text = e.target.getAttribute("data-text");
      this.priorityComboIcon = icon;
      this.priorityComboText = text;
    },

    saveTicket(e) {
      e.target.classList.add("is-loading");
      setTimeout(() => {
        e.target.classList.remove("is-loading");
        this.ticketSidebarOpen = false;
        successToast("Changes saved successfully.");
      }, 1200);
    },
  };
}
