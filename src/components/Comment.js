import style from '../styles/Comment.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'



export default function Comment({ user, time, text }) {
    return (<div className={style.main}>
        <span className={style.meta}>
            by <Link href={`user/${user}`}>{user}</Link> {timeSince(time)} ago 
        </span>
        <p className={style.text}>{text}</p>
    </div>)
}