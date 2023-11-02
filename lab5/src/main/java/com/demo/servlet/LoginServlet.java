package com.demo.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/login")
/**
 * Servlet implementation class LoginServlet
 */
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String action = request.getParameter("action");
		if(action == null) {
			doGet_Login(request, response);
		} else {
			if(action.equals("welcome")) {
				doGet_Welcome(request, response);
			}
		}
	
	}
	protected void doGet_Login(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("WEB-INF/views/login/login.jsp").forward(request, response);
	}
	protected void doGet_Welcome(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		String email = request.getSession().getAttribute("msg").toString();
		request.getRequestDispatcher("WEB-INF/views/login/welcome.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("email");
		String password = request.getParameter("password");
		if(email.equalsIgnoreCase("abc@gmail.com") && password.equalsIgnoreCase("123")) {
			request.getSession().setAttribute("email", email);
			response.sendRedirect("login?action=welcome");
		} else {
			request.getSession().setAttribute("msg", "Sai ten dang nhap hoac mat khau");
			response.sendRedirect("login");
		}
	}

}
