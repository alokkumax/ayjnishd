import React from 'react'
import "@google/model-viewer";

export default function ar() {
  return (
    <div>
      <model-viewer src="/earpiece.glb" camera-controls auto-rotate ar ios-src="/earpiece.usdz"></model-viewer>
    </div>
  )
}
