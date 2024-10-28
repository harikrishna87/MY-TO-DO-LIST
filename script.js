function AddTask() {
    let input_value = document.getElementById("input_value");
    let input_data = input_value.value.trim();
    console.log(input_data);

    if (input_data === "") {
        alert("Please enter a task");
        return;
    }
    let div1 = document.getElementById("container1");

    let items = document.createElement("div");
    items.style.width = "500px";
    items.style.border = "1px solid black";
    items.style.borderRadius = "13px";
    items.style.padding = "25px";
    items.style.margin = "15px";
    items.style.fontSize = "27px";

    items.innerHTML = `
        <span class="task-text">${input_data}</span> </br>
        <button class="Dlt_btn" click="DeleteTask()"> Delete</button> 
        <button class="Ed_btn"> Edit</button> 
        <button class="Com_btn">Complete</button>`;
        
    div1.append(items);
    input_value.value = "";

    let delete_Option = items.querySelector(".Dlt_btn");
    delete_Option.addEventListener("click", () => {
        DeleteTask(items);
    });

    let complete_Option = items.querySelector(".Com_btn");
    complete_Option.addEventListener("click", () => {
        CompleteTask(items);
    });

    let edit_Option = items.querySelector(".Ed_btn");
    edit_Option.addEventListener("click", () => {
        EditTask(items);
    });

}

function DeleteTask(item) {
    let confirmation = confirm("Are you sure you want to delete the task?");
    if (confirmation) {
        item.remove();
    }

    let task_completed = document.getElementById("container2");
        if (task_completed.children.length === 0) {
            task_completed.style.display = "none";
        }

}

function CompleteTask(item) {
    let completed = item.querySelector(".Com_btn");
    let editButton = item.querySelector(".Ed_btn");
    let confirm1 = confirm("Are you sure you completed this task?");
    if (confirm1) {
        completed.innerHTML = "Completed ✔️";
        completed.style.backgroundColor = "#54C392";
        completed.style.color = "Black";
        item.style.opacity = "0.5";
        
        // Disable edit and complete button after completion
        completed.disabled = true;
        editButton.disabled = true;
        
        // Adding Completed Tasks to Div
        let task_completed = document.getElementById("container2");
        task_completed.style.display = "block";
        task_completed.append(item)
    } else {
        setTimeout(() => {
            alert("Complete the Task!!");
        }, 200);
    }
}

function EditTask(item) {
    let taskText = item.querySelector(".task-text");
    let newTask = prompt("Edit your task:", taskText.innerText);
    if (newTask && newTask.trim() !== "") {
        taskText.innerText = newTask.trim();
    }
}

