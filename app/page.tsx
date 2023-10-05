import Image from 'next/image'
import hutao from '@/public/hutaoo.jpeg'
import AboutSection from '@/components/ui/about'
import SkillsSection from '@/components/ui/skills'
import ProjectsSection from '@/components/ui/projects'

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40 -mt-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-3 mt-4 h-screen snap-start">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h4 className='text-md'>Hello there, I&apos;m</h4>
          <h3 className='text-4xl'>Erlangga Aditya</h3>
          <h3 className='text-xl'>Software Developer</h3>
        </div>
        <div
          className='relative w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 outline outline-4 outline-red-700 rounded-full overflow-hidden'
        >
          <Image
            src={hutao}
            fill
            className="object-cover"
            alt="Image"
          />
        </div>
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}
