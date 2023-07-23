
export function Label({ title }: { title: string }) {
  return (
    <div className='py-1.5 px-2.5 bg-black-400 text-zinc-400 text-sm'>
      <span>{title}</span>
    </div>
  )
}