import LogoMarquee from '@/components/Marquee';
import Navbar from '@/components/Navbar'
import { CircleCheckBig } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
const Home = () => {

  // const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="hero-section max-w-[70%] mx-auto">
        <div className="container flex lg:flex-row sm:flex-col justify-center gap-14 items-center">
            <div className="left">
                <div className="top-left-container sm:flex sm:justify-center lg:flex lg:justify-start">
                    <p className='font-semibold '>AI RESUME BUILDER</p>

                </div>
                <div className="mid-left-container mt-5">
                    <div className="hero-text max-w-[700px] leading-tight  text-6xl font-semibold">
                        Create Your Perfect Resume in Minutes with <span className='bg-purple-600 rounded-lg text-white pl-1 pr-1'> AI-Powered </span> <span className='bg-purple-600 pl-1 pr-1 rounded-xl text-white'> Precision</span>
                    </div>
                    <div className="small-hero-text max-w-[400px] mt-2">
                        <p className='text-lg text-gray-600 mt-4'>Craft a standout resume effortlessly with our AI-driven builder. Tailor-made for job seekers aiming to impress employers and land their dream job.</p>
                    </div>
                     
                </div>
                <div className="bottom-left-container mt-6">
                    <div className="checkboxes grid grid-cols-2 gap-4 ">
                        <div className="checkbox-item flex flex-row gap-2 items-center">
                            <CircleCheckBig className='text-blue-600'/>
                            <p className='font-medium text-lg'>AI-Powered</p>
                        </div>
                        <div className="checkbox-item flex flex-row gap-2 items-center">
                            <CircleCheckBig className='text-blue-600'/>
                            <p className='font-medium text-lg'>Easy to Use</p>
                        </div>
                        <div className="checkbox-item flex flex-row gap-2 items-center">
                            <CircleCheckBig className='text-blue-600'/>
                            <p className='font-medium text-lg'>Fast Results</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right mt-10 flex justify-center items-center">
              <div
                style={{
                  padding: "18px",
                  borderRadius: "1.5rem",
                  background: "linear-gradient(90deg, #e0f2fe 0%, #bae6fd 40%, #f8fafc 80%, #fff 100%)",
                  display: "inline-block"
                }}
              >
                <img
                  className="rounded-xl "
                  
                  src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/674078c2a6978cfe2b5775f0_ai%20resume%20builder%20hero.webp"
                  alt=""
                />
              </div>
            </div>
        </div>
        <div className="container-2 flex justify-center items-center mt-28">
          <div className="marquee flex flex-col items-center justify-center overflow-hidden whitespace-nowrap">
            <div className="marquee-title flex flex-col items-center justify-center gap-2">
              <p className='text-3xl font-semibold'>Trusted By job seekers who've landed at top companies</p>
              <p className='text-xl' >Our users have secured positions at industry-leadin companies such as </p>
            </div>
            <div className="marquee-tag">
              <LogoMarquee/>
            </div>
          </div>
        </div>
        <div className="container-3 work-section ">

                  <div className="absolute -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="section-head flex flex-col gap-6 max-w-[640px] mx-auto text-center">
                    <p className='text-5xl font-semibold text-center'>How <span className='text-purple-600 '>  It Works </span></p>
                    <p>Quickly upload, customize, and download your resume tailored to any job description in no time</p>
                </div>
                <div className="mt-20 small-container-1 flex flex-row justify-between">
                  <div>Text</div>
                  <div className='small-image-1'>
                    <img className='h-[400px] w-[500px]' src="/public/container-1.webp" alt="container-1 img" />
                  </div>
                </div>
        </div>
      </div>
    </>
  )
}

export default Home
