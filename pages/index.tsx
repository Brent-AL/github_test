import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>This website is being built by me in 2022.  The purpose herof is to teach me the fundamentals of nextjs.</p>
      <h2 className={styles.text}>Learnings:</h2>
      <p className={styles.text}>- How to use routing between pages.</p>
      <p className={styles.text}>- How to style pages.</p>
      <p className={styles.text}>- How to render headers and footers across all pages.</p>
      <Link href="/signup">
        <a className={styles.btn}>See about page</a>
      </Link>
    </div>
  )
}

