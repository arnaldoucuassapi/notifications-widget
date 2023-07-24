'use client'

import { ReactNode } from "react"

interface NotificationActionsProps {
  children: ReactNode
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return (
    <div className='flex gap-2'>
      {children}
    </div>
  )
}