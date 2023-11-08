package com.demo.models;

import java.util.ArrayList;
import java.util.List;

import com.demo.entities.Account;

public class AccountModel {
	public List<Account> findAll(){
		List<Account> accounts = new ArrayList<Account>();
		accounts.add(new Account("abc@gmail.com", "123"));
		accounts.add(new Account("tu@gmail.com", "123"));
		return accounts;
	}
	public Account findAccount(String email) {
		
		for (Account account : findAll()) {
			if(account.getUsername().equalsIgnoreCase(email)) {
				return account;
			}
		}
		return null;
	}
	public boolean checkLogin(String email, String password) {
		Account account = findAccount(email);
		if(account != null) {
			if(account.getPassword().equalsIgnoreCase(password)) {
				return true;
			}
		}
		return false;
	}
	
}
