import { MdWindow } from "react-icons/md";
import { useState } from 'react';

const NavRight = () => {


    // State to track whether the dropdown is open or closed
    const [dropdown, setDropdown] = useState(false);

    // Function to toggle the dropdown state
    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };

    const lists = <>
        <li>
            <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
        </li>
        <li><a>Settings</a></li>
        <li
            className="rounded-xl p-2 m-2 text-right"
        >
            <button className='bg-base-300 hover:bg-neutral hover:text-white block text-center'>Login</button>
        </li>
    </>

    return (
        <>
            <div className="flex gap-2">


                {/* login */}
                <div className='z-50'>
                        <div className="dropdown dropdown-end" onClick={toggleDropdown}>

                            {dropdown && (
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[2] p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 rounded-box w-64">
                                    <li >
                                        <p className="flex justify-center items-center">
                                            Hi,
                                            <span className=" text-blue-500 font-serif">
                                                none
                                            </span>
                                        </p>
                                    </li>
                                    <div className="divider divider-secondary my-0" ></div>
                                    {lists}
                                </ul>
                            )}

                        </div>

                </div>

            </div>
        </>
    );
};

export default NavRight;