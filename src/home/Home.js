import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="bg-light p-5 rounded">
            <h1>Random Page</h1>
            <p className="lead">This is a pointless landing page.</p>
            <Link className="btn btn-lg btn-primary" to="/tasks" role="button">Go to task list »</Link>
        </div>
    )
}

export default Home
