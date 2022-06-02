import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Memories Blog</title>
        <meta name="description" content="Chia sẻ những câu chuyện cuộc sống" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Slider />
     
    </div>
  )
}
