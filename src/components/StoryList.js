import style from '../styles/StoryList.module.css'

export default function StoryList({ children }) {
    return (
        <div className={style.main}>
            {children}
        </div>
    )
}