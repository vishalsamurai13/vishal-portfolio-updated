import React from 'react'
import ItemLayout from './ItemLayout';
import ExperienceCarousel from './ExperienceCarousel';

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'>
            <ItemLayout className={'col-span-full lg:col-span-8 row-span-2 flex-col items-start'}>
                <h2 className='text-xl md:text-2xl text-left w-full capitalize'>
                    About me 
                </h2>
                <p className='font-light text-xs sm:text-sm md:text-base'>
                I am confident that my knowledge, qualifications and experiences, coupled with my passion for Web Development, make me not only a strong
candidate but also a dedicated, proactive, and adaptable team member who can contribute to your Company's continued success. I look forward to
the opportunity to discuss how my skills and experiences align with your needs and vision.
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full xs:col-span-0 sm:col-span-6 lg:col-span-4 text-accent'}>   
                <p className='font-semibold w-full text-left text-xl sm:text-2xl'>
                    15+ <sub className='font-semibold text-base'>Projects</sub> 
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full xs:col-span-0 sm:col-span-6 lg:col-span-4 text-accent'}>
            <p className='font-semibold w-full text-left text-xl sm:text-2xl'>
                    4+ <sub className='font-semibold text-base'>Months of Training</sub> 
                </p>
            </ItemLayout>

            <ItemLayout className={'col-span-full sm:col-span-6 md:col-span-4 !p-0'}>
                <img className= 'w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=vishalsamurai13&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Vishal' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-8 !p-0'}>
                <img className= 'w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=vishalsamurai13&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Vishal' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img className= 'w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,ae,androidstudio,bootstrap,cpp,c,cloudflare,discord,django,docker,firebase,git,github,mongodb,mysql,nextjs,nodejs,npm,ps,php,pr,pycharm,py,sqlite,tailwind,ts,vscode,wordpress,react' alt='Vishal' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 flex-col items-start'}>
                <h2 className='text-2xl text-center w-full capitalize font-bold'>
                    EDUCATION
                </h2>
                <ul style={{ listStyleType: 'disc' }} className='space-y-4 '>
                    <li>
                        <sub className='text-xl font-bold text-accent'>Class X </sub><br />
                        (2017-18)
                        <p className='font-light'>
                            Kendriya Vidyalaya, ONGC Panvel
                        </p>
                    </li>
                    <li>
                    <sub className='text-xl font-bold text-accent'>Class XII </sub> <br />
                        (2019-20)
                        <p className='font-light'>
                            Kendriya Vidyalaya, ONGC Panvel
                        </p>
                    </li>
                    <li>
                    <sub className='text-xl font-bold text-accent'>Bachelors of Technology (Information Technology) </sub><br />
                        (2020-24)
                        <p className='font-light'>
                            Manipal University Jaipur
                        </p>
                    </li>
                </ul>
            </ItemLayout>

            <ItemLayout className={'col-span-full md:col-span-6 flex-col items-start'}>
                <h2 className='text-2xl text-center w-full capitalize font-bold'>EXPERIENCE</h2>
                <ExperienceCarousel />
            </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails
