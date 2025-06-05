// script.js
const savedStyle = localStorage.getItem("selectedStyle") || "1";

const link = document.createElement("link");
link.rel = "stylesheet";
link.id = "dynamic-style";
link.href = `https://raw.githack.com/khaledry/watar0/main/watar0000${savedStyle}.css`;
document.head.appendChild(link);

function changeStyle(num) {
  document.getElementById("dynamic-style").href = `https://raw.githack.com/khaledry/watar0/main/watar0000${num}.css`;
  localStorage.setItem("selectedStyle", num);
}

window.addEventListener('DOMContentLoaded', () => {
  // الشرط: اذا الصفحة فيها "دخول الأعضاء" أو "تسجيل عضوية"
  const loginExists = document.body.innerText.includes("دخول الأعضاء") || document.body.innerText.includes("تسجيل عضوية");

  if (loginExists) {
    const container = document.createElement("div");
    container.classList.add("color-picker-container");

    const colors = [
      "#870d85", "#0b1b6b", "#511117", "#16c65d",
      "#455348", "#00204d", "#6c757d"
    ];

    colors.forEach((color, index) => {
      const btn = document.createElement("div");
      btn.classList.add("color-picker");
      btn.style.background = color;

      if (savedStyle == (index + 1)) {
        btn.classList.add("selected");
      }

      btn.addEventListener("click", () => {
        changeStyle(index + 1);
        document.querySelectorAll(".color-picker").forEach(e => e.classList.remove("selected"));
        btn.classList.add("selected");
        container.style.display = 'none';  // إخفاء المربعات بعد اختيار اللون
      });

      container.appendChild(btn);
    });

    document.body.appendChild(container);
  }
});
