import styles from './layouts/styles.module.css';
import { GoSearch } from "react-icons/go";
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
interface InputProps{
    placeholder: string,
    open:boolean,
    setOpen:Dispatch<SetStateAction<boolean>>;
}

const Input = ({placeholder,open,setOpen}:InputProps) => {
    const [value, setValue] = useState('');

    useEffect(()=>{

    },[open])
    const handleBlur = () =>{
        if(open && !value){
        setTimeout(()=>{
            setOpen(false)
        },500)
        }else{
            setOpen(true)
        }
    }

  return (
    <div className={`${open && styles.input_field}`}>
        {
            open ? 
            <div className={open && !value ? styles.empty_input : styles.active_input}>
                <input type='text' placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} onBlur={handleBlur} autoFocus={open}/>
            </div>
            : 
            <div className={`${open ? 'none' : 'flex'} items-center cursor-pointer ${styles.search_icon}`} onClick={()=>setOpen(true)}>
                <GoSearch className='mr-2'/>
                <span>Search</span>
            </div>
        }
    </div>
  )
}

export default Input