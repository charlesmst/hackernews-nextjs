import style from '../styles/StoryHeader.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'



export default function StoryHeader({ id, score, title, user, url, time, comments }) {
    return (<div className={style.story}>
        <a href={url} className={style.title}>{title}</a>
        <span className={style.host}>{url}</span>
        <br />
        <br />
        <span className={style.meta}>
            {score} points |  by <Link href={`user/${user}`}>{user}</Link> {timeSince(time)} ago
        </span>
    </div>)
}