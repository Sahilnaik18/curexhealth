import { Helmet } from 'react-helmet-async'
import { SITE } from './seoConfig'

/**
 * Comprehensive SEO head component.
 * Handles: title, description, keywords, canonical, OG, Twitter card, and optional schemas.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  schemas = [],       // array of JSON-LD schema objects
}) {
  const fullTitle    = title || `${SITE.name} – ${SITE.tagline}`
  const canonicalUrl = `${SITE.url}${canonical || '/'}`
  const imageUrl     = ogImage || SITE.ogImage

  return (
    <Helmet>
      {/* ── Primary ──────────────────────────────────────────── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description"    content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical"       href={canonicalUrl} />
      <meta name="robots"         content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />

      {/* ── Open Graph ───────────────────────────────────────── */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type"        content={ogType} />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:image"       content={imageUrl} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={`${SITE.name} – ${SITE.tagline}`} />
      <meta property="og:site_name"    content={SITE.name} />
      <meta property="og:locale"       content="en_IN" />

      {/* ── Twitter Card ─────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={SITE.twitterHandle} />
      <meta name="twitter:creator"     content={SITE.twitterHandle} />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={imageUrl} />
      <meta name="twitter:image:alt"   content={`${SITE.name} – ${SITE.tagline}`} />

      {/* ── Geo & Mobile ─────────────────────────────────────── */}
      <meta name="geo.region"         content="IN-MH" />
      <meta name="geo.placename"      content="Mumbai, Maharashtra, India" />
      <meta name="geo.position"       content="19.0760;72.8777" />
      <meta name="ICBM"               content="19.0760, 72.8777" />
      <meta name="format-detection"   content="telephone=yes" />
      <meta name="theme-color"        content="#0F6CBD" />
      <meta name="mobile-web-app-capable"       content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* ── JSON-LD Schemas ──────────────────────────────────── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
