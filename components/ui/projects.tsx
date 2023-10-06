import Image from "next/image";

import project1 from "@/public/project1.png"
import project2 from "@/public/project2.png"
import project3 from "@/public/project3.jpg"
import project4 from "@/public/project4.png"
import { GithubIcon, ArrowUpRightSquareIcon } from "lucide-react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className="min-h-screen snap-start" id="projects">
      <div className="flex items-center p-6 space-x-3">
        <p className="text-lg font-semibold">Projects</p>
        <hr style={{
          color: '#7A0A0D',
          backgroundColor: '#7A0A0D',
          height: 3,
          borderColor: '#7A0A0D',
          width: '400px'
        }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-6 pb-4">
        <div className="flex flex-col p-4 rounded-lg items-center space-y-3 bg-stone-800">
          <Image
            src={project1}
            alt="project1"
          />
          <h4 className="text-lg font-semibold">Ecommerce - admin</h4>
          <p>Sebuah aplikasi web untuk mengelola produk toko. setiap akun dapat memiliki beberapa toko sekaligus. Dibuat menggunakan framework next dengan beberapa library tambahan</p>
          <div className="flex items-start w-full space-x-1">
            <Badge variant="secondary">Next</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
          <div className="flex items-center justify-end w-full space-x-1">
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/AkabaneErlangga/ecommerce-admin" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://ecommerce-admin-ml7c.vercel.app" target="_blank">
                <ArrowUpRightSquareIcon />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col p-6 rounded-lg items-center space-y-3 bg-stone-800">
          <Image
            src={project2}
            alt="project2"
          />
          <h4 className="text-lg font-semibold">Ecommerce - client</h4>
          <p>Sebuah aplikasi untuk menampilkan produk yang ada di setiap toko. Setiap toko memiliki halaman yang berbeda. Dilengkapi dengan fitur checkout yang terintegrasi dengan payment gateway</p>
          <div className="flex items-start w-full space-x-1">
            <Badge variant="secondary">Next</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
          <div className="flex items-center justify-end w-full space-x-1">
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/AkabaneErlangga/ecommerce-client" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link href="https://ecommerce-client-kohl-chi.vercel.app" target="_blank">
                <ArrowUpRightSquareIcon />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col p-6 rounded-lg items-center space-y-3 bg-stone-800">
          <Image
            src={project3}
            alt="project3"
          />
          <h4 className="text-lg font-semibold">BangOrder</h4>
          <p>Sebuah platform untuk pemesanan di restoran. Aplikasi web digunakan oleh restoran untuk mengatur makanan dan minuman, menerima pesanan dan mengatur keuangan.</p>
          <div className="flex items-start w-full space-x-1">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">MaterialUi</Badge>
          </div>
          <div className="flex items-center justify-end w-full space-x-1">
            <Button variant="ghost" size="icon">
              <Link href="https://github.com/Bang-Order" target="_blank">
                <GithubIcon />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col p-6 rounded-lg items-center space-y-3 bg-stone-800">
          <Image
            src={project4}
            alt="project4"
          />
          <h4 className="text-lg font-semibold">STEVIA</h4>
          <p>Sebuah platform untuk memonitor serangan internet yang terdeteksi. web akan menampilkan arah serangan dan jenis serangan yang terjadi.</p>
          <div className="flex items-start w-full space-x-1">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">NodeJs</Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;