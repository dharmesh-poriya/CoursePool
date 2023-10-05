import React from "react";
import { styles } from "../styles/style";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>

      <figure className="1500px:px-24 1500px:py-8 900px:flex bg-slate-100 rounded-xl dark:bg-black">

        <Image
          className="rounded-none mx-auto mt-16"
          src={require('./../../public/assets/CP_LOGO.jpeg')}
          alt=""
          width={600}
          height={100}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <br />
            <h1 className={`${styles.title} 800px:!text-[45px]`}>
              What is <span className="text-gradient">CoursePool?</span>
            </h1>
            <br />
            <p className="text-lg font-medium">
              “Are you ready to take your programming skills to the next level? Look
              no further than CoursePool, the premier programming community dedicated
              to helping new programmers achieve their goals and reach their full
              potential.
              <br />
              <br />
              As the founder and CEO of CoursePool, I know firsthand the challenges
              that come with learning and growing in the programming industry.
              That&apos;s why I created TourNion &ndash; to provide new programmers
              with the resources and support they need to succeed.
              <br />
              <br />
              Our YouTube channel is a treasure trove of informative videos on
              everything from programming basics to advanced techniques. But
              that&apos;s just the beginning. Our affordable courses are designed to
              give you the high-quality education you need to succeed in the
              industry, without breaking the bank.
              <br />
              <br />
              But CoursePool is more than just a community &ndash; we&apos;re a
              family. Our supportive community of like-minded individuals is here to
              help you every step of the way, whether you&apos;re just starting out
              or looking to take your skills to the next level.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              coursepool2023@gmail.com
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Surat, Gujarat
            </div>
          </figcaption>
        </div>
      </figure>
      <div >
        <br />
        <h1 className={`${styles.title} 800px:!text-[45px]`}>
          Unveiling the Creators of <span className="text-gradient">CoursePool!!</span>
        </h1>
        <br />
        <br />

        <div className="lg:px-80 lg:flex md:flex sm:block mx-10 sm:mx-0">
          <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10 sm:my-0">
            <div className="flex flex-col items-center pb-10">
              <Image className="w-24 h-24 mb-3 rounded-full shadow-lg mt-5" src={"https://avatars.githubusercontent.com/u/84856389?v=4"} alt="Dharmesh Image" width={300} height={300}/>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Dharmesh Poriya</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Final Year Student</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link href="https://www.linkedin.com/in/dharmesh-poriya/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect</Link>

                <Link href="https://twitter.com/D_Poriya_05" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</Link>
              </div>
            </div>
          </div>
          {
            window.innerWidth <= 650 && <br />
          }
          <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              <Image className="w-24 h-24 mb-3 rounded-full shadow-lg mt-5" src={"https://avatars.githubusercontent.com/u/87079541?v=4"} alt="Bonnie image" width={200} height={200}/>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jeet Savsani</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Final Year Student</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <Link href="https://www.linkedin.com/in/jeet-savsani-1b56b7201/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Connect</Link>

                <Link href="https://twitter.com/SavsaniJeet" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
