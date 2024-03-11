import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";
import telegram from "../../public/images/svgs/telegram.svg"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Awesome Portfolio Me</title>
        <meta
          name="description"
          content="Explore Soratha's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-20 md:!pt-16 sm:!pt-20 ">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2  md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="I'm SoRatha"
                className="!text-left  xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"
              />
              <p className="my-4 text-xl  font-medium md:text-sm sm:!text-xs  ">
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/SOUN_Soratha_CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="https://telegram.me/Soratha_Soun"
                  className={`flex items-center rounded-lg border-2 border-solid bg-teal-600 p-2.5 px-6 ml-2 text-lg font-semibold
                  capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  md:p-2 md:px-4 md:text-base
                   `} target="_blank"
                >
                  Contact 
                </Link>
                
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Codebucks"
          />
        </div>
      </article>
    </>
  );
}
