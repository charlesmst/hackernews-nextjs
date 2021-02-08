import Navbar from '../../components/Navbar'
import StoryHeader from '../../components/StoryHeader'
import StoryContainer from '../../components/StoryContainer'
import CommentList from '../../components/CommentList'
import Comment from '../../components/Comment'
import { fetchItem, fetchItemWithComments, fetchTopStoriesIds } from '../../components/hackerNewsApi'

export default function Home({ item, comments }) {
    return (
        <div>
            <Navbar />

            <StoryContainer>
                <StoryHeader {...(item || {})} />
                <CommentList total={item?.descendants}>
                    {(comments || []).map(comment => (
                        <Comment key={comment.id} {...comment} />
                    ))}
                </CommentList>

            </StoryContainer>
        </div>
    )
}



export async function getStaticProps({ params }) {
    const { item, comments } = await fetchItemWithComments(params.id)
    return {
        props: {
            item,
            comments
        },
        revalidate: 10
    }
}
export async function getStaticPaths() {
    const topStoriesIds = await fetchTopStoriesIds()

    //Ex: [{ params: { id: '1' } }, { params: { id: '2' } }]
    const pagePaths = topStoriesIds.map(x => ({ params: { id: x.toString() } }))
    return {
        paths: pagePaths,
        fallback: true,
    }
}