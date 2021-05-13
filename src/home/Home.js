import { Link } from 'react-router-dom'

function Home() {
    return (
        <div class="bg-light p-5 rounded">
            <h1>Random Page</h1>
            <p class="lead">This is a pointless landing page.</p>
            <Link class="btn btn-lg btn-primary" to="/tasks" role="button">Go to task list »</Link>
        </div>
    )
}

export default Home
