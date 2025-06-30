import illu from "../assets/illu.png"
import Button from "./Button"
import Container from "./Container"
import Flex from "./Flex"
import Image from "./Image"

const Banner = () => {
  return (
<>
<div className="bg-primary py-[180px]">
    <Container>
        <Flex className={"justify-between"}>
            <div className="w-[542px] text-white">
                <h1 className={`font-inter font-bold text-[65px] leading-20`}>
                    We Are Digital Product Design Agency
                </h1>
                <p className={`font-inter font-regular text-[16px] leading-7 py-7`}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <Button className={'bg-white text-primary font-inter font-medium text-[18px]'} btnText={'Get Started'}/>
            </div>
            <div className="">
                <Image imgSrc={illu}/>
            </div>
        </Flex>
    </Container>
    </div> 
    </>
  )
}

export default Banner