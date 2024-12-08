const default_city = "Pune";

const users = {
	lucky: {
		address: {
			city: "Hyderabad",
		},
	},
	sai: {
		address: {
			city: "Hyderabad",
		},
	},
	prem: {
		address: {
			city: "Pune",
		},
	},
	harsh: {
		address: {
			city: "Bikaner",
		},
	},
	awaiz: {
		address: {
			city: "Hyderabad",
		},
	},
	tarun: {
		address: {
			city: "Vizag",
		},
	},
};

const output = document.getElementById("output");

function checkRecord() {
	const name = document.getElementById("name").value.toLowerCase();

	try {
		const user = users[name];
		if (!user) {
			throw new Error("User  not found");
		}
		output.innerHTML = `Name: ${
			name.charAt(0).toUpperCase() + name.slice(1)
		}, City: ${user.address.city}`;
	} catch (e) {
		output.innerHTML = `Name: ${
			name.charAt(0).toUpperCase() + name.slice(1)
		}, City: ${default_city}`;
	} finally {
		output.innerHTML = `Default city: ${default_city}`;
	}
}
