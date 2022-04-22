const panels = document.querySelectorAll(".panel");

document.getElementById("btn1").addEventListener("click", iconİ);
document.getElementById("btn2").addEventListener("click", iconİi);

const panelCount = panels.length;
let activePanelId = 0;

panels.forEach(function (panel) {
  panel.addEventListener("click", function () {
    activePanelId = panel.id;

    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(function (panel) {
    panel.classList.remove("active");
  });
}

function iconİ() {
  if (activePanelId === 0) {
    activePanelId = (panels.length - 1).toString();
  } else {
    activePanelId = +activePanelId - 1;
  }

  const panel = document.getElementById(activePanelId.toString());

  removeActiveClasses();
  panel.classList.add("active");
}

function iconİi() {
  if (activePanelId === panels.length - 1) {
    activePanelId = "0";
  } else {
    activePanelId = +activePanelId + 1;
  }

  const panel = document.getElementById(activePanelId.toString());

  removeActiveClasses();
  panel.classList.add("active");
}
