// Siema doesn't come with pagination built in
// But it is very easy to add one if you want

// New siema instance
var mySiema = new Siema();
var button_class = "reviews__button";
var active_button_class = "reviews__button--active";
var buttons_container = "reviews__buttons";

// Add a function that generates pagination to prototype
Siema.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add(button_class);
    if (i === 0) btn.classList.add(active_button_class);
    btn.addEventListener("click", () => {
      document.querySelector("." + active_button_class).classList.remove(active_button_class);
      btn.classList.add(active_button_class);
      this.goTo(i);
    });
    document.querySelector("." + buttons_container).appendChild(btn);
  }
}

// Trigger pagination creator
mySiema.addPagination();
