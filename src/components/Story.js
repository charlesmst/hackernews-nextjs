import story from '../styles/Story.module.css'

import Link from 'next/link'
import { timeSince } from './timeSince'
import { extractHostFromUrl } from './url'



export default function Story({ id, score, title, by, url, time, descendants }) {
    return (<div className={story.story}>
        <span className={story.score}>
            {score}
        </span>
        <span className={story.title}>
            <a href={url}>{title}</a>
            <a href={url} className={story.host}>({extractHostFromUrl(url)})</a>
        </span>
        <br />
        <span className={story.meta}>
            by <Link href={`user/${by}`}>{by}</Link> {timeSince(time)} ago | <Link href={`story/${id}`}>{descendants + " comments"}</Link>
        </span>
    </div>)
}