import Image from 'next/image'
import { Notification } from '../components/Notification'
import { Label } from '../components/Label'

export default function Home() {
  return (
    <main className='font-sans text-white h-screen flex justify-center items-center'>

      <div className='w-96 bg-zinc-900 rounded border border-zinc-800 shadow'>
        
        {/* # Header */}
        <div className='py-3 px-4 bg-zinc-800'>
          <p className='flex justify-between text-sm'>
            <span>Notificaçoes</span>
            <span className='uppercase text-violet-500'>Marcar todas como lidas</span>
          </p>
        </div>

        <Label title='Recentes' />

        <Notification />
        <Notification />

        <Label title='Antigas' />

        <Notification />
        <Notification />

      </div>
    </main>
  )
}
