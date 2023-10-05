import Image from "next/image";

import nextIcon from "@/public/next-logo.png"
import reactIcon from "@/public/react-logo.png"
import jsIcon from "@/public/js-logo.png"
import tsIcon from "@/public/ts-logo.png"
import goIcon from "@/public/go-logo.png"
import phpIcon from "@/public/php-logo.png"

const SkillsSection = () => {
  return (
    <div className="h-screen snap-start" id="skills">
      <div className="flex items-center p-6 space-x-3">
        <p className="text-lg font-semibold">Skills</p>
        <hr style={{
          color: '#7A0A0D',
          backgroundColor: '#7A0A0D',
          height: 3,
          borderColor: '#7A0A0D',
          width: '400px'
        }} />
      </div>
      <div className="px-6 grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        <div className="flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
            <Image
              src={nextIcon}
              alt="nextIcon"
            />
          </div>
          <h4>Next</h4>
        </div>
        <div className="flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="flex item-center w-14 h-14 rounded-full bg-white overflow-hidden">
            <Image
              src={reactIcon}
              alt="reactIcon"
            />
          </div>
          <h4>React</h4>
        </div>
        <div className="col-span-2 md:col-span-1 flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
            <Image
              src={tsIcon}
              alt="tsIcon"
            />
          </div>
          <h4>Typescript</h4>
        </div>
        <div className="col-span-2 md:col-span-1 flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
            <Image
              src={jsIcon}
              alt="jsIcon"
            />
          </div>
          <h4>Javascript</h4>
        </div>
        <div className="col-span-1 flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="flex item-center w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={goIcon}
              alt="goIcon"
            />
          </div>
          <h4>GoLang</h4>
        </div>
        <div className="col-span-1 flex p-3 items-center space-x-3 outline outline-2 outline-red-500 rounded-lg">
          <div className="w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={phpIcon}
              alt="phpIcon"
            />
          </div>
          <h4>PHP</h4>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;