
export const PostService = (api, postData) => {
	let BaseUrl = api;
	
	return new Promise((resolve,reject)=>{
		fetch(BaseUrl,{
			method:'POST',
			body: JSON.stringify(postData)

		})
		.then((response)=> response.json())
		.then((responseJson)=>{
			resolve(responseJson);
		})
		.catch((error)=>{
			console.log("request error messge",error);
			reject(error);
		});
		
	});
	
}