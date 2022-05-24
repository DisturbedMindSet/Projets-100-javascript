const input = document.querySelector("#inputField-input");
const addBtn = document.querySelector("#inputField-btn");
const todoList = document.querySelector(".todoList");
const pendingNumber = document.querySelector(".pendingNumb");
const clearAll = document.querySelector(".footer__btn");

let editId;
let isEdited = false;

input.addEventListener("input", e => {
	let userData = input.value.trim();

	if (e.target.value != null && e.target.value != "") {
		if (!isEdited) {
			// if (!listArr) {
			// }
			// listArr = JSON.parse(getLocalStorage);
		}
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

	if (!isEdited) {
		// se for falso =
		if (getLocalStorage == null) {
			listArr = [];
		}
		listArr = JSON.parse(getLocalStorage);
	} else {
		isEdited = false;
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

function EditTask(taskId, taskName) {
	// index = li number index
	// let getLocalStorage = localStorage.getItem("New Todo");
	// listArr = JSON.parse(getLocalStorage);
	// textValue = listArr[index];

	todoList.childNodes[index];
	// editId = taskId;
	// isEdited = true;
	// input.value = taskName;
}
console.log(EditTask());

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
