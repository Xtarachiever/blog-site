import Link from "next/link";
import { RiEdit2Line } from "react-icons/ri";
import styles from './styles.module.css';
import SectionBar from "./SectionBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={styles.navBar}>
        <div className={`flex items-center justify-between px-4 py-2`}>
            <Link href={'/'}>
                <div className="flex">
                    <RiEdit2Line fontSize={'1.5rem'}/>
                    <p className="text-lg ml-1">MuseMingle</p>
                </div>
            </Link>
            <div className={`flex w-[35%] lg:w-[24%] justify-between items-center ${styles.desktopNavBar}`}>
                <p>Blog</p>
                <span className={styles.divider}></span>
                <p>Sign In</p>
                <button type="button" className={styles.sign_up}>Get Started</button>
            </div>
            <div className={styles.mobileView}>
                <div onClick={()=>setOpen(!open)}>
                    <GiHamburgerMenu />
                </div>
                {
                    open &&
                    <div className={styles.navLinks}>
                        <p>Blogs</p>
                        <p>Sign in</p>
                        <p>Get started</p>
                    </div>
                }
            </div>
        </div>
        <SectionBar />
    </div>
  )
}

export default NavBar;