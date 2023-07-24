import { ElementType } from "react"

interface NotificationIconProps {
  icon: ElementType
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return (
    <div className="text-violet-500">
    <Icon size={30} />
    </div>
  )
}