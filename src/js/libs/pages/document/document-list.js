export function initDocumentList() {
  return {
    allChecked: false,
    toggleAllCheckboxes() {
      const inputs = document.querySelectorAll("tbody .styled");
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = !inputs[i].checked;
      }
      this.allChecked = !this.allChecked;
    },
  };
}
