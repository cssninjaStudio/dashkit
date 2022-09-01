export function initDropdown() {
  return {
    openDropdown() {
      this.$refs.menu.classList.add("is-active");
    },
    closeDropdown() {
      this.$refs.menu.classList.remove("is-active");
    },
  };
}
