import { Link } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav className="nav-bar">
            <ul className="container-list">
                <li><Link to="/" >STORE</Link></li>
            </ul>
        </nav>
    )
}