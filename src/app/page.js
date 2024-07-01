import Image from "next/image";
import bg from "../../public/background/home-background.jpeg"
import RenderModel from "@/components/RenderModel";
// import Astronaut from "@/components/models/Astronaut";
import Navigation from "@/components/navigation";
import dynamic from "next/dynamic";

const Astronaut = dynamic(() => import("@/components/models/Astronaut"), {ssr: false});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image 
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        className="h-full w-full object-cover object-center opacity-25"
        fill 
      />

      <div className="w-full h-screen">
        {/* Navigation and 3D Model */}
        <Navigation/>
        <RenderModel>
          <Astronaut />
        </RenderModel>
      </div>
    </main>
  );
}
