import { FC, useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../context/CurrentUserContext"

import Nesting from "../assets/Nesting.svg"
import Star from "../assets/Star.svg"
import Chield from "../assets/Chield_alt.svg"
import { getRepositories } from "../services/repositories"
import { RepositoriesType } from "../types"
import { getUpdatedDaysAgo } from "../utils/date"

interface RepositoryProps {
  name: string,
  description: string | null,
  license?: string,
  stars: number | undefined,
  forks: number | undefined,
  updatedAt: string | null | undefined
}

const Repository: FC<RepositoryProps> = ({ name, description, license, forks, stars, updatedAt }) => {
  return (
    <div className="bg-gradient-to-br from-gray-asphalt to-gray-anthracite p-5 rounded-xl">
      <h3 className="text-gray-pearl text-xl">{name}</h3>
      <p className="text-gray-pearl text-base text-opacity-70 mt-2">{description}</p>
      <div className="flex items-center gap-x-5 mt-4">
        {license && 
        <figure className="flex gap-x-1">
          <img src={Chield} alt="" />
          <figcaption className="text-gray-pearl text-opacity-70">{license}</figcaption>
        </figure>
        }
        <figure className="flex gap-x-1">
          <img src={Nesting} alt="" />
          <figcaption className="text-gray-pearl text-opacity-70">{forks}</figcaption>
        </figure>
        <figure className="flex gap-x-1">
          <img src={Star} alt=""/>
          <figcaption className="text-gray-pearl text-opacity-70">{stars}</figcaption>
        </figure>
        <span className="text-gray-pearl text-opacity-70 text-xs">{updatedAt}</span>
      </div>
    </div>
  )
}

const Repositories = () => {
  const { currentUser } = useContext(CurrentUserContext)
  const [repositories, setRepositories] = useState<RepositoriesType>([])

  useEffect(() => {
    if(!currentUser.login) return
    getRepositories(currentUser.login).then((data) => {
      setRepositories(data)
    })
  }, [currentUser])

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8 mt-8">
      {repositories.map((repository, key) => {
        const { name, description, license, stargazers_count, forks, updated_at } = repository
        const repositoryProps = {
          name,
          description,
          license: license?.spdx_id,
          stars: stargazers_count,
          forks,
          updatedAt: getUpdatedDaysAgo(updated_at)
        }
        return <Repository key={key} {...repositoryProps} />
      })}
    </div>
  )
}

export default Repositories