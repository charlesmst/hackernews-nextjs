import Navbar from '../../components/Navbar'
import StoryHeader from '../../components/StoryHeader'
import StoryContainer from '../../components/StoryContainer'
import CommentList from '../../components/CommentList'
import Comment from '../../components/Comment'

export default function Home() {
    return (
        <div>
            <Navbar />

            <StoryContainer>
                <StoryHeader id={1} score={10} title={"Faux86: A portable, open-source 8086 emulator for bare metal Raspberry Pi (2019) "} url={"https://github.com/"} user={"bla"} comments={10} time={1612726346} />
                <CommentList total={10}>
                    <Comment user={"charles"} text={"Does the Pi still have a composite video output? Some interesting things can be done with a precise CGA emulation on NTSC output."} time={1612726346}></Comment>
                    <Comment user={"charles"} text={"sadjsid sdajsai das djsa di"} time={1612726346}></Comment>
                </CommentList>

            </StoryContainer>
        </div>
    )
}
