import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePicture from '../assets/images/me.png'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons'
// import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Home() {
  return (
    <div className='font-LeagueSpartan'>
      <Head>
        <title>Mahbubur Rahman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <motion.main
        className={styles.main}
        Layout
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >

        {/* header */}
        {/* <div className='mb-5'>
          <Image src={profilePicture} alt="Picture of the author" width='200' />
        </div> */}
        <div className='text-center'>
          <h1 className='font-bold text-4xl sm:text-base lg:text-5xl'>MAHBUBUR RAHMAN</h1>
          {/* <h3 className='font-bold text-2xl sm:text-base lg:text-3xl'>Full Stack Developer</h3> */}
          // <a target="_blank" href="#" rel="noopener noreferrer">
          //   <span className='text-xl underline mx-2'>resume</span>
          // </a>
          <a target="_blank" href="mahbubur9@yahoo.com" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>email</span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mahbubur8/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>linkedin</span>
          </a>
          <a target="_blank" href="https://github.com/mahbubur3/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>github</span>
          </a>
          <a target="_blank" href="https://www.facebook.com/mahbubur15/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>facebook</span>
          </a>
        </div>

        {/* skills */}
        <div className='text-center lg:w-4/12 md:w-6/12 sm:w-8/12'>
          <h3 className='font-bold mt-10 text-2xl sm:text-base lg:text-3xl'>Skills</h3>
          <p className='text-xl'>C++, Python, JavaScript, React, Django, Django REST Framework, PostgreSQL, MySQL, Firebase</p>
        </div>

        {/* works */}
        <div className='text-center'>
          <h3 className='font-bold mt-10 text-2xl sm:text-base lg:text-3xl'>Works</h3>
          <p className='text-xl'>Notes - Live | <a target="_blank" href="https://github.com/mahbubur3/notesapplication" rel="noopener noreferrer"><span className='text-xl underline mx-2'>Code</span></a></p>
          <p>JavaScript, React, SQLite, Python & Django</p>
          <p className='text-xl'>DevInfo - Live | <a target="_blank" href="https://github.com/mahbubur3/devinfo" rel="noopener noreferrer"><span className='text-xl underline mx-2'>Code</span></a></p>
          <p>Python, Django, JavaScript & PostgreSQL</p>
          <p className='text-xl'>Daily Task - Live | <a target="_blank" href="https://github.com/mahbubur3/Daily_Task" rel="noopener noreferrer"><span className='text-xl underline mx-2'>Code</span></a></p>
          <p>Python, Django & SQLite</p>
          <p className='text-xl'>Explore Around - Live | <a target="_blank" href="https://github.com/mahbubur3/Explore-Around" rel="noopener noreferrer"><span className='text-xl underline mx-2'>Code</span></a></p>
          <p>Python, Django & SQLite</p>
        </div>
      </motion.main >

      {/* footer  */}
      < motion.footer
        className={styles.footer}
        Layout
        animate={{ opacity: 1, transition: { duration: 2 } }
        }
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}>
        Copyright © 2024 Mahbubur Rahman. All rights reserved.
      </motion.footer >
    </div >
  )
}
