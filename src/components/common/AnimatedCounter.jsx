import { useState, useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

export default function AnimatedCounter({ to, suffix = '', prefix = '', decimals = 0, className = '', color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 55, damping: 16 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (inView) motionVal.set(to)
  }, [inView, to, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-IN'))
    })
    return unsub
  }, [spring, decimals])

  return (
    <span ref={ref} className={className} style={color ? { color } : {}}>
      {prefix}
      <motion.span className="counter-value tabular-nums">{display}</motion.span>
      {suffix}
    </span>
  )
}
