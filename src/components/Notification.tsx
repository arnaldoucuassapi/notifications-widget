'use client'

import { Check, RocketLaunch, X } from "@phosphor-icons/react"

export function Notification() {
  return (
    <div className='flex items-center gap-3 text-sm border-y border-black-400 bg-zinc-900 px-5 py-4'>
      
      <div className="flex gap-4">
        <div className="text-violet-500">
          <RocketLaunch size={30} />
        </div>

        <div>
          <p>Voce recebeu um convite para fazer parte da empresa Rocketseat.</p>
          <span className='inline-block mt-2 text-zinc-400'>Online há 3 min</span>
        </div>
      </div>

      <div className='flex gap-2'>
        <button 
          className='py-2.5 px-3 bg-black-400 rounded transition-opacity hover:opacity-50'
        >
          <X weight="bold" />
        </button>

        <button 
          className='py-2.5 px-3 bg-violet-500 rounded transition-opacity hover:opacity-50'
        >
          <Check weight="bold" />
        </button>
      </div>
    </div>
  )
}