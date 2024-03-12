import AboutImg from '../assats/about.png'
export default function About(){
    return<section className='flex flex-col md:flex-row bg-secondery p-5'>
        <div className='md:w-1/2 py-5'>
        <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
       <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
       <p className='pb-5'>Hi, My name is sk siva .I am a full-stack developer.i built beutiful website with react.js and tailwind css</p>
            <p className='pb-5'>I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.</p>
            <p className='pb-5'>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
            </div >
        </div>
    </section>
}