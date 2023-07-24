
interface NotificationContentProps {
  text: string
}

export function NotificationContent({ text }: NotificationContentProps) {
  return (
    <div>
      <p>{text}</p>
      <span className='inline-block mt-2 text-zinc-400'>Online há 3 min</span>
    </div>
  )
}