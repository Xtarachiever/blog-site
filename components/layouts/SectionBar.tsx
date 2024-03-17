import Link from "next/link"
import styles from './styles.module.css';
import Input from "../Input";
import { useState } from "react";

const SectionBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className={`bg-ashColor py-2 text-cream ${styles.sections}`}>
        <div className={styles.sections_links}>
            <Link href="/">
                Trending
            </Link>
            <Link href="/">
                Popular
            </Link>
            <Link href="/">
                Writers
            </Link>
            <Link href="/">
                Case Study
            </Link>
        </div>
        <Input placeholder="Search ..." open={open} setOpen={setOpen}/>
    </div>
  )
}

export default SectionBar