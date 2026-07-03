import { motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.25 } },
}

export default function PageWrapper({ children, title, description }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: '64px', minHeight: '100vh' }}
    >
      {children}
    </motion.div>
  )
}
