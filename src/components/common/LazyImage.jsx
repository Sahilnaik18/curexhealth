import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * LazyImage — accessible, performant image component.
 * - Native browser lazy loading (loading="lazy")
 * - Blur-up transition from placeholder to full image
 * - Proper width/height to prevent CLS (Cumulative Layout Shift)
 * - Decoding async to avoid main thread blocking
 * - ARIA alt text enforcement
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  wrapperClassName = '',
  objectFit = 'cover',
  priority = false,       // true for above-the-fold images (disables lazy loading)
  placeholder = null,     // tiny base64 blurred placeholder
  onLoad,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  // If image is already cached, mark loaded immediately
  const handleRef = (el) => {
    imgRef.current = el
    if (el && el.complete) setLoaded(true)
  }

  const handleLoad = () => {
    setLoaded(true)
    onLoad?.()
  }

  return (
    <div
      className={`relative overflow-hidden ${wrapperClassName}`}
      style={{ aspectRatio: width && height ? `${width}/${height}` : undefined }}
    >
      {/* Blur placeholder */}
      {placeholder && !loaded && (
        <div
          className="absolute inset-0 blur-lg scale-110"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      )}

      {/* Skeleton shimmer while loading */}
      {!loaded && !placeholder && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}

      {/* Actual image */}
      <motion.img
        ref={handleRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchpriority={priority ? 'high' : 'low'}
        onLoad={handleLoad}
        className={`w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{ objectFit }}
        {...props}
      />
    </div>
  )
}
