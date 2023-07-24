import { ReactNode } from "react"

interface NotificationRootProps {
  children: ReactNode
}

export function NotificationRoot({ children }: NotificationRootProps) {
  return (
    <div className='flex items-center gap-4 text-sm border-y border-black-400 bg-zinc-900 px-6 py-4'>
      {children}
    </div>
  )
}