import { motion, useMotionValue, useTransform } from 'framer-motion'

type Props = { children: React.ReactNode }

export default function Tilt({ children }: Props) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [6, -6])
  const rotateY = useTransform(x, [-50, 50], [-6, 6])

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={(e) => {
        const rect = (e.target as HTMLElement).getBoundingClientRect()
        x.set(e.clientX - (rect.left + rect.width / 2))
        y.set(e.clientY - (rect.top + rect.height / 2))
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

