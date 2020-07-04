import numeral from 'numeral';
import './index.css';


const cost = numeral(10000).format('$00.000.0');
debugger; // eslint-disable-line no-debugger
console.log(`${cost} today`); // eslint-disable-line no-console



// import { getUsers, deleteUser } from "./api/userApi";

// getUsers().then((result) => {
// 	let usersBody = "";

// 	result.forEach((user) => {
// 		usersBody += `<tr>
// 		<td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
// 		<td>${user.id}</td>
// 		<td>${user.firstName}</td>
// 		<td>${user.lastName}</td>
// 		<td>${user.email}</td>
// 		</tr>`;
// 	});

// 	global.document.getElementById("users").innerHTML = usersBody;

// 	const deleteLinks = global.document.getElementsByClassName("deleteUser");

// 	// Must use array.from to create a real array from a DOM collection
// 	// getElementsByClassname only returns an "array like" object
// 	Array.from(deleteLinks, (link) => {
// 		link.onclick = function (event) {
// 			const element = event.target;
// 			event.preventDefault();
// 			deleteUser(element.attributes["data-id"].value);
// 			const row = element.parentNode.parentNode;
// 			row.parentNode.removeChild(row);
// 		};
// 	});
// });
