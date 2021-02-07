import navbar from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
    return <div className={navbar.nav}>
        <div className={navbar.container}>
            <Link href={"/"}>
                <a className={navbar.logo}>
                    <img src={"https://zos.alipayobjects.com/rmsportal/AsASAiphPWWUJWG.png"} />
                </a>
            </Link>
            <Link href={"/news"} ><a className={navbar.route}>News</a></Link>
            <Link href={"/past"} ><a className={navbar.route}>Past</a></Link>
            <Link href={"/comments"} ><a className={navbar.route}>Comments</a></Link>
            <Link href={"/ask"} ><a className={navbar.route}>Ask</a></Link>
            <Link href={"/jobs"} ><a className={navbar.route}>Jobs</a></Link>
        </div>
    </div>
}