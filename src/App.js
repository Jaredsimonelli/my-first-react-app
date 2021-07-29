import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
    const name = 'Jared'
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 7th at 4:30pm',
            reminder: false,
        }
    ])

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
    }


    return (
        <div className='container'>
            {/* for props of boolean or integer -> title={1} or title={true} */}
            <Header title='This is a title' showForm={() => setShowAddTask(!showAddTask)} />
            {/* && is shorthand for a ternary where there is no else (ex: if showAddTask is true display else do not */}
            {showAddTask && <AddTask onAdd={addTask} />}
            <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Hi {name} your schedule is below</h2>
            {tasks.length > 0 ?
                < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                : 'No plans scheduled'
            }
        </div>
    );
}

export default App;
