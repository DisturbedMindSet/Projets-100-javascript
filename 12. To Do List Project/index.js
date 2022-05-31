const input = document.querySelector("#inputField-input");
const addBtn = document.querySelector("#inputField-btn");
const todoList = document.querySelector(".todoList");
const pendingNumber = document.querySelector(".pendingNumb");
const clearAll = document.querySelector(".footer__btn");

let editId;
var checkId = [];
let isEdited = false;
let checkLi = false;

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

	if (checkLi) {
		console.log("deu");
		checkId.forEach(element => {
			todoList.childNodes[element].classList.add("active-check");
		});
	}

	input.value = "";
}

function EditTask(index) {
	editId = index;

	Value = listArr[index];
	isEdited = true;
	input.value = Value;

	inputData();
	// input.value = taskName;
}

function checkList(index) {
	checkLi = true;
	checkId.push(index);
	console.log(checkId);
	showTalks();

	// if (checkLi) {
	// 	todoList.childNodes[index].classList.add("active-check");

	// 	console.log(todoList.childNodes[index]);
	// } else {
	// 	todoList.childNodes[index].classList.remove("active-check");
	// }
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
