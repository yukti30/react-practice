Exercise : Counter List
Goal: Create a list of counters where each counter has its own "Increment" button, but the count state is maintained in the parent component.

🧠 Concepts Covered:
Passing functions as props

Updating state in the parent from a child

Component reuse

💡 Structure:

1. App/Parent Component (CounterList.tsx)

Holds the counts array (e.g., [0, 0, 0])

Renders 3 <Counter /> components

Passes count and update function to each

2. Child Component (Counter.tsx)

Receives count and onIncrement as props

Renders the count and a button to increment it

✅ Expected Output:
plaintext
Copy
Edit
Counter 1: 0 [Increment]
Counter 2: 0 [Increment]
Counter 3: 0 [Increment]
Each button only updates its respective counter.

Extra: added decrement counter as well
