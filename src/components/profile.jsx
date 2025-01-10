import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <hr />
      <div className="visit">
        <p>Visit one of these</p>
        <Link to="popeye">Popeye</Link>
        <Link to="spinach">Spinach</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default Profile;
