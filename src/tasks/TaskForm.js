import { useState } from 'react'
import PropTypes from 'prop-types'

const TaskForm = ({ onSave, onCancel }) => {
    const [taskText, setTaskText] = useState('');

    const handleTaskTextChange = evt => setTaskText(evt.target.value);

    const emitSave = () => {
        onSave({ taskText });
    }

    return (
        <form onSubmit={emitSave}>
            <div className="row mb-2">
                <div className="col-12">
                    <label htmlFor="task-text" className="form-label">Task</label>
                    <input id="task-text" className="form-control" type="text" value={taskText} onChange={handleTaskTextChange} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <input className="btn btn-primary w-100 mb-1" type="submit" value="Save" />
                    <button className="btn btn-danger w-100" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

TaskForm.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
}

TaskForm.defaultProps = {
    onSave: () => { },
    onCancel: () => { },
}

export default TaskForm
