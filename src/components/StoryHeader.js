import style from '../styles/StoryHeader.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'
import { extractHostFromUrl } from './url'



export default function StoryHeader({ score, title, by, url, time, text }) {
    return (<div className={style.story}>
        <a href={url} className={style.title}>{title}</a>
        <span className={style.host}> {extractHostFromUrl(url)}</span>
        {text ? <p dangerouslySetInnerHTML={{ __html: text || "" }}></p> : null}
        <br />
        <br />
        <span className={style.meta}>
            {score} points |  by <Link href={`user/${by}`}>{by || "Unknown"}</Link> {timeSince(time)} ago
        </span>
    </div>)
}