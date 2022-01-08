import Head from 'next/head'
import { PcCanvas } from '../components/layout/3dPc'
import { TopPage } from '../components/pages/TopPage'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Masaki Yoshiiwa (@masaiborg)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PcCanvas>
        <TopPage />
      </PcCanvas>
    </div>
  )
}
