// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "style.css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };
const scroll = document.querySelector("scroll-up-btn");
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

// typing animation script
var typed = new Typed(".glitch", {
  strings: [
    "Web Developer",
    "Photographer",
    "Photo Editor",
    "Polyglot",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  startDelay: 600,
});
var typed = new Typed(".typing-2", {
  strings: [
    "Web Developer",
    "Photographer",
    "Photo Editor",
    "Polyglot",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
  loopCount: Infinity,
  startDelay: 500,
});



function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var messageBody =
    "Name: " + userName + "<br/> Phone: " + phone + "<br/> Email: " + email;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hejhej6857@gmail.com",
    Password: "B52EB63A9BBDB2027663F63B20CDC14AF101",
    To: "midobolt@yahoo.com",
    From: "hejhej6857@gmail.com",
    Subject: "This is the subject",
    Body: messageBody,
  }).then((message) => {
    if (message == "OK") {
      swal("Successful", "Your message was successfully sent!", "success");
    } else {
      swal("Error", "You clicked the button!", "error");
    }
  });
}


// function emailSend() {
//   var userName = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var textarea = document.getElementById("textarea").value;

//   var messageBody =
//     "Name: " + userName + "<br/> Email: " + email + "<br/> Subject: " + subject + "<br/> Message: " + textarea;
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "hejhej6857@gmail.com",
//     Password: "B52EB63A9BBDB2027663F63B20CDC14AF101",
//     To: "midobolt@yahoo.com",
//     From: "hejhej6857@gmail.com",
//     Subject: "This is the subject",
//     Body: messageBody,
//   }).then((message) => {
//     if (message == "OK") {
//       swal("Successful", "Your message was successfully sent!", "success");
//     } else {
//       swal("Error", "You clicked the button!", "error");
//     }
//   });
// }
// var btn = document.getElementById("btn");
// btn.addEventListener('click', function(e) {
//   e.preventDefault()
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;
//   var body =
//     "name: " +
//     name +
//     "<br> email:" +
//     email +
//     "<br> subject" +
//     subject +
//     "<br> message" +
//     message;
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "hejhej6857@gmail.com",
//     Password: "iumnandsphzkrets",
//     To: "hejhej6857@gmail.com",
//     From: email,
//     Subject: subject,
//     Body: body,
//   }).then((message) => alert(message));
// });
