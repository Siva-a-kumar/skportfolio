import HeroImg from '../assats/IMG_20230113_234951.jpg'
import { AiOutlineFacebook, AiOutlineTwitter ,AiOutlineLinkedin} from "react-icons/ai";
export default function Hero(){
   return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
    <div className='w-1/2 md:w-full flex-col justify-end'>
    <h1 className=' text-white text-4xl font-hero-font'>Hi,<br/>Im  <span className='text-black'>sk</span>siva
    <p className='text-2xl w-full'>Im a Full-stact developer</p>
    </h1>
    <div className='flex py-10 '>
        <a className='pr-5 hover:text-white' href='#'><AiOutlineTwitter size={40} /></a>
        <a className='pr-5  hover:text-white' href='#'><AiOutlineFacebook size={40} /></a>
        <a  className =' hover:text-white' href='#'><AiOutlineLinkedin size={40} /></a>
    </div>
    </div>

    <img className='md:w-1/3  rounded-full ring-black ring-offset-1 ring-4 shadow-2xl shadow-gray-900 ' src={HeroImg}/>
   </section>
}