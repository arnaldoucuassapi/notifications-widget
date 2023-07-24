import { ButtonHTMLAttributes, ElementType } from "react"
import { twMerge } from "tailwind-merge"

interface NotificationActionProps extends ButtonHTMLAttributes<HTMLElement>{
  icon: ElementType,
}

export function NotificationAction({ icon: Icon, ...rest}: NotificationActionProps) {
  return (
    <button 
      {...rest} 
      className={twMerge('py-2.5 px-3 bg-black-400 rounded transition-opacity hover:opacity-50', rest.className)}
    >
      <Icon weight="bold" />
    </button>
  )
}