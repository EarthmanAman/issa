import {store} from "../redux/store"

export async function login(username, password) {
	console.log("in login")
	try{
		let rToken = await fetch(`https://sfarmproject.herokuapp.com/accounts/login`,{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            "Access-Control-Allow-Origin": "*",
	            'Content-Type': 'application/json',

	        },
	        mode:"cors",
	        body: JSON.stringify({
	            username: username,
	            password: password,
	        })
 
		});

		
		let token = await rToken.json();
		console.log(token)
		rToken = null;
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}

export async function register(username, first_name, last_name, email, password) {
	console.log("in register")
	try{
		let rToken = await fetch(`https://sfarmproject.herokuapp.com/accounts/register`,{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            "Access-Control-Allow-Origin": "*",
	            'Content-Type': 'application/json',

	        },
	        mode:"cors",
	        body: JSON.stringify({
	            username: username,
	            first_name: first_name,
	            last_name: last_name,
	            email: email,
	            confirm_email: email,
	            password: password,
	        })
 
		});

		
		let token = await rToken.json();
		
		rToken = null;
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}


export async function update_user(user_id, username, first_name, last_name, email) {
	console.log("in update")
	try{
		let rToken = await fetch(`https://sfarmproject.herokuapp.com/accounts/user_update/${user_id}`,{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            "Access-Control-Allow-Origin": "*",
	            'Content-Type': 'application/json',

	        },
	        mode:"cors",
	        body: JSON.stringify({
	            username: username,
	            first_name: first_name,
	            last_name: last_name,
	            email: email,
	        })
 
		});

		
		let token = await rToken.json();
		
		rToken = null;
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}

export async function change_password(user_id, old_pass, new_pass) {
	var token = store.getState().loginReducer.user.token
	console.log(token)
	try{
		let rToken = await fetch(`https://sfarmproject.herokuapp.com/accounts/change_password/${user_id}`,{
			method: 'PUT',
	        headers: {
	            'Accept': 'application/json',
	            "Access-Control-Allow-Origin": "*",
	            'Content-Type': 'application/json',

	        },
	        mode:"cors",
	        body: JSON.stringify({
	            old_password: old_pass,
	            new_password: new_pass,
	        })
 
		});

		
		let token = await rToken.json();
		
		rToken = null;
		return token
	}
	catch(error){
		console.log(error)
		throw error;
		
	}
}
