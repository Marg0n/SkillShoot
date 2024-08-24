import { MdWindow } from "react-icons/md";
import { useState } from "react";


const Navbar = () => {

    // State to track whether the dropdown is open or closed
    const [dropdown, setDropdown] = useState(false);

    // Function to toggle the dropdown state
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const lists = <>
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>Course</a>
        </li>
        <li>
            <a>Subscribe</a>
        </li>
        <li>
            <a>About</a>
        </li>
        <li>
            <a>Testimoni</a>
        </li>
    </>

    return (
        <>
            <div className="navbar text-white bg-[#245D51]">

                <div className="navbar-start">
                    {/* logo */}
                    <a to="/" className='flex gap-2 items-center btn btn-ghost text-xl'>
                        <p className='font-bold text-white'>Skill<span className="text-orange-500">Shoot</span></p>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {lists}
                    </ul>
                </div>

                <div className="navbar-end mr-2">

                    <div className="dropdown dropdown-bottom dropdown-end" onClick={toggleDropdown}>
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <MdWindow size={25} />
                        </div>
                        {dropdown && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2">
                                {lists}
                                <div className="divider divider-secondary my-0" ></div>
                                <li className="rounded-xl  ">
                                    <button className='bg-base-300 hover:bg-neutral hover:text-white block text-center'>Login</button>
                                </li>
                                <li className="rounded-xl  ">
                                    <button className="bg-orange-500 hover:bg-neutral hover:text-white block text-center">Register</button>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="hidden lg:flex lg:gap-2 lg:items-center">
                        <button className="btn btn-ghost">Login</button>
                        <button className="btn bg-orange-500 btn-ghost text-white">Register</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;