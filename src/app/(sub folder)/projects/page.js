import Image from "next/image";
import bg from "../../../../public/background/projects-background.jpeg"
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Astro from "@/components/models/Astro";
import dynamic from "next/dynamic";

const Astro = dynamic(() => import("@/components/models/Astro"), {ssr: false});

export default function Home() {
  return (
    <>
      <Image 
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        className="h-full w-full object-cover object-center opacity-25 fixed top-0 left-0" 
      />
        <ProjectList projects={projectsData} />

        <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
            <RenderModel>
                <Astro />
            </RenderModel>
        </div>
    </>
  );
}
