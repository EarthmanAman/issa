
import {store} from "../redux/store"

export async function main(user_id) {
	var token = store.getState().loginReducer.user.token
	
	try{
		let rData = await fetch(`https://sfarmproject.herokuapp.com/user/${user_id}`,{
			method: 'GET',
	        headers: {
	            'Accept': 'application/json',
	            'Content-Type': 'application/json',
	            "Authorization":`Token ${token}`,
	        }
 
		});

		
		let data = await rData.json();

		rData = null;
		return data
	}
	catch(error){
		throw error;
		
	}
}
