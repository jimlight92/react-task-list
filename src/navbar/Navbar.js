import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Top Navbar</Link>

                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/tasks">Tasks</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
