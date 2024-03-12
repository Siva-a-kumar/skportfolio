import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import ContcatImg from '../assats/contect.jpeg'
export default function Contact(){
    return<section className='flex flex-col md:flex-row bg-primary p-5 py-40'>
       
        <div className='md:w-1/2 flex flex-row justify-end'>
            <div className='flex flex-col  text-white'>
       <h1 className='text-4xl border-b-4 border-secondry mb-5 w-[130px] font-bold'>Contact</h1>
       <p className='pb-5'>If you want to discuss more in details, please contact</p>
       <div className='flex-col align-middle'>
               <a className=' hover:text-white inline-block pr-2' href='#'><MdAlternateEmail size={20}/></a>
               <p className='pb-3 inline-block'><spam className='font-bold'>EMAIL :</spam>sksiva9360@gmail.com</p>

       </div>
       <div className='flex-col align-middle'>
               <a className=' hover:text-white inline-block pr-2' href='#'><IoPhonePortraitOutline size={20}/></a>
               <p className='pb-3 inline-block'><spam className='font-bold'>PHONE :</spam>+919360646496</p>

       </div>
       {/* <p className='py-2'><spam className='font-bold'>PHONE :</spam>+919360646496</p> */}
            </div >
        </div>
        <div className='md:w-1/2 py-5 flex justify-center'>
        <img  className='w-[300px] rounded-xl' src={ContcatImg}/>
        </div>
    </section>
}