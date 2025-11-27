import Box from '@mui/material/Box'

export default function VideoBackground() {
  const src = 'https://www.youtube.com/embed/kz83IvlMcak?autoplay=1&mute=1&controls=0&playsinline=1&loop=1&playlist=kz83IvlMcak&rel=0&modestbranding=1'
  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '33.33vh', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <Box component="iframe" src={src} allow="autoplay; encrypted-media" allowFullScreen sx={{
        border: 0,
        position: 'absolute',
        width: '100%',
        height: '300%',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'saturate(1.0) hue-rotate(10deg) brightness(0.45) blur(1.2px)'
      }} />
      <Box sx={{ position: 'absolute', inset: 0, background:
        `radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15), transparent 50%),
         radial-gradient(circle at 20% 20%, rgba(46,124,194,0.12), transparent 40%)`
      }} />
    </Box>
  )
}
