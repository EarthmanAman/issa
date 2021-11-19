export async function create_crop(user, crop, date) {
	console.log("in add")
	try{
		let rToken = await fetch(`https://sfarmproject.herokuapp.com/crops/create`,{
			method: 'POST',
	        headers: {
	            'Accept': 'application/json',
	            "Access-Control-Allow-Origin": "*",
	            'Content-Type': 'application/json',

	        },
	        mode:"cors",
	        body: JSON.stringify({
	            user: user,
	            crop: crop,
	            date:date
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