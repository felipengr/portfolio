'use client'

import Image from 'next/image'
import type React from 'react'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProjectCardProps {
  repoName: string
  imageSrc?: string
  altText?: string
  isLoading?: boolean
}

const PRIMARY_COLOR = '#B7A261'
const DARK_PRIMARY_COLOR = '#4B3D10'

const ProjectCard: React.FC<ProjectCardProps> = ({
  repoName,
  imageSrc,
  altText,
  isLoading = false,
}) => {
  const [projectData, setProjectData] = useState<{
    name: string
    html_url: string
  } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepoData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/github?repoName=${repoName}`) // Chama a sua API
        if (!response.ok) {
          throw new Error(
            `Erro ao buscar dados do repositório: ${response.status}`
          )
        }

        const data = await response.json()

        setProjectData({
          name: data.name,
          html_url: data.html_url,
        })
      } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error)
        setProjectData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchRepoData()
  }, [repoName])

  if (loading || isLoading || !projectData) {
    return (
      // biome-ignore lint/a11y/useValidAnchor: <explanation>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <div
          className={`p-6 border flex flex-col items-center justify-center border-[${PRIMARY_COLOR}] dark:border-[${DARK_PRIMARY_COLOR}] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md`}
        >
          <div className="w-60 sm:w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
            <Skeleton width={309} height={177} />
          </div>
          <div>
            <Skeleton width={180} />
          </div>
        </div>
      </a>
    )
  }

  const finalImageSrc = imageSrc || '/placeholder-image.png'
  const finalAltText = altText || `Image do projeto ${projectData.name}`

  return (
    <a href={projectData.html_url} target="_blank" rel="noopener noreferrer">
      <div
        className={`p-6 border flex flex-col items-center justify-center border-[${PRIMARY_COLOR}] dark:border-[${DARK_PRIMARY_COLOR}] bg-[#F9F6EA] dark:bg-[#403D32] rounded-md`}
      >
        <div className="w-60 sm:w-[309px] h-[177px] border border-black dark:border-white rounded-md relative overflow-hidden">
          <Image
            src={finalImageSrc}
            alt={finalAltText}
            fill
            sizes="(max-width: 768px) 100vw, 309px"
            style={{ objectFit: 'cover' }}
            className="object-top"
          />
        </div>
        <div>
          <p className="font-bold text-black dark:text-white mt-3">
            {projectData.name}
          </p>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
