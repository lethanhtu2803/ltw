<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" isELIgnored="false"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
	<h3 style="color: red;">${sessionScope.msg }</h3>
<form class="container" action="login" method="post"> 
    <!-- Email input -->
    <div class="form-outline mb-4">
      <input type="email" name="email" id="form2Example1" class="form-control" />
      <label class="form-label" for="form2Example1">Email address</label>
    </div>
  
    <!-- Password input -->
    <div class="form-outline mb-4">
      <input type="password" name="password" id="form2Example2" class="form-control" />
      <label class="form-label" for="form2Example2">Password</label>
    </div>
  
    <!-- 2 column grid layout for inline styling -->
    <div class="row mb-4">
      <div class="col d-flex justify-content-center">
        <!-- Checkbox -->
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
          <label class="form-check-label" for="form2Example31"> Remember me </label>
        </div>
      </div>
  
      <div class="col">
        <!-- Simple link -->
        <a href="#!">Forgot password?</a>
      </div>
    </div>
  
    <!-- Submit button -->
    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
  
    <!-- Register buttons -->
    <div class="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-facebook-f"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-google"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-twitter"></i>
      </button>
  
      <button type="button" class="btn btn-link btn-floating mx-1">
        <i class="fab fa-github"></i>
      </button>
    </div>
  </form>
</body>
</html>