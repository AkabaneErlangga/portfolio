import Image from "next/image";
import hutao from '@/public/hutaoo.jpeg'

const AboutSection = () => {
  return (
    <div className="h-screen snap-start" id="about">
      <div className="flex items-center p-6 space-x-3">
        <p className="text-lg font-semibold">About</p>
        <hr style={{
          color: '#7A0A0D',
          backgroundColor: '#7A0A0D',
          height: 3,
          borderColor: '#7A0A0D',
          width: '400px'
        }} />
      </div>
      <div className="flex flex-col lg:flex-row items-center space-y-10 md:py-6 px-8 md:px-24 justify-between">
        <p className="max-w-xl text-justify">Lulusan Teknik Informatika Politeknik Elektronika Negeri Surabaya dengan pujian (Cum Laude). Memiliki
          ketertarikan dalam bidang software engineering khususnya dalam bidang frontend dan backend. Sudah
          membuat dan mengembangkan lebih dari 5 aplikasi web menggunakan beberapa bahasa pemrograman baik
          secara frontend maupun backend.
        </p>
        <div
          className='relative w-[250px] h-[250px] outline outline-4 outline-red-700 rounded-full overflow-hidden'
        >
          <Image
            src={hutao}
            fill
            className="object-cover"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;