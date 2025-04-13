import { Link } from "react-router";
import Sidebar from "../../Components/SideBar";

const Home = () => {
  return (
    <div className="flex">
        <Sidebar />
      <main className="p-6 flex-1">
        <h1>Welcome to the Home Page!</h1>
        <Link to={'/admin'}>admin</Link>
      </main>
    </div>
  );
};

export default Home;
