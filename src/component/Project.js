import websiteImg1 from '../assats/ecommerce-websites.jpg'
import websiteImg2 from '../assats/food-ecommerce.jpg'
import websiteImg3 from '../assats/website-blog.jpg'

export default function Project(){
    const config={
        projects:[
            {
                image :websiteImg1,
                discription:'a ecommerce website built with react js',
                link:''
            },
        
            {
                image :websiteImg2,
                discription:'a ecommerce website built with react js',
                link:''
            },
        
            {
                image :websiteImg3,
                discription:'a ecommerce website built with react js',
                link:''
            },
        ]
    }
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full px-10 py-5">
         <div className="flex  flex-col justify-center">
        <h1 className="text-4xl  text-white border-b-4 border-secondry mb-5 w-[140px] font-bold">Projects</h1>
        <p>these are my project best project check them out</p>

         </div>
        </div>
        <div className="w-full">
            <div className='flex  flex-col md:flex-row px-10 gap-5 justify-center' >
                {config.projects.map((project)=>(<div className='relative'>
                <img className='h-[200px] w-[300px] rounded-xl' src={project.image}/>
                <div className='project-desc' >
                    <p className='text-center px-5 py-5 '>{project.discription} </p>
                  <div className='flex justify-center'> 
                    <a className='btn  justify-center'href={project.link} target='_blank'>View Project</a>
                  </div>

                </div>
                </div>))}
                
                
            </div>
        </div>
    </section>
}