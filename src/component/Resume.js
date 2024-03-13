import ResumeImg from '../assats/resume.jpg'
export default function Resume(){
    const config={
        link:'src\assats\sivakumar_resume_java2.pdf'
    }
    return<section id='resume' className='flex flex-col md:flex-row font-hero-font py-20 p-5'>
        <div className='w-full md:w-1/2 py-5 flex justify-center md:justify-end'>
        <img  className='w-[300px] rounded-xl shadow-[#5B7B7A]' src={ResumeImg}/>
        </div>
        <div className=' md:w-1/2 flex justify-center md:justify-center'>
            <div className='flex flex-col justify-center text-[#FFCDA2]'>
       <h1 className='text-4xl border-b-4 border-[rgb(91,123,122)]  mb-5 w-[140px] font-bold'>Resume</h1>
       <p className='pb-5'>You can view my resume <a className='btn ' href='#' download={config.link}>Download</a></p>
            </div >
        </div>
    </section>
}