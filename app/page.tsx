import Image from 'next/image'
import CarstenImg from './Carsten.png'
import { Inter } from 'next/font/google'
import Car from './Car.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={inter.className}>
      <div className="flex flex-row-reverse nav-background"> 
        <div className="nav-text p-4 align-right">
            Braeunling Consulting
        </div>
    </div>
      <div className='flex-center flex-col'>
        <div className='flex flex-wrap bg1 padding-container max-container w-full pb-24 pt-24'>
          <div>
            <Image className="cv-pic m-10" width={240} height={240} src={CarstenImg} alt="Picture of Carsten Braeunling"></Image>
          </div>
          <div className="flex-nowrap grow basis-1/2 justify-between gap-5 lg:gap-10 content-center">
            <h2 className='intro-header text-4xl font-bold -mt-1 -mb-3'>Automotive Engeneering & Program Management </h2>
            <p className='text-black intro-body roboto-regular text-2xl pt-5 '>I am Carsten Bräunling, Head of Braeunling Consulting, with 30 years of experience in the automotive Industry, working as a Senior Program Manager.</p>
          </div>
        </div>
        <div className='flex-row pb-16 pt-16 pl-32 bg4 flex flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='Key-header font-bold text-4xl pb-4 pl-4'>Key Projects</h2>
            <ul className="list-disc Key-items text-black">
              <li className='pb-4 text-xl'>BMW G65/G78 Instrument panel global technical development & Industrialisation</li>
              <li className='pb-4 text-xl'>BMW G60/G68 Instrument panel global technical development & Industrialisation</li>
              <li className='pb-4 text-xl'>Eng Mngr BMW G05, G06 G07, G09 Instrument panel program coordination </li>
              <li className='pb-4 text-xl'>BMW G12 Fondconsole PLT/TF Eng Support (BMW feb 2015- july 2016)</li>
              <li className='pb-4 text-xl'>PM BMW E8x IP, Industrialisation in only 5,5 Monts (SMP)</li>
              <li className='pb-4 text-xl'>PM Support global BMW X1 DP China</li>
              <li className='pb-4 text-xl'>BMW 35up Lightweight Cockpit</li>
              <li className='pb-4 text-xl'>PM BMW E8 x Plastic/AlumiumHybrid Hatchback door - plus i3 Concepts</li>
              <li className='pb-4 text-xl'>BMW E90 2-tone color Slush moulding process & mould development</li>
              <li className='pb-4 text-xl'>PM Porsche Interieur E1 Cayenne</li>
              <li className='pb-4 text-xl'>PM Porsche Interieur 911/Boxster</li>
              <li className='pb-4 text-xl'>Daimler, Audi, Seat, MAN, Opel IP, CC, DP PM since 1994</li>
            </ul>
          </div>
          <div className='flex-none grow-0 shrink pt-4 pl-20'>
            <Image alt='Car image indicating different components' className='grow-0'width={664} height={560} src={Car}></Image>
          </div>
        </div>
        <div className='flex flex-row bg1 p-10'>
          <div>
            <div>
              <h2 className='bold-40 lg:bold-64 text-4xl p-10 col font-bold'>My Expertise</h2>
            </div>
            <div className='flex flex-wrap grow gap-x-8 gap-y-2 py-6 min-w-56'>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Senior program management</h2><a className='text-xl'>Managed complex projects with a focus on strategy, execution, and continuous improvement.</a>
              </div>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Intercultural Experience</h2><a className='text-xl'>Successfully led projects across diverse, international teams in multicultural environments.</a>
              </div>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Real Team Player</h2><a className='text-xl'>Strong collaborator, consistently fostering teamwork and collective problem-solving.</a>
              </div>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Proven Leadership Skills</h2><a className='text-xl'>Demonstrated effective leadership in guiding teams to meet and exceed project goals.</a>
              </div>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Driven by Entrepreneurship</h2><a className='text-xl'>Entrepreneurial mindset, always seeking innovative solutions and opportunities for growth.</a>
              </div>
              <div className='basis-1/4 skill-box bg3 text-black min-w-56'>
                <h2 className='py-5 text-2xl font-bold'>Experience in Lightweight Materials & Process</h2><a className='text-xl'>Specialized in lightweight materials and manufacturing processes to optimize product performance.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}