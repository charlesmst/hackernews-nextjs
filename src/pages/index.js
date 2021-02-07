import Navbar from '../components/Navbar'
import Story from '../components/Story'
import StoryContainer from '../components/StoryContainer'
import StoryList from '../components/StoryList'

export default function Home() {
  return (
    <div>
      <Navbar />

      <StoryContainer>
        <StoryList>
          <Story id={1} score={10} title={"Faux86: A portable, open-source 8086 emulator for bare metal Raspberry Pi (2019) "} url={"https://github.com/"} user={"bla"} comments={10} time={1612726346} />
          <Story id={2} score={10} title={"Faux86: A portable, open-source 8086 emulator for bare metal Raspberry Pi (2019)Faux86: A portable, open-source 8086 emulator for bare metal Raspberry Pi (2019)"} url={"https://github.com/"} user={"bla"} comments={10} time={1612726346} />

        </StoryList>
      </StoryContainer>
    </div>
  )
}
