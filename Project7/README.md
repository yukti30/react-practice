🧩 Features You Need to Implement:
🔸1. TaskForm (with react-hook-form)
Fields: title, priority, tags[] (multiselect).

On submit → Add to task list.

🔸2. TaskList
List all tasks.

Show title, priority, and tags

🔸3. Edit Mode
When “Edit” is clicked on a task:

Render a small form inline.

User can update title and tags.

Save the changes to state.

🔸4. Delete
Clicking “Delete” removes task from list.

Should be passed as a children prop to TaskList.

tsx
Copy
Edit
<TagBadge tag="React" /> // renders: [ React ]
🔄 Bonus (Optional):
Persist tasks in localStorage using useEffect.

Allow filtering tasks by tag or priority.

💬 Component Suggestion (your file structure):
css
Copy
Edit
components/
│
├── TaskForm.tsx ✅ uses react-hook-form
├── TaskList.tsx ✅ shows all tasks with Edit/Delete
└── App.tsx ✅ main state + logic
