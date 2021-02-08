import style from '../styles/Comment.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'



export default function Comment({ id, by, time, text, totalReplies }) {
    return (<div className={style.main}>
        <span className={style.meta}>
            by <Link href={`user/${by}`}>{by || "Unknown"}</Link> {timeSince(time)} ago | <Link href={`comments/${id}`}>{`${totalReplies || 0} Replies`}</Link>
        </span>
        <p className={style.text} dangerouslySetInnerHTML={{
            __html: text
        }}></p>
    </div>)
}