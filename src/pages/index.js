import { useEffect } from 'react'
import { fetchTopStories } from '../components/hackerNewsApi'
import Navbar from '../components/Navbar'
import Story from '../components/Story'
import StoryContainer from '../components/StoryContainer'
import StoryList from '../components/StoryList'

export default function Home({ stories }) {
  console.log({ stories })

  return (
    <div>
      <Navbar />

      <StoryContainer>
        <StoryList>
          {stories.map(x => <Story {...x} />)}
        </StoryList>
      </StoryContainer>
    </div>
  )
}

export async function getStaticProps(context) {
  const topStories = await fetchTopStories()
  
  return {
    props: {
      stories: topStories
    },
  }
}