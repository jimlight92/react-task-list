import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Top navbar</a>

          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tasks</a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="container">
        <div class="bg-light p-5 rounded">
          <h1>Random Page</h1>
          <p class="lead">This is a pointless landing page.</p>
          <a class="btn btn-lg btn-primary" href="/docs/5.0/components/navbar/" role="button">View navbar docs »</a>
        </div>
      </main>

    </div>
  );
}

export default App;
