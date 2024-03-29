import AboutImg from '../assats/about.png'
export default function About(){
    const config={
        line1:'Hi, My name is sk siva .I am a full-stack developer.i built beutiful website with react.js and tailwind css',
        line2:'I am proficient in Frontend skills like React.js, html5,  Tailwind CSS, Css3 and many more.',
        line3:'In backend I know Node.js, Springboot, Java, and Hipernet'
    }
    return<section id='about' className='flex flex-col md:flex-row py-20 font-hero-font p-5'>

        <div className='md:w-1/2 py-5'>
        <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-[#FFCDA2]'>
       <h1 className='text-4xl border-b-4 border-[#5B7B7A] mb-5 w-[170px] font-bold'>About Me</h1>
       <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div >
            {/* <a href='#home' className='flex justify-center bg-primary h-10 w-20 hover:border-2 border-white rounded-full sticky top-0 bottom-0'><p className='py-2'>Up!</p></a> */}
        </div>

    </section>
}