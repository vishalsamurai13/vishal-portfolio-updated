import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpeg"
import Form from "@/components/contact/Form";


export default function Contact() {
  return (
    <>
      <Image 
        priority
        sizes="100vw"
        src={bg}
        alt="background"
        className="-z-50 h-full w-full object-cover object-center opacity-25 fixed top-0 left-0" 
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full  sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the astronaut
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          If you find my work inspiring and are interested in collaborating or hiring me, I'd love to hear from you! Your feedback is invaluable and helps me grow as a professional. Feel free to reach out for inquiries, project discussions, or to share your thoughts on my work. Let's create something amazing together!
          </p>
        </div>
        <Form />
      </article>

    </>
  );
}
