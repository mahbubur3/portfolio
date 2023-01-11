import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import myImg from '../assets/images/my.png'
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
        <div className='mb-5'>
          <Image src={myImg} alt="Picture of the author" width='200' />
        </div>
        <div className='text-center'>
          <h1 className='font-bold text-5xl'>Hi, I{"'"}m Mahbubur.</h1>
          <h3 className='font-bold text-3xl'>Full Stack Developer</h3>
        </div>

        {/* skills */}
        <div className='text-center lg:w-4/12 md:w-6/12 sm:w-8/12'>
          <h3 className='font-bold text-3xl mt-10'>Skills</h3>
          <p className='text-2xl'>JavaScript, React, Firebase, Python, Django, PostgreSQL, MySQL, Git & GitHub</p>
        </div>

        {/* works */}
        <div className='text-center'>
          <h3 className='font-bold text-3xl mt-10'>Works</h3>
          <h3>under construction</h3>
        </div>
      </motion.main >

      {/* footer  */}
      < motion.footer
        className={styles.footer}
        Layout
        animate={{ opacity: 1, transition: { duration: 2 } }
        }
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className='my-3'>
          <a href="https://www.facebook.com/mahbubrahman01/">
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a href="https://www.linkedin.com/in/mahbubrahman1/">
            <FontAwesomeIcon icon={faLinkedin} size='2x' className='ml-5' />
          </a>
          <a href="https://github.com/mahbubrahman1">
            <FontAwesomeIcon icon={faGithub} size='2x' className='ml-5' />
          </a>
          <a href="https://twitter.com/mahbub_rahman10">
            <FontAwesomeIcon icon={faTwitter} size='2x' className='ml-5' />
          </a>
          <a href="https://stackoverflow.com/users/16684765/mahbubur-rahman">
            <FontAwesomeIcon icon={faStackOverflow} size='2x' className='ml-5' />
          </a>
        </div>
        Copyright ©️ Mahbubur Rahman
      </motion.footer >
    </div >
  )
}
