import { FC } from "react"

interface StatProps {
  name: string,
  value: number | string
}

interface StatsProps {
  stats: StatProps[]
}

const Stat: FC<StatProps> = ({ name, value }) => {
  return (
    <div className="bg-gray-asphalt flex items-center px-6 py-2 gap-x-4 rounded-xl w-fit h-fit">
      <h3 className="text-gray-pearl opacity-30">{name}</h3>
      <div className="inline-block h-10 sm:h-10 md w-0.5 bg-gray-pearl opacity-30"></div>
      <p className="text-gray-pearl">{value}</p>
    </div>
  )
}

const Stats: FC<StatsProps> = ({ stats }) => {
  return (
    <div className="flex flex-col gap-y-4 sm:flex-col xl:flex-row sm:gap-y-4 md:gap-x-4 mt-4">
      { stats.map((stat, key) => <Stat key={key} {...stat} />)}
    </div>
  )
}

export default Stats