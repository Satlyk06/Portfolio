// Detects current season based on month
// Northern Hemisphere: Winter=Dec-Feb, Spring=Mar-May, Summer=Jun-Aug, Autumn=Sep-Nov
export const SEASONS = {
  WINTER: 'winter',
  SPRING: 'spring',
  SUMMER: 'summer',
  AUTUMN: 'autumn'
}

export const SEASON_CONFIG = {
  [SEASONS.WINTER]: {
    name: 'Winter',
    emoji: '❄️',
    bg: 'bg-winter-bg',
    accent: 'text-winter-accent',
    particle: 'text-winter-particle',
    gradient: 'from-slate-900 via-blue-950 to-slate-900',
  },
  [SEASONS.SPRING]: {
    name: 'Spring',
    emoji: '🌧️',
    bg: 'bg-spring-bg',
    accent: 'text-spring-accent',
    particle: 'text-spring-particle',
    gradient: 'from-emerald-950 via-teal-950 to-emerald-900',
  },
  [SEASONS.SUMMER]: {
    name: 'Summer',
    emoji: '☀️',
    bg: 'bg-summer-bg',
    accent: 'text-summer-accent',
    particle: 'text-summer-particle',
    gradient: 'from-orange-950 via-amber-950 to-orange-900',
  },
  [SEASONS.AUTUMN]: {
    name: 'Autumn',
    emoji: '🍂',
    bg: 'bg-autumn-bg',
    accent: 'text-autumn-accent',
    particle: 'text-autumn-particle',
    gradient: 'from-amber-950 via-orange-950 to-amber-900',
  }
}

export function getCurrentSeason() {
  const month = new Date().getMonth() // 0-11
  
  if (month >= 2 && month <= 4) return SEASONS.SPRING   // Mar-May
  if (month >= 5 && month <= 7) return SEASONS.SUMMER   // Jun-Aug
  if (month >= 8 && month <= 10) return SEASONS.AUTUMN  // Sep-Nov
  return SEASONS.WINTER // Dec-Feb
}