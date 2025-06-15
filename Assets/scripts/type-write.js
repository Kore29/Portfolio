var TxtType = function (el, toRotate, period, prefix) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
  this.prefix = prefix || "Soy Desarrollador ";
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML =
    '<span class="prefix">' +
    this.prefix +
    '</span><span class="wrap">' +
    this.txt +
    "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    var prefix = "Soy Desarrollador ";
    if (elements[i].querySelector('.prefix')) {
      prefix = elements[i].querySelector('.prefix').textContent;
    }
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period, prefix);
    }
  }
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `
            .typewrite > .wrap {
                border-right: 0.08em solid #fff;
                color: var(--color-primary);
            }
            .typewrite > .prefix {
                color: var(--color-sub-text);
            }
        `;
  document.body.appendChild(css);
};