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
          <h1 className='font-bold text-4xl sm:text-base lg:text-5xl'>Mahbubur Rahman</h1>
          <h3 className='font-bold text-2xl sm:text-base lg:text-3xl'>Software Developer</h3>
          <a target="_blank" href="https://drive.google.com/file/d/1if2yvFSTJYq3aP_oZA56w4sZ-XqM_tIo/view" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>Resume</span>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mahbuburrahman1/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>Linkedin</span>
          </a>
          <a target="_blank" href="https://github.com/mahbubrahman1/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>GitHub</span>
          </a>
          <a target="_blank" href="https://www.facebook.com/mahbubur89/" rel="noopener noreferrer">
            <span className='text-xl underline mx-2'>Facebook</span>
          </a>
        </div>

        {/* skills */}
        <div className='text-center lg:w-4/12 md:w-6/12 sm:w-8/12'>
          <h3 className='font-bold mt-10 text-2xl sm:text-base lg:text-3xl'>Skills</h3>
          <p className='text-xl'>Python, JavaScript, React, Django, Django REST Framework, PostgreSQL, MySQL, Firebase, Git & GitHub</p>
        </div>

        {/* works */}
        <div className='text-center'>
          <h3 className='font-bold mt-10 text-2xl sm:text-base lg:text-3xl'>Works</h3>
          <p className='text-xl'>under construction</p>
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
        Copyright © 2023 Mahbubur Rahman. All rights reserved.
      </motion.footer >
    </div >
  )
}
