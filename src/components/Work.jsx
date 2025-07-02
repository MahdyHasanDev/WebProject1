import Container from './Container'
import Heading from './Heading'

const Work = () => {
  return (
    <>
    <div className="py-[100px]">
        <Container>
            <Heading text={"Our Work Portfolio"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3"/>
            <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"leading-7 opacity-70 text-[16px] font-inter text-menuC text-center w-[542px] m-auto"} as="h3"/>
        </Container>
    </div>
    </>
  )
}

export default Work