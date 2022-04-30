import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MiniDrawer from '../components/sidebar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const style = {
    width: '50%',
    margin: '0 auto',
    marginTop: 150,
  }
  return (
    <>
      <div className='App'>
        <Head>
          <title>ページタイトル</title>
          <meta name='description' content='ページ説明 120文字程度' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div style={style}>
          <MiniDrawer />
        </div>
      </div>

    </>
  )
}

export default Home
