
type taskProps = {
  task: {
    id: string,
    title: string,
    state: boolean,
  },
  onArchiveTask: (id: string) => void,
  onPinTask: (id: string) => void,
}

export default function Task({ task }: taskProps) {
  return (
    <div className="text-sm text-red-800">
      <p>{task.title}</p>
    </div>
  )
}