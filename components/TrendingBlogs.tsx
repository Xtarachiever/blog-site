import styles from './styles.module.css';
import Link from 'next/link';

interface TrendingBlogProps{
    image:string,
    title:string,
    date:string,
    shortName:string
}
const TrendingBlogs = ({image,title,date,shortName}:TrendingBlogProps) => {
  return (
    <div className='max-w-[400px]'>
        <div className={styles.img_div}>
            <img src={image}  alt="blogs"/>
        </div>
        <div className="pt-6">
            <span className="xl:text-lg">{shortName} - {date}</span>
            <p className="text-xl xl:text-2xl pb-2">{title}</p>
            <Link href={''} className="xl:text-lg text-blueColor">Read article</Link>
        </div>
    </div>
  )
}

export default TrendingBlogs