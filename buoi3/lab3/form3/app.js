function buttonClick() {
  var credit = document.getElementById("credit_card");
  if (credit.classList.toggle("active")) {
    credit.style.backgroundColor = "#7ED321";
    credit.style.color = "white";
  }
}

function buttonClick1() {
  var paypal = document.getElementById("paypal");
  var credit = document.getElementById("credit_card");
  if (paypal.classList.toggle("active")) {
    paypal.style.backgroundColor = "#7ED321";
    paypal.style.color = "white";
    credit.style.backgroundColor = "#F9F9F9";
    credit.style.color = "#c2bdbd";
  }
}

$(function () {
  $("#datepicker").datepicker({
    dateFormat: "dd MM",
    changeMonth: true,
    changeYear: false,
  });
});

$(function () {
  $(".yearpicker").datepicker({
    changeYear: true,
    showButtonPanel: true,
    dateFormat: "yy",
    onClose: function (dateText, inst) {
      var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
      $(this).datepicker("setDate", new Date(year, 1));
    },
  });
  $(".date-picker-year").focus(function () {
    $(".ui-datepicker-month").hide();
  });
});
