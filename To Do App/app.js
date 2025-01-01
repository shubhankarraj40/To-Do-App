// Selectors
const form = document.querySelector("form");
const input = form.querySelector("input");
const taskList = document.querySelector(".task-list");
const numbers = document.getElementById("numbers");
const progress = document.getElementById("progress");

// Task Array
let tasks = [];

// Create a congratulations overlay for confetti animation
const congratsOverlay = document.createElement("div");
congratsOverlay.classList.add("congrats-overlay", "hidden");
document.body.appendChild(congratsOverlay);

for (let i = 0; i < 50; i++) {
  const confettiPiece = document.createElement("div");
  confettiPiece.classList.add("confetti-piece");
  confettiPiece.style.left = `${Math.random() * 100}vw`;
  confettiPiece.style.animationDelay = `${Math.random()}s`;
  confettiPiece.style.animationDuration = `${Math.random() * 2 + 1}s`;
  congratsOverlay.appendChild(confettiPiece);
}

// Function to show animation
const showCongratsAnimation = () => {
  congratsOverlay.classList.remove("hidden");
  setTimeout(() => {
    congratsOverlay.classList.add("hidden");
  }, 5000); // Hide animation after 5 seconds
};

// Function to update stats
function updateStats() {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  // Update numbers
  numbers.textContent = `${completedTasks}/${totalTasks}`;

  // Update progress bar width
  const progressWidth =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  progress.style.width = `${progressWidth}%`;

  // Trigger the congratulations animation if all tasks are completed
  if (totalTasks > 0 && completedTasks === totalTasks) {
    showCongratsAnimation();
  }
}

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = ""; // Clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";

    if (task.priority) {
      li.classList.add("priority"); // Add priority class if task is marked high priority
    }

    // Task text (editable)
    const taskContent = document.createElement("span");
    taskContent.classList.add("task-text");
    taskContent.textContent = task.text;

    // Add strikethrough if completed
    if (task.completed) {
      taskContent.classList.add("completed");
    }
    li.appendChild(taskContent);

    // Complete button
    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Done";
    completeButton.className = "complete-btn";
    completeButton.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
      updateStats();
      saveTasks(); // Save tasks to localStorage
    });
    li.appendChild(completeButton);

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", () => {
      const newText = prompt("Edit task:", task.text);
      if (newText) {
        tasks[index].text = newText;
        renderTasks();
        updateStats();
      }
    });
    li.appendChild(editButton);

    // Priority button
    const priorityButton = document.createElement("button");
    priorityButton.textContent = task.priority
      ? "Low Priority"
      : "High Priority";
    priorityButton.className = "priority-btn";
    priorityButton.addEventListener("click", () => {
      tasks[index].priority = !tasks[index].priority;
      renderTasks();
      updateStats();
    });
    li.appendChild(priorityButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
      updateStats();
      saveTasks(); // Save tasks to localStorage
    });
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });

  updateStats();
}

// Function to save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks();
  }
}

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Add task to array
  tasks.push({ text: taskText, completed: false });

  // Clear input field
  input.value = "";
  renderTasks();
  saveTasks(); // Save tasks to localStorage
});

// Load tasks from localStorage when the page is loaded
window.addEventListener("load", loadTasks);
