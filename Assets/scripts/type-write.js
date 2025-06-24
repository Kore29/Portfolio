var TxtType = function (el, toRotate, period, prefix) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.isDeleting = false;
  this.prefix = prefix || "Soy Desarrollador ";
  this.timeout = null;
  this.stopped = false;
  this.tick();
};

TxtType.prototype.tick = function () {
  if (this.stopped) return;
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

  this.timeout = setTimeout(function () {
    that.tick();
  }, delta);
};

TxtType.prototype.stop = function () {
  this.stopped = true;
  if (this.timeout) clearTimeout(this.timeout);
};

window.TxtTypeInstance = null;

function startTypeWrite() {
  var elements = document.getElementsByClassName("typewrite");
  if (elements.length === 0) return;
  var el = elements[0];
  var toRotate = el.getAttribute("data-type");
  var period = el.getAttribute("data-period");
  var prefix = "Soy Desarrollador ";
  if (el.querySelector('.prefix')) {
    prefix = el.querySelector('.prefix').textContent;
  }
  if (toRotate) {
    if (window.TxtTypeInstance) {
      window.TxtTypeInstance.stop();
      window.TxtTypeInstance = null;
    }
    window.TxtTypeInstance = new TxtType(el, JSON.parse(toRotate), period, prefix);
  }
}

window.onload = function () {
  startTypeWrite();
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