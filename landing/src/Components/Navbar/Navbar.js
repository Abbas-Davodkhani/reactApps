import './Navbar.css'

export default function Navbar(){
    return <div className="navbar"> 
        <ul className="menu">
            <li> <a className="nav-link" href="#"> Home</a> </li>
            <li> <a className="nav-link" href="#"> About</a> </li>
            <li> <a className="nav-link" href="#"> Shop</a> </li>
            <li> <a className="nav-link" href="#"> Map</a> </li>
        </ul>
    </div>
}