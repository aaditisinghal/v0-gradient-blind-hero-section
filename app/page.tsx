import GradientBlinds from "@/components/GradientBlinds"
import Navbar from "@/components/Navbar"
import {
  Brain,
  Zap,
  Shield,
  Database,
  GitBranch,
  TrendingUp,
  Clock,
  Target,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Code2,
} from "lucide-react"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar />

      <div className="fixed inset-0 w-full h-full flex items-center justify-center">
        <GradientBlinds
          gradientColors={["#1a0f0a", "#7c2d12", "#ea580c", "#f97316"]}
          angle={15}
          noise={0.25}
          blindCount={13}
          blindMinWidth={50}
          spotlightRadius={0.38}
          spotlightSoftness={1.6}
          spotlightOpacity={0.42}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="overlay"
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center min-h-screen w-full px-5 sm:px-20">
            <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl text-balance drop-shadow-2xl">
                MAPI
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Memory API
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg">
                The first production-grade, temporally-aware memory system for autonomous AI agents. Eliminate
                hallucinations, enable perfect recall, and make AI enterprise-ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent shadow-2xl shadow-orange-500/20">
                  Get Started
                </button>
                <a href="/docs">
                  <button className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent shadow-xl">
                    View Documentation
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="relative py-24 px-5 sm:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The AI Memory Crisis</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                LLMs lose 82% of information after 20k tokens. This catastrophic memory failure causes hallucinations,
                wasted compute, and prevents AI from being production-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Token Limit Wall</h3>
                <p className="text-white/60">
                  Even with 1M token context windows, AI can't scale to enterprise knowledge bases. Context gets lost,
                  critical details vanish.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Semantic Forgetting</h3>
                <p className="text-white/60">
                  Critical information gets compressed away during long interactions. Models forget what they learned
                  minutes ago.
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Hallucination Spiral</h3>
                <p className="text-white/60">
                  Without persistent, verifiable memory, models generate confident but completely false information.
                  Zero enterprise trust.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
              <p className="text-center text-white/80 text-lg leading-relaxed">
                Companies like <span className="text-orange-400 font-semibold">Supermemory</span> (backed by Google's
                Jeff Dean) raised $3M solving exactly this.
                <span className="text-white font-semibold">
                  {" "}
                  The timing is perfect. The problem is trillion-dollar scale.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Memory Trinity Architecture</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                MAPI implements a four-layer memory system inspired by neuroscience research and production AI
                requirements. Each layer has a distinct purpose, storage mechanism, and lifecycle.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Layer 1: Working Memory */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Working Memory</h3>
                    <p className="text-orange-400 text-sm">Real-Time Context</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  Ultra-fast in-memory storage for current conversation state. Last N turns cached in Redis with
                  sub-100ms retrieval.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>TTL: Hours to days (auto-cleanup)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Storage: Redis/Cloudflare KV</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Use case: Session state, active tasks</span>
                  </li>
                </ul>
              </div>

              {/* Layer 2: Episodic Memory */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Episodic Memory</h3>
                    <p className="text-orange-400 text-sm">Event Storage</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  High-fidelity storage of specific interactions with temporal metadata. Semantic search with recency
                  bias and importance weighting.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>TTL: 1-4 weeks with Ebbinghaus decay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Storage: Pinecone/Weaviate vector DB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Use case: "What did I say about X last week?"</span>
                  </li>
                </ul>
              </div>

              {/* Layer 3: Semantic Memory */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <GitBranch className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Semantic Memory</h3>
                    <p className="text-orange-400 text-sm">Knowledge Consolidation</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  Consolidated patterns and facts extracted from episodic memory. Temporal knowledge graph with entity
                  relationships and version control.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>TTL: Permanent with version tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Storage: Neo4j + Graphiti framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Use case: "What's my learned user model?"</span>
                  </li>
                </ul>
              </div>

              {/* Layer 4: System Preferences */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">System Preferences</h3>
                    <p className="text-orange-400 text-sm">Semi-Permanent Config</p>
                  </div>
                </div>
                <p className="text-white/70 mb-4">
                  User settings, behavioral patterns, role definitions. Rarely changes but critical for personalization.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>TTL: Weeks to months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Storage: Key-value (Redis) or system prompt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Use case: Tone, preferences, constraints</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Breakthrough Innovations</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                MAPI goes beyond basic RAG with research-backed innovations that make AI memory production-ready.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Temporal Reasoning */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Temporal Reasoning</h3>
                </div>
                <p className="text-white/70 mb-4">
                  The key differentiator. MAPI tracks{" "}
                  <span className="text-orange-400 font-semibold">when facts were learned</span> and{" "}
                  <span className="text-orange-400 font-semibold">how they evolved</span>.
                </p>
                <div className="p-4 rounded-lg bg-black/40 border border-orange-500/20 mb-4">
                  <p className="text-white/90 text-sm font-mono mb-2">Query: "What was Germany's capital in 1989?"</p>
                  <p className="text-orange-400 text-sm">→ MAPI: "Bonn (until 1990, then Berlin)"</p>
                  <p className="text-red-400 text-sm">→ Standard RAG: "Berlin" ❌</p>
                </div>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Temporal knowledge graph with versioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Track fact evolution and supersession</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Time-aware queries: "What did I know then?"</span>
                  </li>
                </ul>
              </div>

              {/* Hallucination Prevention */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Self-Healing Memory</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Multi-layer hallucination detection catches errors before they reach users. Autonomous correction with
                  reasoning transparency.
                </p>
                <ul className="space-y-2 text-white/60 text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Layer 1:</strong> Semantic similarity to sources
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Layer 2:</strong> Cross-model validation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Layer 3:</strong> Knowledge graph consistency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>
                      <strong className="text-white">Layer 4:</strong> Confidence calibration
                    </span>
                  </li>
                </ul>
                <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/30">
                  <p className="text-orange-200 text-xs">
                    Contradictions detected automatically with provenance tracking and version control.
                  </p>
                </div>
              </div>

              {/* Active Consolidation */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Active Consolidation</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Inspired by neuroscience research on memory consolidation. Episodic memories gradually transform into
                  semantic knowledge through competitive processes.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Weekly background consolidation runs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Extract patterns from high-frequency events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Preserve surprising exceptions explicitly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Weak memories fade; strong ones consolidate</span>
                  </li>
                </ul>
              </div>

              {/* Continuous Learning */}
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Continuous Learning</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Memory quality improves with use. Learn from corrections, track error patterns, auto-update confidence
                  scores.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>User correction → confidence adjustment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Error pattern detection → guard rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Usage tracking → hot cache promotion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>Drift detection → auto-retraining</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Production-Grade Stack</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                Built with cutting-edge technologies for speed, reliability, and scalability. Every component is chosen
                for production readiness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Vector Database</h4>
                <p className="text-white/60 text-sm mb-2">Pinecone / Weaviate</p>
                <p className="text-white/50 text-xs">Semantic search with millisecond latency</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Knowledge Graph</h4>
                <p className="text-white/60 text-sm mb-2">Neo4j + Graphiti</p>
                <p className="text-white/50 text-xs">Temporal reasoning and relationships</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Cache Layer</h4>
                <p className="text-white/60 text-sm mb-2">Redis / Cloudflare KV</p>
                <p className="text-white/50 text-xs">Sub-100ms hot path retrieval</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Exact Storage</h4>
                <p className="text-white/60 text-sm mb-2">PostgreSQL + pgvector</p>
                <p className="text-white/50 text-xs">ACID compliance for critical data</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Embeddings</h4>
                <p className="text-white/60 text-sm mb-2">text-embedding-004</p>
                <p className="text-white/50 text-xs">Deterministic, reproducible vectors</p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Monitoring</h4>
                <p className="text-white/60 text-sm mb-2">Custom Dashboards</p>
                <p className="text-white/50 text-xs">Track hallucinations and drift</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Enterprise-Ready Applications</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                MAPI enables the next generation of AI applications that require reliability, auditability, and perfect
                recall.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Brain className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Autonomous Agents</h4>
                <p className="text-white/60 text-sm">
                  Multi-agent systems with shared, verifiable memory. Enable coordination across agent workflows with
                  zero hallucinations.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Database className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Knowledge</h4>
                <p className="text-white/60 text-sm">
                  Scale to millions of documents with perfect recall. Query across time: "What did we know in Q3 2024?"
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Shield className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Compliance & Audit</h4>
                <p className="text-white/60 text-sm">
                  Full provenance tracking, version control, and auditable memory trails. Meet enterprise security
                  standards.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <GitBranch className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Research Assistants</h4>
                <p className="text-white/60 text-sm">
                  Track entire research journeys across papers, experiments, and insights. Generate temporal summaries
                  on demand.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Customer Support</h4>
                <p className="text-white/60 text-sm">
                  Maintain perfect context across sessions and support team handoffs. Never ask customers to repeat
                  themselves.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/30 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <TrendingUp className="w-5 h-5 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Personal AI</h4>
                <p className="text-white/60 text-sm">
                  AI that truly knows you. Learns from every interaction, improves continuously, and never forgets what
                  matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why MAPI Wins</h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto text-balance">
                Beating Supermemory and basic RAG systems with production-grade architecture and research-backed
                innovations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">Beyond Basic RAG</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Temporal reasoning:</strong> Know when facts were true, track
                      evolution
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Multi-layer verification:</strong> Never trust one source
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Active consolidation:</strong> Episodic → semantic transformation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Conflict detection:</strong> Find contradictions automatically
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">Production Excellence</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Monitoring:</strong> Track hallucination rates, drift, retrieval
                      quality
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Auditability:</strong> Full provenance and version control
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Continuous learning:</strong> Improve from corrections
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Enterprise-ready:</strong> ACID compliance, security, scale
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 px-5 sm:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Ready to Solve the $15B AI Memory Problem?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto text-balance">
                See MAPI in action at AI ATL. The first production-grade memory system for autonomous agents. Zero
                hallucinations. Perfect recall. Enterprise-ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-orange-600 hover:to-orange-700 shadow-2xl shadow-orange-500/20">
                  Schedule Demo
                </button>
                <a href="/docs">
                  <button className="inline-flex items-center justify-center rounded-full border-2 border-orange-500/30 bg-orange-500/10 px-8 py-4 text-lg font-semibold text-orange-200 backdrop-blur transition-all hover:bg-orange-500/20 hover:border-orange-500/50">
                    Read Documentation
                  </button>
                </a>
              </div>
              <p className="text-white/50 text-sm mt-6">
                Built for AI ATL 2025 • Google, Microsoft, Drive Capital Tracks
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-5 sm:px-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white/60 text-sm">© 2025 MAPI. Built for AI ATL Hackathon.</div>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                GitHub
              </a>
              <a href="/docs" className="text-white/60 hover:text-white transition-colors text-sm">
                Documentation
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
