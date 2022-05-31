const input = document.querySelector("#inputField-input");
const addBtn = document.querySelector("#inputField-btn");
const todoList = document.querySelector(".todoList");
const pendingNumber = document.querySelector(".pendingNumb");
const clearAll = document.querySelector(".footer__btn");

let editId;
let isEdited = false;

function inputData() {
	let userData = input.value.trim();

	if (userData != null && userData != "") {
		addBtn.classList.add("btn-active");
	} else {
		addBtn.classList.remove("btn-active");
	}
}

function clickBTN() {
	let userData = input.value;
	let getLocalStorage = localStorage.getItem("New Todo");

	if (!isEdited) {
		if (getLocalStorage == null) {
			listArr = [];
		} else {
			listArr = JSON.parse(getLocalStorage);
			listArr.push(userData);
		}
	} else {
		listArr[editId] = input.value;
	}

	// listArr[editId].name = input.value;

	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();

	addBtn.classList.remove("btn-active");
}

input.addEventListener("input", inputData);

addBtn.addEventListener("click", clickBTN);

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

	if (isEdited) {
		// listArr[index]=
		// taskName = todoList.childNodes[editId].textContent;
		// taskName.trim();
		// listArr.push(taskName);
		// listArr = linha
	}

	let newLiTag = "";

	listArr.forEach((element, index) => {
		newLiTag += `<li class="item__icons"> ${element}
         <span  class=" hidden">
            <i onclick="EditTask(${index})" class="fa-solid fa-pen-to-square edit-color"></i>
            <i onclick="checkList(${index})" class="fa-solid fa-check-circle check-color"></i>
            <i onclick="deleteTask(${index})" class="fa fas-solid fa-circle-xmark delete-color"></i>
         </span>
      </li>`;
	});
	todoList.innerHTML = newLiTag;
	input.value = "";
}

function EditTask(index) {
	// index = li number index
	// let getLocalStorage = localStorage.getItem("New Todo");
	// listArr = JSON.parses(getLocalStorage);
	// textValue = listArr[index];
	editId = index;

	Value = listArr[index];
	isEdited = true;
	input.value = Value;

	inputData();
	// input.value = taskName;
}

function checkList(index) {
	console.log("entrei");
}

function deleteTask(index) {
	let getLocalStorage = localStorage.getItem("New Todo");
	listArr = JSON.parse(getLocalStorage);
	listArr.splice(index, 1);

	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();
}

clearAll.addEventListener("click", () => {
	listArr = [];
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showTalks();
});
