import Container from "../Container"
import Image from "../Image"
import year from "../../assets/year.png"


const Year = () => {
  return (
    <section className="pb-[128px]">
        <Container>
            <a href="#">
            <Image src={year} className="w-full"/>
            </a>
        </Container>
    </section>
  )
}

export default Year