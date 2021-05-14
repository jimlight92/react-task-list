import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

function Tasks() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])

    const saveTask = (task) => {
        setTasks([
            ...tasks,
            {
                ...task,
                id: tasks.length + 1
            }
        ])
        setShowAddTask(false)
    }
    const cancelAddTask = () => setShowAddTask(false)

    const renderAddTaskButton = () => {
        return !showAddTask &&
            <button className="btn btn-secondary w-100" onClick={() => setShowAddTask(true)}>Add Task</button>
    }

    const renderAddTaskForm = () => {
        return showAddTask && (
            <div className="row mb-3">
                <div className="col-12">
                    <TaskForm onCancel={cancelAddTask} onSave={saveTask} />
                </div>
            </div >
        )
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-12">
                    <h2>Task List</h2>
                    {renderAddTaskButton()}
                </div>
            </div>
            {renderAddTaskForm()}
            <div className="row mb-3">
                <div className="col-12">
                    <TaskList tasks={tasks} />
                </div>
            </div>
        </>
    )
}

export default Tasks
