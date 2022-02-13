import { ReactComponent as Git } from "../../assets/git.svg";
import'./styles.css';
import{Link} from'react-router-dom'

const NavBar = () => (
    <nav className="nav-container">
        <Link to="/">
           <h1 className="nav-title">DB SEARCH</h1>
        </Link>
        <a href="https://github.com/daniel-BS-dev" className="git" title= "github"  target= "_blank" rel="noreferrer">
          <Git />
        <address className="name">/daniel</address>
        </a>
    </nav>
);
export default NavBar;