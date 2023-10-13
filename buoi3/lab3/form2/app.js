var checkValidate = function(selectorValue,selectorError) {
    var valid = true;

    valid = checkEmpty("username","error_name","empty_name") & checkEmpty("password","error_pass","empty_pass");

    valid &= checkNameOrEmail("username","error_name") & checkPassword("password","error_pass");

    if(valid) {
        alert("Submit thành công");
    } else {
        alert("Submit không thành công");
    }
    return valid;
}



var checkNameOrEmail = function(selectorValue,selectorError) {
    var input = document.getElementById(selectorValue).value.trim();
    var regexName = /^[\p{L}\s]+$/u;
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(regexName.test(input) || regexEmail.test(input)) {
        document.getElementById(selectorError).innerHTML = '';
        return true;
    } else {
        document.getElementById(selectorError).innerHTML = 'Data is invalid';
        return false;
    }
}

var checkPassword = function(selectorValue,selectorError) {
    // chứa 8 kí tự, có ít nhất 1 chữ hoa hoặc thường,tối thiểu 1 số từ 0-9,tối thiểu có 1 kí tự đặc biệt
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var input = document.getElementById(selectorValue).value.trim();
    if(regex.test(input)) {
        document.getElementById(selectorError).innerHTML = '';
        return true;
    }else {
        document.getElementById(selectorError).innerHTML = 'Password must have included at least 1 letter Uppercase or lowercase,1 digit,1 special character and At least 8 characters long ';
        return false;
    }
}


var checkEmpty = function(selectorValue,selectorError,selectorEmpty) {
    var input = document.getElementById(selectorValue).value.trim();
    if(input === '') {
        document.getElementById(selectorEmpty).innerHTML = 'Please fill the field';
        document.getElementById(selectorError).style.display = 'none';
        return false;
    } else {
        document.getElementById(selectorEmpty).innerHTML = '';
        document.getElementById(selectorError).style.display = 'block';
        document.getElementById(selectorEmpty).style.display = 'none';
        return true;
    }
}



document.getElementById("submitForm").onclick = checkValidate;