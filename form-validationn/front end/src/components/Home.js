import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mongo">MongoForm</Link>
          </li>
          <li>
            <Link to="/mysql">MysqlForm</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Home;
