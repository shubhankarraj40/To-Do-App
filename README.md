# Todo App

A simple and interactive Todo App built with HTML, CSS, and JavaScript. This app allows you to manage tasks by adding, editing, marking them as completed, prioritizing, and deleting tasks. It also provides real-time progress tracking, visual stats, and stores your tasks persistently using `localStorage`.

## Features

### 1. **Add Tasks**
   - You can add new tasks by entering the task description and clicking the "+" button.
   - Tasks are dynamically added to the task list.

### 2. **Edit Tasks**
   - Each task has an "Edit" button, allowing you to edit the task text directly in the task list.
   - The task text is replaced by an input field, and upon losing focus, the task is updated with the new text.

### 3. **Mark Tasks as Completed**
   - Tasks can be marked as "Done" or "Undo" using the corresponding button.
   - Completed tasks are visually distinguished with a strikethrough effect.

### 4. **Prioritize Tasks**
   - You can toggle task priority between "High Priority" and "Low Priority" using the "Priority" button.
   - High-priority tasks are visually marked for easy identification.

### 5. **Delete Tasks**
   - Each task includes a "Delete" button to remove tasks from the list.
   - Once deleted, tasks are immediately removed from both the UI and the `localStorage`.

### 6. **Progress Bar**
   - The app features a progress bar at the top, which tracks how many tasks have been completed out of the total tasks.
   - The progress bar fills dynamically based on the completion percentage.

### 7. **Stats Display**
   - A task counter is displayed showing the number of completed tasks out of the total tasks.
   - The stats are updated every time a task is added, edited, or marked as completed.

### 8. **Congrats Animation**
   - Once all tasks are completed, a confetti animation is triggered as a congratulatory message.
   - The animation lasts for 5 seconds, providing a fun experience after completing all tasks.

### 9. **Persistent Storage**
   - Tasks are stored in `localStorage` so that they persist even after the page is reloaded.
   - This means your tasks and their statuses (completed, priority) are saved and reloaded automatically on page load.

## How It Works

1. **Adding a Task**: 
   - Enter your task in the input field and click the "+" button.
   - The task is added to the list and stored in `localStorage`.

2. **Editing a Task**:
   - When you click the "Edit" button, the task text turns into an input field.
   - You can update the text, and it will automatically save when you click outside the field or press "Enter".

3. **Marking a Task as Completed**:
   - Click the "Done" button to mark a task as completed. 
   - The task text will show a strikethrough, and it will be reflected in the progress bar and stats.

4. **Changing Task Priority**:
   - Toggle between "High Priority" and "Low Priority" by clicking the "Priority" button.
   - Tasks with high priority are visually marked for easy identification.

5. **Deleting a Task**:
   - Click the "Delete" button to remove a task from the list.
   - The task is instantly removed from both the UI and `localStorage`.

6. **Tracking Progress**:
   - As tasks are marked as completed, the progress bar and task counter are updated automatically.

7. **Congrats Animation**:
   - When all tasks are completed, a confetti animation is triggered to congratulate you.

## Technologies Used

- **HTML**: Markup for the structure of the app.
- **CSS**: Styling for the layout and UI components.
- **JavaScript**: Logic for managing tasks, editing them, updating stats, and handling events.
- **localStorage**: To persist tasks between page reloads.

## Future Enhancements

1. **Task Categories**:
   - Introduce categories (e.g., Work, Personal, etc.) to organize tasks into groups.

2. **Due Dates**:
   - Add the ability to set due dates for tasks and visually highlight tasks that are nearing their deadline.

3. **Priority Sorting**:
   - Allow sorting tasks based on their priority level, so high-priority tasks are listed at the top.

4. **Search and Filter**:
   - Add a search bar to filter tasks by keywords or status (completed, pending, etc.).

5. **Task Notes**:
   - Allow adding extra notes or descriptions for tasks to provide more details.

6. **Mobile Responsiveness**:
   - Enhance the app for better performance and usability on mobile devices.

7. **Notifications**:
   - Implement notification reminders for tasks that are close to their due date or marked as high priority.

8. **User Authentication**:
   - Integrate user authentication so users can have their own accounts and manage tasks across devices.

9. **Theming**:
   - Provide different theme options (dark mode, light mode) to customize the appearance of the app.

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in your browser to start using the Todo app.
3. Add, edit, prioritize, and delete tasks as needed. The app will keep track of your progress automatically.

## License

This project is open-source and available under the MIT License.

---

Feel free to fork, clone, or contribute to this project!

# Todo App

