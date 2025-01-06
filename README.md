# AI Task Management Assistant

The **AI Task Management Assistant** is a web application that helps users organize their tasks, set priorities, and receive AI-powered productivity suggestions. The app allows users to add, complete, and delete tasks, as well as sort tasks based on priority. The tasks are stored locally in the browser using `localStorage` for persistent storage between page reloads.

## Features

- **Task Management**: Add, mark as complete, and delete tasks.
- **Priority Management**: Assign tasks with different priority levels: Low, Medium, and High.
- **Sorting**: Sort tasks based on priority.
- **AI Suggestions**: Get AI-powered suggestions to improve productivity.
- **Persistence**: Tasks persist across page reloads using `localStorage`.

## Technologies Used

- HTML
- CSS
- JavaScript
- `localStorage` for task persistence

## Setup Instructions

### Prerequisites

No backend server is required for this project. The tasks are stored in the browser's `localStorage`. You can run the project directly in your browser.

### Running the Project

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/ai-task-management-assistant.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ai-task-management-assistant
    ```

3. Open the `index.html` file in your browser. You can either:

   - Open the file directly in your browser by double-clicking on `index.html`.
   - Or, use a local server to serve the HTML file (optional, not required for basic use).

### Local Storage
- Tasks are saved in your browser's `localStorage`, so you can reload the page and still see your tasks.
- If you want to clear the tasks, you can either:
  - Manually clear `localStorage` through the browser developer tools.
  - Use the **Clear Tasks** button (if implemented in the app).

## Usage

1. **Add a Task**: 
    - Enter the task name in the input field and select a priority (Low, Medium, High).
    - Click the "Add Task" button to add it to your task list.

2. **Complete a Task**:
    - Click the "Complete" button next to a task to mark it as completed.

3. **Delete a Task**:
    - Click the "Delete" button next to a task to remove it from the list.

4. **Sort Tasks**:
    - Click the "Sort by Priority" button to sort tasks based on their priority (High to Low).

5. **AI Suggestion**:
    - The app provides AI-powered suggestions to improve productivity, like breaking tasks into smaller steps.

## Project Structure
ai-task-management-assistant/
├── index.html         # The main HTML file with structure and content
├── style.css          # CSS file for styling the app
├── script.js          # JavaScript file that handles app logic
├── README.md          # Project documentation (this file)

## Contributing

Feel free to fork the repository, submit issues, and make pull requests. Contributions are always welcome!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-xyz`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-xyz`).
5. Open a pull request.

## License

This project is open-source and available under the MIT License.

---

*Created with ❤️ by Saee Jadhav (https://github.com/JadhavSaee)*
