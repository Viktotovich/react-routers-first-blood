import { Link } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here is a link to another page</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
