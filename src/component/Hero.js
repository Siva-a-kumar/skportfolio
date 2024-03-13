import HeroImg from '../assats/IMG_20230113_234951.jpg'
import { AiOutlineFacebook, AiOutlineTwitter ,AiOutlineLinkedin} from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:"im a Full-Stack devloper",
        twitter:'https://twitter.com/SivaKum38120589?t=BVARLNlO4SbOlMLSl2n02A&s=09',
        facebook:'https://www.facebook.com/people/Siva/pfbid02jUt8bFArVmeXWacB25hTy23JrUKacC7UxM9wund3BdQzB4jDvbrZCxCefgeoUkzgl/?mibextid=ZbWKwL',
        linkedin:'https://www.linkedin.com/in/sivakumar-a-16046a2b8/'

    }
   return <section className='flex flex-col md:flex-row px-5 py-20  bg-image justify-center ' id='home'>
    <div className='w-full md:w-1/2 flex-col justify-end'>
    <h1 className=' text-[#FFCDA2] text-4xl font-hero-font'>Hi,<br/>Im  <span className='text-[#5B7B7A]'>sk</span>siva
    <p className='text-2xl w-full'>{config.subtitle}</p>
    </h1>
    <div className='flex py-10 '>
        <a className='pr-5 hover:text-white' target='_blank' href={config.twitter}><AiOutlineTwitter size={40} /></a>
        <a className='pr-5  hover:text-white' target='_blank' href={config.facebook}><AiOutlineFacebook size={40} /></a>
        <a  className =' hover:text-white' target='_blank' href={config.linkedin}><AiOutlineLinkedin size={40} /></a>
    </div>
    </div>

    <img className='md:w-1/3 relative bottom-20 rounded-full ring-[#FFCDA2] ring-offset-1 ring-4 shadow-2xl shadow-[#5B7B7A] ' src={HeroImg}/>
   </section>
}