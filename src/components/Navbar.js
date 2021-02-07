import navbar from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar(){
    return <div className={navbar.nav}>
        <div className={navbar.container}>
            <a className={navbar.logo}>
                <img  src={"https://zos.alipayobjects.com/rmsportal/AsASAiphPWWUJWG.png"}/>
            </a>
            <Link href={"/top"} ><a className={navbar.route}>Top</a></Link>
            <Link href={"/news"} ><a className={navbar.route}>News</a></Link>
        </div>
    </div>
}