'use client'

import { Notification } from '../components/Notification'
import { Label } from '../components/Label'
import { Check, RocketLaunch, X } from '@phosphor-icons/react'

export function Widget() {
  return (
    <div className='w-96 bg-zinc-900 rounded border border-zinc-800 shadow'>
        
      {/* # Header */}
      <div className='py-3 px-4 bg-zinc-800'>
        <p className='flex justify-between text-sm'>
          <span>Notificaçoes</span>
          <span className='uppercase text-violet-500'>Marcar todas como lidas</span>
        </p>
      </div>

      <Label title='Recentes' />


      <Notification.Root>
        <Notification.Icon icon={RocketLaunch} />
        <Notification.Content text='Voce recebeu um convite para fazer parte da empresa Rocketseat.' />
        <Notification.Actions>
          <Notification.Action icon={X}  />
          <Notification.Action icon={Check} className='bg-violet-500'  />
        </Notification.Actions>
      </Notification.Root>

      <Notification.Root>
        <Notification.Content text='Voce recebeu um convite para fazer parte da empresa Rocketseat.' />
      </Notification.Root>

      <Notification.Root>
        <Notification.Content text='Voce recebeu um convite para fazer parte da empresa Rocketseat.' />
        <Notification.Actions>
          <Notification.Action icon={X}  />
        </Notification.Actions>
      </Notification.Root>

      <Label title='Antigas' />

      <Notification.Root>
        <Notification.Icon icon={RocketLaunch} />
        <Notification.Content text='Voce recebeu um convite para fazer parte da empresa Rocketseat.' />
      </Notification.Root>

      <Notification.Root>
        <Notification.Icon icon={RocketLaunch} />
        <Notification.Content text='Voce recebeu um convite para fazer parte da empresa Rocketseat.' />
        <Notification.Actions>
          <Notification.Action icon={Check} className='bg-violet-500'  />
        </Notification.Actions>
      </Notification.Root>

    </div>
  )
}