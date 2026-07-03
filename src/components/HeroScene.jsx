import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function WireframeMesh({ mouse }) {
  const meshRef = useRef()
  const innerRef = useRef()
  const groupRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.05
      meshRef.current.rotation.y = t * 0.08
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.04
      innerRef.current.rotation.z = t * 0.03
    }
    if (groupRef.current && mouse) {
      groupRef.current.rotation.x += (mouse.current.y * 0.15 - groupRef.current.rotation.x) * 0.03
      groupRef.current.rotation.y += (mouse.current.x * 0.15 - groupRef.current.rotation.y) * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        {/* Very light purple on white bg */}
        <meshBasicMaterial color="#6D28D9" wireframe transparent opacity={0.08} />
      </mesh>
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

function ParticleField() {
  const ref = useRef()
  const positions = useMemo(() => {
    const count = 400
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#6D28D9" transparent opacity={0.15} sizeAttenuation />
    </points>
  )
}

export default function HeroScene({ mouse }) {
  return (
    <Canvas
      dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <WireframeMesh mouse={mouse} />
      <ParticleField />
    </Canvas>
  )
}
