export function initCrmKanban() {
  return {
    setupKanban() {
      const kanbanWrapper = document.getElementById("kanban-main-wrap");
      kanbanWrapper.style.maxWidth = "1810px";

      function dropEl(el) {
        const boxes = document.querySelectorAll(".board-box");
        for (let i = 0; i < boxes.length; i++) {
          const count = boxes[i].querySelectorAll(".box").length;
          const counter = boxes[i].querySelector(".count span");

          if (count === 0) {
            boxes[i].classList.add("is-empty");
          } else {
            boxes[i].classList.remove("is-empty");
          }
          counter.innerHTML = count;
        }
      }
      const drake = dragula(
        [document.querySelector(".board-box .items")].concat(
          Array.from(document.querySelectorAll(".items"))
        ),
        {
          revertOnSpill: true,
        }
      ).on("drop", dropEl);
    },
  };
}
