import Task from "./Task"
import PropTypes from 'prop-types'
import { memo } from 'react'

const TaskList = ({ tasks }) => {
    return (
        <>
            {
                tasks.length === 0 && (
                    <div className="alert alert-info">No tasks!</div>
                )
            }
            {
                tasks.map(task => (<Task key={task.id} task={task} />))
            }
        </>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        taskText: PropTypes.string.isRequired,
    })).isRequired
}

export default memo(TaskList)
