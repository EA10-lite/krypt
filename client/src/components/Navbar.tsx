import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const navItems = ["Market", "Exchange", "Tutorials", "Wallets"];

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    return (
        <nav className='w-full flex md:justify-center justify-between items-center p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img 
                    src="/images/logo.png" 
                    alt="logo" 
                    className='w-32 cursor-pointer' 
                />
            </div>

            <ul className='text-white hidden md:flex list-none flex-row justify-center items-center flex-initial'>
                {navItems.map((item, index) => (
                    <NavItem 
                        key={item + index} 
                        title={item} 
                        classProps="mx-4 cursor-pointer" 
                    />
                ))}

                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>

            <div className='flex justify-end md:hidden relative'>
                { toggleMenu ? (
                    <AiOutlineClose 
                        onClick={()=> setToggleMenu(false)} 
                        size={28}
                        className='text-white md:hidden cursor-pointer'
                    />
                ) : (
                    <HiMenuAlt4 
                        onClick={()=> setToggleMenu(true)} 
                        size={28}
                        className='text-white md:hidden cursor-pointer'
                    />
                )}

                {toggleMenu && (
                    <ul 
                        className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end blue-glassmorphism animate-slide-in rounded-md'
                    >
                        <li className='text-xl w-full my-2'>
                            <AiOutlineClose 
                                onClick={()=> setToggleMenu(false)} 
                                size={28}
                                className='text-white cursor-pointer'
                            />
                        </li>


                        {navItems.map((item, index) => (
                            <NavItem 
                                key={item + index} 
                                title={item} 
                                classProps="my-4 text-lg text-white" 
                            />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

type NavItemProps = {
    title: string;
    classProps?: string;
}

const NavItem = ({ title, classProps }: NavItemProps) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

export default Navbar;