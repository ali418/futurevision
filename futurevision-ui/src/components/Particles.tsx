import Box from '@mui/material/Box'
import { keyframes } from '@emotion/react'

const float = keyframes`
  0% { transform: translateY(0) translateX(0); opacity: .7 }
  50% { transform: translateY(-20px) translateX(10px); opacity: 1 }
  100% { transform: translateY(-40px) translateX(-5px); opacity: .6 }
`

export default function Particles({ count = 24 }: { count?: number }) {
  const rand = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  const items = Array.from({ length: count }).map((_, i) => {
    const size = Math.floor(rand(i * 1.11) * 4) + 3
    const left = rand(i * 2.31) * 100
    const top = rand(i * 3.57) * 100
    const delay = rand(i * 4.79) * 6
    const duration = 6 + rand(i * 5.13) * 6
    const color = rand(i * 6.07) > 0.5 ? 'rgba(46,124,194,0.9)' : 'rgba(212,175,55,0.9)'
    return (
      <Box key={i} sx={{
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 ${size * 4}px ${color}`,
        animation: `${float} ${duration}s ease-in-out ${delay}s infinite`,
        pointerEvents: 'none'
      }} />
    )
  })

  return (
    <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>{items}</Box>
  )
}

