import Head from 'next/head'
import { PcCanvas } from '../components/layout/3dPc'
import { TopPage } from '../components/pages/TopPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Masaki Yoshiiwa (@cymagix)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PcCanvas>
        <TopPage />
      </PcCanvas>
    </>
  )
}
