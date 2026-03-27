"use client"

import { Suspense, lazy, useState, useEffect, Component, type ReactNode } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

// Error boundary to catch WebGL errors
class SplineErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Fallback gradient background when WebGL is unavailable
function FallbackBackground() {
  return (
    <>
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px]"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[128px]"
          style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[128px]"
          style={{ animation: 'pulse 4s ease-in-out infinite', animationDelay: '2s' }}
        />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  )
}

const SplineBackground = () => {
  const [webglSupported, setWebglSupported] = useState(true)

  // Check WebGL support on mount
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) {
        setWebglSupported(false)
      }
    } catch {
      setWebglSupported(false)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Spline 3D Scene or Fallback */}
      {webglSupported ? (
        <SplineErrorBoundary fallback={<FallbackBackground />}>
          <Suspense fallback={null}>
            <Spline
              style={{
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
              }}
              scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
            />
          </Suspense>
        </SplineErrorBoundary>
      ) : (
        <FallbackBackground />
      )}

      {/* Color Tint Overlay — shifts the purple scene toward blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'rgba(10, 20, 60, 0.35)',
          mixBlendMode: 'color',
        }}
      />

      {/* Blue hue reinforcement layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(59, 130, 246, 0.18) 0%, transparent 65%)',
        }}
      />

      {/* CENTER DARK OVERLAY — makes text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10, 10, 15, 0.65) 0%, rgba(10, 10, 15, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* Edge fade — vignette to blend into page background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(10, 10, 15, 0.75) 0%, transparent 25%, transparent 75%, rgba(10, 10, 15, 0.75) 100%),
            linear-gradient(to bottom, transparent 40%, rgba(10, 10, 15, 0.95) 100%)
          `,
        }}
      />
    </div>
  )
}

export default SplineBackground
