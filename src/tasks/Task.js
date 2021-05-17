
import PropTypes from 'prop-types'
import { memo } from 'react'

function Task({ task }) {
    return (
        <div>Task {task.id}: {task.taskText}</div>
    )
}

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        taskText: PropTypes.string.isRequired,
    })
}

export default memo(Task)
