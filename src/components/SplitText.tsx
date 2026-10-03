import { motion } from 'framer-motion'

type SplitTextProps = {
  text: string
  className?: string
  delay?: number
  by?: 'words' | 'chars'
}

export function SplitText({ text, className, delay = 0, by = 'words' }: SplitTextProps) {
  const parts = by === 'chars' ? text.split('') : text.split(' ')

  const classes = ['split', by === 'chars' ? 'split--chars' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes}>
      {parts.map((part, index) => (
        <span className="split-word" key={`${part}-${index}`}>
          <motion.span
            className="split-word-inner"
            initial={{ y: '115%', rotate: 8 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{
              delay: delay + index * (by === 'chars' ? 0.045 : 0.07),
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {part === ' ' ? '\u00A0' : part}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
