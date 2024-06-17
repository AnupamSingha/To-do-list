document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");

  addTaskButton.addEventListener("click", () => {
    const taskDescription = document.getElementById("taskDescription").value;
    const taskTime = document.getElementById("time-input").value;
    const taskAmPm = document.getElementById("ampm-input").value;
    const taskDueDate = document.getElementById("taskDueDate").value;
    const taskPriority = document.getElementById("taskPriority").value;

    

    if (taskDescription) {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");

      const taskContent = document.createElement("div");
      taskContent.classList.add("task-content");
      taskContent.innerHTML = `
                <strong>${taskDescription}</strong> (${
        taskTime +  taskAmPm
      }) - ${taskPriority} priority, due by ${taskDueDate}
            `;

      const taskActions = document.createElement("div");
      taskActions.classList.add("task-actions");

      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });

      taskActions.appendChild(completeButton);
      taskActions.appendChild(deleteButton);

      taskItem.appendChild(taskContent);
      taskItem.appendChild(taskActions);

      taskList.appendChild(taskItem);

      document.getElementById("taskDescription").value = "";
      document.getElementById("taskTime").value = "";
      document.getElementById("taskAmPm").value = "";
      document.getElementById("taskDueDate").value = "";
      document.getElementById("taskPriority").value = "low";
    } else {
      alert("Please enter a task description.");
    }
  });
});
