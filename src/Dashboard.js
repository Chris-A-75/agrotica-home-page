import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const loginToken = localStorage.getItem("token");
    const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/admin"); // redirect to login page
    }
  }, [navigate]);

  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

  if (!isLoggedIn) {
    return null; // render nothing if not logged in
  }

  return (
    <div>
      <h2>Welcome to the Admin Dashboard</h2>
      {/* Dashboard contents go here */}
    </div>
  );
}

export default Dashboard;
