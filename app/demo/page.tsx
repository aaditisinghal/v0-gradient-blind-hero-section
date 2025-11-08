"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import { Send, Loader2, Brain, GitBranch } from "lucide-react"
import KnowledgeGraph from "@/components/KnowledgeGraph"

export default function DemoPage() {
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")
  const [graphData, setGraphData] = useState<any>(null)

  const handleSubmit = async () => {
    if (!prompt.trim()) return

    setIsLoading(true)
    setResponse("")
    setGraphData(null)

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      const data = await res.json()
      setResponse(data.response)
      setGraphData(data.graphData)
    } catch (error) {
      setResponse("Error: Failed to process your request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />

      <div className="relative z-10 pt-32 pb-20 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
              Try MAPI <span className="text-orange-400">Live</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
              Ask any question and watch MAPI build a temporal knowledge graph in real-time. See how memory
              consolidation and hallucination detection work.
            </p>
          </div>

          {/* Input Section */}
          <div className="mb-8">
            <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Your Question</h2>
              </div>

              <div className="space-y-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask anything... e.g., 'What is the capital of Germany?' or 'Tell me about quantum computing'"
                  className="w-full h-32 px-4 py-3 bg-black/40 border border-orange-500/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/40 resize-none"
                  disabled={isLoading}
                />

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !prompt.trim()}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Ask MAPI
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Response Section */}
          {(response || isLoading) && (
            <div className="mb-8">
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">AI Response</h2>
                </div>

                {isLoading ? (
                  <div className="flex items-center gap-3 text-white/60">
                    <Loader2 className="w-5 h-5 animate-spin text-orange-400" />
                    <span>MAPI is thinking...</span>
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap">{response}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Knowledge Graph Section */}
          {graphData && (
            <div>
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <GitBranch className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">Knowledge Graph</h2>
                    <p className="text-white/60 text-sm">Real-time visualization of semantic memory consolidation</p>
                  </div>
                </div>

                <KnowledgeGraph data={graphData} />
              </div>
            </div>
          )}

          {/* Example Prompts */}
          {!response && !isLoading && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Try these examples:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "What is the capital of Germany?",
                  "Explain quantum entanglement",
                  "Tell me about the solar system",
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() => setPrompt(example)}
                    className="p-4 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-orange-500/30 hover:bg-orange-500/5 transition-all text-left"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
