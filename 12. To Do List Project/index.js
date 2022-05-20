const input = document.querySelector("#inputField-input");
const addBtn = document.querySelector("#inputField-btn");
const todoList = document.querySelector(".todoList");
const pendingNumber = document.querySelector(".pendingNumb");
const clearAll = document.querySelector(".footer__btn");

input.addEventListener("input", e => {
	let userData = input.value;

	if (userData.trim() != 0) {
		addBtn.classList.add("btn-active");
	} else {
		addBtn.classList.remove("btn-active");
	}
});

addBtn.addEventListener("click", e => {
	let userData = input.value;
	let getLocalStorage = localStorage.getItem("New Todo");
	if (getLocalStorage == null) {
		listArr = [];
	} else {
		listArr = JSON.parse(getLocalStorage);
	}
	listArr.push(userData);
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();
	addBtn.classList.remove("btn-active");
});

function showTalks() {
	let getLocalStorage = localStorage.getItem("New Todo");

	if (getLocalStorage == null) {
		listArr = [];
	} else {
		listArr = JSON.parse(getLocalStorage);
	}

	pendingNumber.textContent = `You Have ${listArr.length} pending tasks`;

	if (listArr.length > 0) {
		clearAll.classList.add("btn-active");
	} else {
		clearAll.classList.remove("btn-active");
	}
	let newLiTag = "";
	listArr.forEach((element, index) => {
		newLiTag += `<li class="item__icons"> ${element}
         <span  class=" hidden">
            <i onclick="EditTask(${index})" class="fa-solid fa-pen-to-square edit-color"></i>
            <i onclick="EditTask(${index})" class="fa-solid fa-check-circle check-color"></i>
            <i onclick="deleteTask(${index})" class="fa fas-solid fa-circle-xmark delete-color"></i>
         </span>
      </li>`;
	});
	todoList.innerHTML = newLiTag;
	input.value = "";
}

function deleteTask(index) {
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	listArr.splice(index, 1);

	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();
}

function saveTask(index) {
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	textValue = listArr[index];
	// todoList.classList.add(li span)
	console.log(textValue);
	// listArr.classList.add("active-focus");

	// if (listArr[index] !== input.value) {
	// 	listArr[index] == input.value;
	// }

	// listArr.splice(listArr.indexOf(listArr[index].value), 1, "222");
	// localStorage.setItem("New Todo", JSON.stringify(listArr));
	// showTalks();
}

function EditTask(index) {
	// index = li number index
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	textValue = listArr[index];

	todoList.childNodes[index].classList.add("active-focus");
	todoList.childNodes[index].focus();
	console.log(todoList.childNodes[index]);
	console.log(listArr);
	// index.classList.add("active");
}

clearAll.addEventListener("click", () => {
	listArr = [];
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();
});
