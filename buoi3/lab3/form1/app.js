function handleTextareaInput() {
  const label_textarea = document.querySelector(".label_textarea");
  const textarea = document.getElementById("message");
  const placeholder = document.querySelector(".placeholder");

  if (textarea.value !== "") {
    placeholder.style.display = "none";
    label_textarea.style.display = "none";
    textarea.style.marginTop = "24px";
  } else {
    placeholder.style.display = "block";
  }
}

var checkValidation = function (selectorValue,selectorError) {
    var valid = true;
    
    valid = checkEmpty("username","emptyName","errorName") & checkEmpty("email","emptyEmail","errorEmail") & checkEmpty("phone","emptyPhone","errorPhone");

    valid &= checkValidName("username","errorName") & checkValidPhone("phone","errorPhone") & checkValidEmail("email","errorEmail");
    if(valid) {
        alert("Submit thành công");
    } else {
        alert("Submit không thành công");
    }
    return valid;
}


var checkEmpty = function(selectorValue,selectorError,selectorErrorValid) {
    var input = document.getElementById(selectorValue).value.trim();
    if(input === '') {
        document.getElementById(selectorError).innerHTML = "Please fill in your information";
        document.getElementById(selectorErrorValid).style.display = "none";
        return false;
    } else {    
        document.getElementById(selectorError).innerHTML = '';
        document.getElementById(selectorErrorValid).style.display = "block";
        return true;
    }
}

var checkValidName = function(selectorValue,selectorError) {
    var regex = /^[\p{L}\s]+$/u;
    var input = document.getElementById(selectorValue).value;
    if(regex.test(input)) {
        document.getElementById(selectorError).innerHTML = '';
        return true;
    }  else {
        document.getElementById(selectorError).innerHTML = 'Data is invalid';
        return false;
    }
    
    
}



var checkValidPhone = function(selectorValue,selectorError) {
    var regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    var input = document.getElementById(selectorValue).value;
    if(regexPhoneNumber.test(input)) {
        document.getElementById(selectorError).innerHTML = '';
        return true;
    }  else {
        document.getElementById(selectorError).innerHTML = 'Data is invalid';
        return false;
    }
}

var checkValidEmail = function(selectorValue,selectorError) {
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var input = document.getElementById(selectorValue).value;
    if(regexEmail.test(input)) {
        document.getElementById(selectorError).innerHTML = '';
        return true;
    }  else {
        document.getElementById(selectorError).innerHTML = 'Data is invalid';
        return false;
    }
}


document.getElementById("submitForm").onclick = checkValidation;
