// Siema doesn't come with pagination built in
// But it is very easy to add one if you want

var button_class = "reviews__button";
var active_button_class = "reviews__button--active";
var buttons_container = "reviews__buttons";

// New siema instance
var mySiema = new Siema({
  onChange: function() {
    document.querySelector("." + active_button_class).classList.remove(active_button_class);
    document.querySelector("." + button_class + ":nth-child(" + (mySiema.currentSlide + 1) + ")").classList.add(active_button_class);
  },
});

// Add a function that generates pagination to prototype
Siema.prototype.addPagination = function() {
  for (var i = 0; i < this.innerElements.length; i++) {
    (function(i) {
      var btn = document.createElement("button");
      btn.classList.add(button_class);
      if (i === 0) btn.classList.add(active_button_class);
      btn.addEventListener("click", function() {
        document.querySelector("." + active_button_class).classList.remove(active_button_class);
        btn.classList.add(active_button_class);
        mySiema.goTo(i);
      });
      document.querySelector("." + buttons_container).appendChild(btn);
    })(i);
  }
}

// Trigger pagination creator
mySiema.addPagination();


// плавная прокрутка

new SmoothScroll("a[href*='#']");
