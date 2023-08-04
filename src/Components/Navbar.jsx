import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to={"/"}>
          <p className="title">Fantasy RL</p>
        </Link>
        <div className="links">
          <Link to={"/rosters"}>
            <p>Rosters</p>
          </Link>
          <Link to={"/"}>
            <p>Leaderboard</p>
          </Link>
          <Link to={"/stats"}>
            <p>Player Stats</p>
          </Link>
          <Link to={"/scoring"}>
            <p>Scoring System</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
