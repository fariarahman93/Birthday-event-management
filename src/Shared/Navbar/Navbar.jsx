import { Link, NavLink } from "react-router-dom";
import user from '../../assets/user.png';



const Navbar = () => {
    const links = <>
     <NavLink to="/"> <li className="text-xl text-purple-500 font-semibold"><a>Home</a></li></NavLink>
     <NavLink to="/services"> <li className="text-xl text-purple-500 font-semibold"><a>Services</a></li></NavLink>
     <NavLink to="/photographers"> <li className="text-xl text-purple-500 font-semibold"><a>Photographers</a></li></NavLink>
     <NavLink to="/packages"> <li className="text-xl text-purple-500 font-semibold"><a>Packages</a></li></NavLink>
     <NavLink to="/register"> <li  className="text-xl text-purple-500 font-semibold" ><a>Register</a></li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold normal-case text-3xl ">Birthday bash</a>
  </div>
  <div className=" hidden lg:flex">
    <ul className=" navbar-center menu menu-horizontal px-1 ">
     {links}
    </ul>
    
  </div>
  <div className="flex navbar-end " >
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user} />
        </div>
        
      </label>
      <div >
    <Link to="/login"><a className="p-3 rounded-lg bg-pink-200 text-xl text-purple-500 font-semibold">Log In</a></Link>
  </div>
    </div>
  
</div>
    );
};

export default Navbar;