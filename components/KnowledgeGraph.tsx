"use client"

import { useEffect, useRef } from "react"

interface Node {
  id: string
  label: string
  type: string
}

interface Edge {
  from: string
  to: string
  label: string
}

interface GraphData {
  nodes: Node[]
  edges: Edge[]
}

export default function KnowledgeGraph({ data }: { data: GraphData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !data) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2
    canvas.height = 600 * 2
    ctx.scale(2, 2)

    const width = canvas.width / 2
    const height = canvas.height / 2

    // Clear canvas
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, width, height)

    // Calculate node positions in a circle
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) * 0.35

    const nodePositions = data.nodes.map((node, i) => {
      const angle = (i / data.nodes.length) * 2 * Math.PI - Math.PI / 2
      return {
        ...node,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      }
    })

    // Draw edges
    data.edges.forEach((edge) => {
      const fromNode = nodePositions.find((n) => n.id === edge.from)
      const toNode = nodePositions.find((n) => n.id === edge.to)

      if (fromNode && toNode) {
        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)
        ctx.lineTo(toNode.x, toNode.y)
        ctx.strokeStyle = "rgba(249, 115, 22, 0.3)"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw edge label
        const midX = (fromNode.x + toNode.x) / 2
        const midY = (fromNode.y + toNode.y) / 2
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(edge.label, midX, midY)
      }
    })

    // Draw nodes
    nodePositions.forEach((node) => {
      // Draw node circle
      ctx.beginPath()
      ctx.arc(node.x, node.y, 30, 0, 2 * Math.PI)
      ctx.fillStyle = node.type === "entity" ? "rgba(249, 115, 22, 0.3)" : "rgba(249, 115, 22, 0.2)"
      ctx.fill()
      ctx.strokeStyle = "rgba(249, 115, 22, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw node label
      ctx.fillStyle = "white"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(node.label, node.x, node.y + 50)
    })
  }, [data])

  return (
    <div className="relative w-full bg-black/40 border border-orange-500/20 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-[600px]" />
    </div>
  )
}
