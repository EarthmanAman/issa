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
