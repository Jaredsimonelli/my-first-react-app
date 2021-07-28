import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {
    const name = 'Jared'
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

    const addTask = () => {
        let newTaskList = [...tasks, {
            id: tasks[tasks.length - 1].id + 1,
            text: 'temp',
            day: 'temp',
            reminder: false,
        }]

        setTasks(newTaskList)
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    return (
        <div className='container'>
            {/* for props of boolean or integer -> title={1} or title={true} */}
            <Header title='This is a title' onAdd={addTask} />
            <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Hi {name} your schedule is below</h2>
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
