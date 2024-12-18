const errorInputs = [
	// 1. Missing closing brace
	'{"name": "John", "age": 30',

	// 2. Trailing comma
	'{"name": "John", "age": 30,}',

	// 3. Improper quotes around keys (keys must be double-quoted)
	'{name: "John", age: 30}',

	// 4. Using single quotes instead of double quotes for strings
	"{'name': \"John\", 'age': 30}",

	// 5. Non-escaped special characters in strings
	'{"name": "John, Doe", "age": 30}',

	// 6. Unquoted string value (should be quoted)
	'{"name": John, "age": 30}',

	// 7. Extra commas inside arrays or objects
	'{"names": ["John", "Jane",], "age": 30}',

	// 8. Incorrect use of null, true, or false (should not be in quotes)
	'{"isValid": "true"}', // Should be { "isValid": true }

	// 9. Invalid escape sequences (should be \", \\, etc.)
	'{"message": "He said, \\"Hello!\\""}', // Correct: escaping quotes
	'{"message": "Hello p"}', // Incorrect: invalid escape sequence
];
const div = document.getElementById("demo");

function parseJSON(string) {
	try {
		return JSON.parse(string);
	} catch (e) {
		return e.message;
	}
}

errorInputs.map((json) => {
	let temp = document.createElement("p");
	temp.innerHTML = parseJSON(json);

	div.appendChild(temp);
});
