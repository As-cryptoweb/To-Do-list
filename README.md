**To-Do List Application**
This project is a feature-rich To-Do List web application where users can add, delete, mark tasks as completed, and filter tasks. It also includes additional features such as marking tasks as important and a dropdown menu for easy navigation.

**Features**
**1 Add Tasks: **
        Users can add new tasks by entering text in the input field and clicking the "Add Task" button.
**2 Mark Completed: **
        Each task has a checkbox that allows users to mark it as completed.
**3 Mark Important:**
        Users can mark tasks as important by clicking the star icon, which changes color based on importance.
**4 Delete Tasks:**
        Each task has a delete button to remove it from the list.
**5 Filter Tasks:  **
        Users can filter tasks by categories: All, Completed, Pending, and Important.
**6 Dropdown Menu: **
        The app includes a dropdown menu for options like Profile, Assign Task, and History.


**Technology Stack :-**
**HTML**: Used for the structure and layout of the application.
**CSS**: Provides styling, animations, and responsiveness.
**JavaScript**: Handles the task addition, deletion, filtering, and other interactive features.
**Font Awesome**: Used for icons in the task list (like the star and trash icons).



**Setup Instructions**
  Follow these steps to set up and run the application:
    Clone the Repository:

**Directory Structure**
.
├── index.html         # Main HTML file
├── todo.css           # Stylesheet for To-Do List styling
├── todo.js            # JavaScript file for To-Do List logic
└── README.md          # Project documentation


**Code Structure and Explanation**
**HTML (index.html):**
         The main structure of the To-Do List is created here, including the input field, filter dropdown, add task button, task list, 
          and dropdown menu.
**CSS (todo.css): **
           The styling file defines the colors, spacing, font, and interactive effects of the app components.
**JavaScript (todo.js):**
           1 addTask(): Adds a new task to the list.
           2  renderTasks(): Updates the task list display in the DOM.
           3  toggleCompleted(): Marks tasks as completed or uncompleted.
           4  markImportant(): Toggles the importance status of tasks.
           5   deleteTask(): Removes tasks from the list.
           6   filterTasks(): Filters tasks based on selected filter criteria.
           7  toggleMenu(): Toggles the visibility of the dropdown menu.
**Usage :-**
      1  Add Task: Type a new task in the input field and press "Add Task".
      2  Mark Completed: Click the checkbox next to a task to mark it as completed.
      3   Mark Important: Click the star icon to mark/unmark a task as important.
      4  Delete Task: Click the trash icon to remove a task from the list.
      5   Filter Tasks: Use the dropdown to filter tasks by all, completed, pending, or important.
      6   Dropdown Menu: Click the menu icon to open the dropdown with additional options.

License:-
       This project is open-source and available for modification and personal use.
