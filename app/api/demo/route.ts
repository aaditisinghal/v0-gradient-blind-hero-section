import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "You are MAPI, a memory API system. Provide concise, accurate answers. After your answer, identify key entities and relationships that should be stored in a knowledge graph.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const response = completion.choices[0]?.message?.content || "No response generated"

    // Generate knowledge graph data from the response
    const graphData = generateKnowledgeGraph(prompt, response)

    return NextResponse.json({
      response,
      graphData,
    })
  } catch (error) {
    console.error("[v0] Error in demo API:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}

function generateKnowledgeGraph(prompt: string, response: string) {
  // Extract entities from prompt and response
  const entities = extractEntities(prompt + " " + response)

  // Create nodes
  const nodes = entities.map((entity, index) => ({
    id: `node-${index}`,
    label: entity,
    type: index === 0 ? "query" : "entity",
  }))

  // Create edges connecting the query to entities
  const edges = nodes.slice(1).map((node) => ({
    from: "node-0",
    to: node.id,
    label: "relates to",
  }))

  // Add some inter-entity relationships if there are enough nodes
  if (nodes.length >= 3) {
    edges.push({
      from: "node-1",
      to: "node-2",
      label: "connected",
    })
  }

  return { nodes, edges }
}

function extractEntities(text: string): string[] {
  // Simple entity extraction - extract capitalized words and important nouns
  const words = text.split(/\s+/)
  const entities = new Set<string>()

  // Add the main query concept
  const queryWords = text.split(" ").slice(0, 3).join(" ")
  entities.add(queryWords)

  // Extract capitalized words (potential entities)
  words.forEach((word) => {
    const cleaned = word.replace(/[^\w\s]/g, "")
    if (cleaned.length > 3 && /^[A-Z]/.test(cleaned)) {
      entities.add(cleaned)
    }
  })

  // Limit to 6 entities for visualization
  return Array.from(entities).slice(0, 6)
}
