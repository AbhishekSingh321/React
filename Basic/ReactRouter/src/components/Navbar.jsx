import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

function Navbar() {
  const [login,setLogin]=useState(false)
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!login) {
      setLogin(true);
      navigate("/dashboard");
    } else {
      setLogin(false);
      navigate("/");
    }
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; &nbsp;
      <Link to="/about">About</Link>
      &nbsp; &nbsp;
      <button onClick={handleAuth}>{login?'Logout':'Login'}</button>
    </nav>
  );
}

export default Navbar;