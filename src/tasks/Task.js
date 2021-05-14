
import PropTypes from 'prop-types'

function Task({ task }) {
    return (
        <div>Task {task.id}: {task.taskText}</div>
    )
}

Task.propTypes = {
    task: PropTypes.object
}

export default Task
