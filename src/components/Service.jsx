
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import ServiceOneIcon from "./Icons/ServiceOneIcon";
import ServiceTwoIcon from "./Icons/ServiceTwoIcon";

const Service = () => {
  return (
    <>
    <div className="py-[100px]">
   <Container>
    <Heading text={"Our Services"} className={"text-[40px] font-bold font-inter text-menuC text-center"} as="h3"/>
    <Heading text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"text-[16px] font-inter text-menuC text-center w-[542px] m-auto opacity-70"} as="p"/>
    <Flex className={'mt-7 justify-between flex-wrap gap-y-6'}>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceOneIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"UI/UX Design"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceTwoIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"Web Development"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceOneIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"Digital Marketing"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceTwoIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"Graphic Design"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceOneIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"Web Design"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        <div className="px-[45px] py-[60px] border border-[#E3E3E3] rounded-xl group hover:shadow-2xl">
            <ServiceTwoIcon className={" group-hover:fill-primary group-hover:stroke-white"}/>
            <Heading as="h1" text={"Motion Design"} className={"font-inter font-bold  text-menuC  text-[25px] py-7"}/>
            <Heading as="p" text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} className={"font-inter leading-7 opacity-70 text-[16px] text-menuC w-[274px]"} />
        </div>
        
        
    </Flex>
   </Container>
    </div>
    </>
  )
}

export default Service