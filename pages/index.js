import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TokenSwap } from '@cremafinance/crema-sdk'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import Link from 'next/link'

// async function init () {
//   const swap = await new TokenSwap(conn, swapProgramId, swapKey, null).load()
// }

export default function Home () {
  return (
    <div style={{ bgcolor: '#363737' }}>
      <main className={styles.main}>
        Hello Hackathon
      </main>
    </div>
  )
}
