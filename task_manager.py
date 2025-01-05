import openai
import sqlite3
import datetime

openai.api_key = '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'

conn = sqlite3.connect('tasks.db')
c = conn.cursor()

c.execute('''CREATE TABLE IF NOT EXISTS tasks
             (id INTEGER PRIMARY KEY, task TEXT, deadline DATE, status TEXT)''')
conn.commit()

def fetch_tasks():
    c.execute("SELECT * FROM tasks")
    tasks = c.fetchall()
    return tasks

def get_openai_response(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003", 
        prompt=prompt, 
        max_tokens=150
    )
    return response.choices[0].text.strip()

class TaskManagerAssistant:
    def __init__(self):
        self.tasks = fetch_tasks()
    
    def show_tasks(self):
        tasks = fetch_tasks()
        if not tasks:
            print("No tasks available.")
        else:
            for task in tasks:
                print(f"Task: {task[1]}, Deadline: {task[2]}, Status: {task[3]}")
    
    def add_task(self, task, deadline):
        c.execute("INSERT INTO tasks (task, deadline, status) VALUES (?, ?, ?)", 
                  (task, deadline, "Incomplete"))
        conn.commit()
        print(f"Task '{task}' added with deadline {deadline}.")
        
    def update_task_status(self, task_id, status):
        c.execute("UPDATE tasks SET status = ? WHERE id = ?", (status, task_id))
        conn.commit()
        print(f"Task {task_id} updated to {status}.")
        
    def get_help(self):
        return "I can help you manage tasks, add new tasks, and show your tasks."

assistant = TaskManagerAssistant()

def run_assistant():
    print("Welcome to your Task Manager Assistant! How can I help you today?")
    
    while True:
        user_input = input("You: ").lower()
        
        if user_input in ['quit', 'exit']:
            print("Goodbye!")
            break
        elif 'show tasks' in user_input:
            assistant.show_tasks()
        elif 'add task' in user_input:
            task_name = input("Enter task name: ")
            deadline = input("Enter deadline (YYYY-MM-DD): ")
            assistant.add_task(task_name, deadline)
        elif 'update task' in user_input:
            task_id = int(input("Enter task ID to update: "))
            status = input("Enter new status (Complete/Incomplete): ")
            assistant.update_task_status(task_id, status)
        elif 'help' in user_input:
            print(assistant.get_help())
        else:
            print("Sorry, I didn't understand that. Type 'help' for assistance.")

run_assistant()
