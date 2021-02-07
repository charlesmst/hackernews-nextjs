import story from '../styles/Story.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'



export default function Story({ id, score, title, user, url, time, comments }) {
    return (<div className={story.story}>
        <span className={story.score}>
            {score}
        </span>
        <span className={story.title}>
            <a href={url}>{title}</a>
            <a href={url} className={story.host}>({url})</a>
        </span>
        <br />
        <span className={story.meta}>
            by <Link href={`user/${user}`}>{user}</Link> {timeSince(time)} ago | <Link href={`story/${id}`}>{comments + " comments"}</Link>
        </span>
    </div>)
}