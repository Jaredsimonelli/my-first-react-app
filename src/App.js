import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'


function App() {
    const name = 'Jared'
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    //Fetch tasks from mock database
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    // Fetch singular task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    // Add Task
    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])

        // const id = Math.floor(Math.random() * 10000) + 1
        // const newTask = { id, ...task }
        // setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task ))
    }

    return (
        <Router>
            <div className='container'>
                {/* for props of boolean or integer -> title={1} or title={true} */}
                <Header title='Task Manager' showForm={() => setShowAddTask(!showAddTask)} showAddText={!showAddTask} />

                <Route
                    path='/'
                    exact
                    render={(props) => (
                        <>
                            {/* && is shorthand for a ternary where there is no else (ex: if showAddTask is true display else do not */}
                            {showAddTask && <AddTask onAdd={addTask} />}
                            <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Hi {name} your schedule is below</h2>
                            {tasks.length > 0 ?
                                < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                                : 'No plans scheduled'
                            }
                        </>
                )} />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
