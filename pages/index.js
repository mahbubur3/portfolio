import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='font-LeagueSpartan'>
      <Head>
        <title>Mahbubur Rahman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className='text-center'>
          <h1 className='font-bold text-5xl'>Hello! This is Mahbubur.</h1>
          <h3 className='font-bold text-3xl'>Full Stack Developer</h3>
        </div>
        <div className='text-center'>
          <h3 className='font-bold text-3xl mt-10'>Skills</h3>
          <p className='text-2xl'>HTML, CSS, Bootstrap, Tailwind, SASS, JavaScript, React, Firebase, Python, Django, PostgreSQL</p>
        </div>

      </main>

      <footer>
        Copyright by Mahbubur
      </footer>
    </div >
  )
}
