import styles from './styles.module.css';
import Link from "next/link";
import TrendingBlogs from "./TrendingBlogs";
const Main = () => {
  return (
    <div>
      <div className={`${styles.main_blog} flex items-center`}>
         <div className={`w-[55%] md:w-[40%] xl:w-[42%] ${styles.img_blog_div}`}>
           <img src="/Blog1.jpg" alt="blog_post" />
         </div>
         <div className={styles.second_div}>
           <span className="xl:text-xl">Graduation - 16th Jan, 2024</span>
           <p className="text-3xl xl:text-4xl my-4">How to walk your way to a perfect CGPA</p>
           <Link href={''} className="xl:text-xl text-blueColor">Read article</Link>
         </div>
      </div>
      <div className="pt-12">
        <p className="text-xl xl:text-3xl pb-2">Trending</p>
        <div className={styles.trending_blogs}>
          <TrendingBlogs shortName='Graduation' date='16th Jan, 2024' title='How to walk your way to a perfect CGPA' image='/Blog2.jpg'/>
          <TrendingBlogs shortName='Graduation' date='16th Jan, 2024' title='How to walk your way to a perfect CGPA' image='/Blog3.jpg'/>
          <TrendingBlogs shortName='Graduation' date='16th Jan, 2024' title='How to walk your way to a perfect CGPA' image='/Blog1.jpg'/>
          <TrendingBlogs shortName='Graduation' date='16th Jan, 2024' title='How to walk your way to a perfect CGPA' image='/Blog4.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Main;