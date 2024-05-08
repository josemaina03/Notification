// lear
// Notifications Page



  markButton.addEventListener("click", () => {
    activeItems.forEach((item) => item.classList.remove("active"));
    count.innerHTML = document.querySelectorAll(".item.active").length;
  });

  activeItems.forEach((item) =>
    item.addEventListener("click", () => {
      item.classList.remove("active");
      count.innerHTML = document.querySelectorAll(".item.active").length;
    })
  );
});
