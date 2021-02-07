import style from '../styles/StoryContainer.module.css'

export default function StoryContainer({ children }) {
    return (<div className={style.wrapper}>
        <div className={style.storyList}>
            {children}
        </div>
    </div>)
}