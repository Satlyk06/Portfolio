import { createContext, useContext, useState, useEffect } from 'react'
import { getCurrentSeason, SEASON_CONFIG } from '../utils/seasons'

const SeasonContext = createContext()

export function SeasonProvider({ children }) {
  const [season, setSeason] = useState(getCurrentSeason())
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // Faster loading with progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 4 // faster fill
      })
    }, 30) // 30ms * 25 steps = ~750ms total

    const doneTimer = setTimeout(() => {
      setIsLoading(false)
    }, 1200) // total loader time: 1.2 seconds

    return () => {
      clearInterval(progressInterval)
      clearTimeout(doneTimer)
    }
  }, [])

  const config = SEASON_CONFIG[season]

  const value = {
    season,
    setSeason,
    config,
    isLoading,
    progress,
  }

  return (
    <SeasonContext.Provider value={value}>
      {children}
    </SeasonContext.Provider>
  )
}

export function useSeason() {
  const context = useContext(SeasonContext)
  if (!context) {
    throw new Error('useSeason must be used within SeasonProvider')
  }
  return context
}