A simple and interactive Todo App built with HTML, CSS, and JavaScript. This app allows you to manage tasks by adding, editing, marking them as completed, prioritizing, and deleting tasks. It also provides real-time progress tracking, visual stats, and stores your tasks persistently using `localStorage`.

## Features

### 1. **Add Tasks**
   - You can add new tasks by entering the task description and clicking the "+" button.
   - Tasks are dynamically added to the task list.

### 2. **Edit Tasks**
   - Each task has an "Edit" button, allowing you to edit the task text directly in the task list.
   - The task text is replaced by an input field, and upon losing focus, the task is updated with the new text.

### 3. **Mark Tasks as Completed**
   - Tasks can be marked as "Done" or "Undo" using the corresponding button.
   - Completed tasks are visually distinguished with a strikethrough effect.

### 4. **Prioritize Tasks**
   - You can toggle task priority between "High Priority" and "Low Priority" using the "Priority" button.
   - High-priority tasks are visually marked for easy identification.

### 5. **Delete Tasks**
   - Each task includes a "Delete" button to remove tasks from the list.
   - Once deleted, tasks are immediately removed from both the UI and the `localStorage`.

### 6. **Progress Bar**
   - The app features a progress bar at the top, which tracks how many tasks have been completed out of the total tasks.
   - The progress bar fills dynamically based on the completion percentage.

### 7. **Stats Display**
   - A task counter is displayed showing the number of completed tasks out of the total tasks.
   - The stats are updated every time a task is added, edited, or marked as completed.

### 8. **Congrats Animation**
   - Once all tasks are completed, a confetti animation is triggered as a congratulatory message.
   - The animation lasts for 5 seconds, providing a fun experience after completing all tasks.

### 9. **Persistent Storage**
   - Tasks are stored in `localStorage` so that they persist even after the page is reloaded.
   - This means your tasks and their statuses (completed, priority) are saved and reloaded automatically on page load.

## How It Works

1. **Adding a Task**: 
   - Enter your task in the input field and click the "+" button.
   - The task is added to the list and stored in `localStorage`.

2. **Editing a Task**:
   - When you click the "Edit" button, the task text turns into an input field.
   - You can update the text, and it will automatically save when you click outside the field or press "Enter".

3. **Marking a Task as Completed**:
   - Click the "Done" button to mark a task as completed. 
   - The task text will show a strikethrough, and it will be reflected in the progress bar and stats.

4. **Changing Task Priority**:
   - Toggle between "High Priority" and "Low Priority" by clicking the "Priority" button.
   - Tasks with high priority are visually marked for easy identification.

5. **Deleting a Task**:
   - Click the "Delete" button to remove a task from the list.
   - The task is instantly removed from both the UI and `localStorage`.

6. **Tracking Progress**:
   - As tasks are marked as completed, the progress bar and task counter are updated automatically.

7. **Congrats Animation**:
   - When all tasks are completed, a confetti animation is triggered to congratulate you.

## Technologies Used

- **HTML**: Markup for the structure of the app.
- **CSS**: Styling for the layout and UI components.
- **JavaScript**: Logic for managing tasks, editing them, updating stats, and handling events.
- **localStorage**: To persist tasks between page reloads.

## Future Enhancements

1. **Task Categories**:
   - Introduce categories (e.g., Work, Personal, etc.) to organize tasks into groups.

2. **Due Dates**:
   - Add the ability to set due dates for tasks and visually highlight tasks that are nearing their deadline.

3. **Priority Sorting**:
   - Allow sorting tasks based on their priority level, so high-priority tasks are listed at the top.

4. **Search and Filter**:
   - Add a search bar to filter tasks by keywords or status (completed, pending, etc.).

5. **Task Notes**:
   - Allow adding extra notes or descriptions for tasks to provide more details.

6. **Mobile Responsiveness**:
   - Enhance the app for better performance and usability on mobile devices.

7. **Notifications**:
   - Implement notification reminders for tasks that are close to their due date or marked as high priority.

8. **User Authentication**:
   - Integrate user authentication so users can have their own accounts and manage tasks across devices.

9. **Theming**:
   - Provide different theme options (dark mode, light mode) to customize the appearance of the app.

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in your browser to start using the Todo app.
3. Add, edit, prioritize, and delete tasks as needed. The app will keep track of your progress automatically.

## License

This project is open-source and available under the MIT License.

---

Feel free to fork, clone, or contribute to this project!

## Screenshot

![Screenshot (5)](https://github.com/user-attachments/assets/99ffba31-54e7-4c00-8a29-0db16f70ae04)

