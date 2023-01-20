import React, { useEffect, useRef } from 'react'

import { SafeAreaView, useWindowDimensions } from 'react-native'
import RNCanvas, { CanvasRenderingContext2D } from 'react-native-canvas'

interface CanvasProps {
  children?: React.ReactNode
}

const Canvas = ({ children }: CanvasProps) => {
  const canvasRef = useRef<RNCanvas>(null)
  const contextRef = useRef<CanvasRenderingContext2D | null>(null)

  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      ctx.scale(2, 2)
      ctx.lineCap = 'round'
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 5
      canvasRef.current.width = width
      canvasRef.current.height = height

      contextRef.current = ctx
    }
  }, [canvasRef, height, width])

  return (
    <SafeAreaView
      style={{ flex: 1 }}
      onTouchStart={e => {
        const layout = e.nativeEvent

        if (contextRef.current) {
          contextRef.current.beginPath()
          contextRef.current.moveTo(layout.locationX, layout.locationY)
        }
      }}
      onTouchMove={e => {
        const layout = e.nativeEvent

        if (contextRef.current) {
          contextRef.current.lineTo(layout.locationX, layout.locationY)
          contextRef.current.stroke()
        }
      }}
      onTouchEnd={() => {
        if (contextRef.current) {
          contextRef.current.closePath()
        }
      }}
    >
      {children}
      <RNCanvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
        }}
      />
    </SafeAreaView>
  )
}

export default Canvas
