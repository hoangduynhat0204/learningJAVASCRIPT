
fetch('http://localhost:3000/a', {
	method: 'GET'
})	
	.then(response => response.json())
	.then(data => {
		var a = "";
		for (let i = 0; i < data.length; i++) {
			a += data[i].username + " " + data[i].fullname + "<br>";
		}
		document.getElementById("mail").innerHTML = a;
	})
	.catch((error) => {
		console.error('Error:', error);
	});