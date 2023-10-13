function buttonClick() {
  var credit = document.getElementById("credit_card");
  var paypal = document.getElementById("paypal");
  if (credit.classList.toggle("active")) {
    credit.style.backgroundColor = "#7ED321";
    credit.style.color = "white";
    paypal.style.backgroundColor = "#F9F9F9";
    paypal.style.color = "#c2bdbd";
    male.style.backgroundColor = "#7ED321";
    male.style.color = "white";
    female.style.backgroundColor = "#F9F9F9";
    female.style.color = "#c2bdbd";
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
    checkGender();
  }
}

function buttonClickMale() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  if (male.classList.toggle("active")) {
    male.style.backgroundColor = "#7ED321";
    male.style.color = "white";
    female.style.backgroundColor = "#F9F9F9";
    female.style.color = "#c2bdbd";
    checkGender();
  }
}

function buttonClickFemale() {
  var male = document.getElementById("male");
  var female = document.getElementById("female");
  if (female.classList.toggle("active")) {
    female.style.backgroundColor = "#7ED321";
    female.style.color = "white";
    male.style.backgroundColor = "#F9F9F9";
    male.style.color = "#c2bdbd";
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

var checkValidateName = function (selectorValue,selectorError) {
  var input = document.getElementById(selectorValue).value.trim();
  var regexName = /^[\p{L}\s]+$/u;
  if (input === "") {
    document.getElementById(selectorError).innerHTML = "Please enter your name";
    return false;
  } else if (regexName.test(input)) {
    document.getElementById(selectorError).style.display = "none";
    return true;
  } else {
    document.getElementById(selectorError).innerHTML = "Your name is invalid";
    return false;
  }
};

var checkValidateEmail = function (selectorValue,selectorError) {
  var input = document.getElementById(selectorValue).value.trim();
  var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (input === "") {
    document.getElementById(selectorError).innerHTML = "Please enter your email";
    return false;
  } else if (regexEmail.test(input)) {
    document.getElementById(selectorError).style.display = "none";
    return true;
  } else {
    document.getElementById(selectorError).innerHTML = "Your email is invalid";
    return false;
  }
};

var checkValidatePassword = function (selectorValue,selectorError) {
  var input = document.getElementById(selectorValue).value.trim();
  var regexPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (input === "") {
    document.getElementById(selectorError).innerHTML =
      "Please enter your password";
      return false;
  } else if (regexPassword.test(input)) {
    document.getElementById(selectorError).style.display = "none";
    return true;
  } else {
    document.getElementById(selectorError).innerHTML =
      "Password must have included at least 1 letter Uppercase or lowercase,1 digit,1 special character and At least 8 characters long ";
      return false;
  }
};

var checkValidateDate = function (selectorDay, selectorMonth, selectorYear,selectorError) {
  var day = parseInt(document.getElementById(selectorDay).value);
  var month = parseInt(document.getElementById(selectorMonth).value);
  var year = parseInt(document.getElementById(selectorYear).value);
  var month30Day = [4, 6, 9, 11];
  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day < 1 ||
    day > 31 ||
    month < 1 ||
    month > 12 ||
    year < 1900 ||
    year > 2100
  ) {
    document.getElementById(selectorError).innerHTML = "Invalid date";
    document.getElementById(selectorError).style.display = "block";
    return false;
  }
  // Check những tháng có 30 ngày
  else if (month30Day.includes(month) && day > 30) {
    document.getElementById(selectorError).innerHTML = "Invalid date";
    document.getElementById(selectorError).style.display = "block";
    return false;
  } else if (
    (month === 2 && day > 29) ||
    (month === 2 && day === 29 && !isLeapYear(year))
  ) {
    document.getElementById(selectorError).innerHTML = "Invalid date";
    document.getElementById(selectorError).style.display = "block";
    return false;
  } else {
    document.getElementById(selectorError).style.display = "none";
    return true;
  }
  console.log(4);
};

// Hàm check năm nhuận
var isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};


// Hàm check gender
var checkGender = function(selectorMale,selectorFemale,selectorError) {
  var male = document.getElementById(selectorMale);
  var female = document.getElementById(selectorFemale);
  var isMale = male.classList.contains('active');
  var isFemale = female.classList.contains('active');
  if(!isMale && !isFemale) {
    document.getElementById(selectorError).innerHTML = "Please choose your gender";
    console.log("Please");
    return false;
  } else {
    document.getElementById(selectorError).style.display = "none";
    return true;
  }
  
} 

// Hàm check card number
var checkCardNumber = function(selectorValue,selectorError) {
  //Cho phép từ 10 đến 20 chữ số liên tiếp và không chứa bất kỳ ký tự đặc biệt nào.
  var regex = /\b\d{10,20}\b/g;
  var input = document.getElementById(selectorValue).value;
  if(input === '') {
    document.getElementById(selectorError).innerHTML =
      "Please enter your card number";
      return false;
  } else if(regex.test(input)) {
    document.getElementById(selectorError).style.display = "none";
    return true;
  } else {
    document.getElementById(selectorError).innerHTML =
      "Your card number is invalid";
      return false;
  }
}
var checkCardcvc = function(selectorValue,selectorError) {
   //Cho phép từ 5 đến 10 chữ số liên tiếp và không chứa bất kỳ ký tự đặc biệt nào.
   var regex = /\b\d{5,10}\b/g;
   var input = document.getElementById(selectorValue).value;
   if(input === '') {
     document.getElementById(selectorError).innerHTML =
       "Please enter your card number";
       return false;
   } else if(regex.test(input)) {
     document.getElementById(selectorError).style.display = "none";
     return true;
   } else {
     document.getElementById(selectorError).innerHTML =
       "Your card cvc is invalid";
       return false;
   }
}

var checkDatePicker = function(selectorDayMonth,selectorYear) {
    var day_month = document.getElementById(selectorDayMonth).value;
    var year = document.getElementsByClassName(selectorYear).value;
    if(day_month === '' || year === '') {
      alert("Please select date");
      return false;
    } else {
      alert("Thanks you");
      return true;
    }
}

var checkBox = function() {
  var button = document.getElementById("submitForm");
  if(!document.getElementById("terms").checked) {
      button.style.display = "none";
      return false;
  } else {
      button.style.display = "block";
      return true;
  }
}

document.getElementById("username").onblur = checkValidateName;
document.getElementById("email").onblur = checkValidateEmail;
document.getElementById("password").onblur = checkValidatePassword;
document.getElementById("year").onblur = checkValidateDate;
document.getElementById("card_number").onblur = checkCardNumber;
document.getElementById("card_cvc").onblur = checkCardcvc;

var checkValidate = function(selectorValue,selectorError) {
  var valid = true;

  var valid = checkValidateName("username","errorName") & checkValidateEmail("email","errorEmail") & checkValidatePassword("password","errorPassword")
           & checkValidateDate("day","month","year","errorOption") & checkCardNumber("card_number","errorCard") & checkCardcvc("card_cvc","errorCard_cvc")
           & checkDatePicker("datepicker","yearpicker") & checkGender("male","female","errorGender");
  if(!valid) {
    document.getElementById("form").style.height = "880px";
    return false;
  }
  alert("submit thành công");
  return valid;
}

document.getElementById("submitForm").onclick = checkValidate;
