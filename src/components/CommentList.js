import style from '../styles/CommentList.module.css'

export default function CommentList({ total, children }) {
    return (
        <div className={style.main}>
            <p className={style.header}>{total} comments</p>
            <div className={style.children}>
            {children}

            </div>
        </div>
    )
}