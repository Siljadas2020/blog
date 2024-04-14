import "./navbar.css"
import { Link } from "react-router-dom"
function NavBar() {

    return(
       <div className="nav">
        <div className="topLeft">BLOG</div>
        <div className="topCenter">
            <ul className="list">
                <Link to="/"><li className="item">Home</li></Link>
                <li className="item">About</li>
                <li className="item">Contact</li>
                <Link to="/write"><li className="item">Add Blog</li></Link>
                <li className="item">Login</li>

            </ul>
        </div>
        <div className="topRight">
         <input type="text" value="Search Here" className="topSearchbar" style={{backgroundColor:"transparent"}}/>
        </div>
       </div>

    )
}

export default NavBar;