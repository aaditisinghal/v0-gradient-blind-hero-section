import Navbar from "@/components/Navbar"
import {
  Code2,
  Terminal,
  Database,
  Zap,
  Shield,
  BookOpen,
  GitBranch,
  Layers,
  Clock,
  CheckCircle2,
  ArrowRight,
  Copy,
} from "lucide-react"

export default function DocsPage() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />

      <div className="relative z-10 pt-32 pb-20 px-5 sm:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">MAPI Documentation</h1>
            <p className="text-xl text-white/70 max-w-3xl text-balance">
              Complete guide to integrating temporally-aware memory into your AI applications. From quick start to
              advanced patterns.
            </p>
          </div>

          {/* Quick Start */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Quick Start</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold">
                    1
                  </span>
                  Installation
                </h3>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50">bash</span>
                    <button className="text-white/50 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <code className="text-orange-300">pip install mapi-memory</code>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold">
                    2
                  </span>
                  Initialize Client
                </h3>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50">python</span>
                    <button className="text-white/50 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-orange-300 overflow-x-auto">
                    {`from mapi import MemoryClient

# Initialize with your API key
client = MemoryClient(
    api_key="your_api_key",
    user_id="user_123"
)`}
                  </pre>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-sm font-bold">
                    3
                  </span>
                  Store & Retrieve
                </h3>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50">python</span>
                    <button className="text-white/50 hover:text-white transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <pre className="text-orange-300 overflow-x-auto">
                    {`# Store a memory
client.store(
    content="User prefers morning meetings",
    memory_type="preference",
    importance=0.8
)

# Retrieve relevant memories
memories = client.retrieve(
    query="When should I schedule meetings?",
    limit=5
)`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Core Concepts */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Core Concepts</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Layers className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Memory Layers</h3>
                </div>
                <p className="text-white/70 mb-4">
                  MAPI uses four memory layers, each optimized for different access patterns and lifecycles.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Working:</strong> Real-time context (Redis)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Episodic:</strong> Recent events (Vector DB)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">Semantic:</strong> Learned knowledge (Graph DB)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-white">System:</strong> User preferences (Key-Value)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Temporal Awareness</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Every memory includes temporal metadata enabling time-aware queries and fact evolution tracking.
                </p>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-3 font-mono text-xs">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`{
  "fact": "Germany capital",
  "value": "Berlin",
  "valid_from": "1990-10-03",
  "supersedes": "Bonn"
}`}
                  </pre>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Hallucination Detection</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Multi-layer verification system catches errors through semantic similarity, cross-model validation,
                  and graph consistency checks.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Semantic similarity to sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Cross-model consensus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Knowledge graph consistency</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Memory Consolidation</h3>
                </div>
                <p className="text-white/70 mb-4">
                  Automatic transformation of episodic memories into semantic knowledge through background processes.
                </p>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Weekly consolidation runs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Pattern extraction from events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span>Ebbinghaus decay curve</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* API Reference */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Terminal className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">API Reference</h2>
            </div>

            <div className="space-y-6">
              {/* Store Method */}
              <div className="p-6 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">client.store()</h3>
                  <p className="text-white/60 text-sm">Store a new memory in the appropriate layer</p>
                </div>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`client.store(
    content: str,
    memory_type: str = "episodic",
    importance: float = 0.5,
    metadata: dict = None,
    temporal_context: dict = None
) -> MemoryID`}
                  </pre>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Parameters</h4>
                    <ul className="space-y-2 text-white/60 text-sm">
                      <li>
                        <code className="text-orange-400">content</code>: The memory content to store
                      </li>
                      <li>
                        <code className="text-orange-400">memory_type</code>: Layer type ("working", "episodic",
                        "semantic", "system")
                      </li>
                      <li>
                        <code className="text-orange-400">importance</code>: Importance score 0-1 (affects
                        consolidation)
                      </li>
                      <li>
                        <code className="text-orange-400">metadata</code>: Additional context and tags
                      </li>
                      <li>
                        <code className="text-orange-400">temporal_context</code>: Timestamp and validity period
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Retrieve Method */}
              <div className="p-6 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">client.retrieve()</h3>
                  <p className="text-white/60 text-sm">Retrieve relevant memories using semantic search</p>
                </div>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`client.retrieve(
    query: str,
    limit: int = 10,
    memory_types: list = None,
    temporal_filter: dict = None,
    min_importance: float = 0.0
) -> List[Memory]`}
                  </pre>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Parameters</h4>
                    <ul className="space-y-2 text-white/60 text-sm">
                      <li>
                        <code className="text-orange-400">query</code>: Natural language search query
                      </li>
                      <li>
                        <code className="text-orange-400">limit</code>: Maximum number of memories to return
                      </li>
                      <li>
                        <code className="text-orange-400">memory_types</code>: Filter by specific layers
                      </li>
                      <li>
                        <code className="text-orange-400">temporal_filter</code>: Time range constraints
                      </li>
                      <li>
                        <code className="text-orange-400">min_importance</code>: Minimum importance threshold
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Temporal Query Method */}
              <div className="p-6 rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent backdrop-blur-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">client.temporal_query()</h3>
                  <p className="text-white/60 text-sm">Query facts as they were at a specific point in time</p>
                </div>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm mb-4">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`client.temporal_query(
    query: str,
    as_of_date: datetime,
    include_evolution: bool = False
) -> List[TemporalMemory]`}
                  </pre>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Example</h4>
                    <div className="bg-black/40 border border-orange-500/20 rounded-lg p-3 font-mono text-xs">
                      <pre className="text-orange-300 overflow-x-auto">
                        {`# What was true in 1989?
memories = client.temporal_query(
    "What was Germany's capital?",
    as_of_date=datetime(1989, 11, 1),
    include_evolution=True
)
# Returns: "Bonn" with evolution to "Berlin" in 1990`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Usage */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Advanced Patterns</h2>
            </div>

            <div className="space-y-6">
              {/* Multi-Agent Memory Sharing */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Multi-Agent Memory Sharing</h3>
                <p className="text-white/70 mb-4">
                  Enable multiple agents to share and coordinate through a common memory layer.
                </p>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`# Agent 1 stores discovery
agent1_client = MemoryClient(api_key=key, agent_id="agent_1", shared_context="team_alpha")
agent1_client.store("Found critical bug in module X", memory_type="episodic", shared=True)

# Agent 2 retrieves shared memory
agent2_client = MemoryClient(api_key=key, agent_id="agent_2", shared_context="team_alpha")
memories = agent2_client.retrieve("known issues", shared_only=True)`}
                  </pre>
                </div>
              </div>

              {/* Confidence Tracking */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Confidence Tracking & Corrections</h3>
                <p className="text-white/70 mb-4">
                  Track confidence scores and learn from corrections to improve memory quality over time.
                </p>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`# Store with initial confidence
memory_id = client.store("User birthday is March 15", confidence=0.7)

# User corrects
client.correct(memory_id, "User birthday is March 25", correction_type="value_update")

# System automatically:
# - Lowers confidence in similar unverified facts
# - Increases importance of verified information
# - Creates guard rules to prevent similar errors`}
                  </pre>
                </div>
              </div>

              {/* Provenance Tracking */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Provenance & Auditability</h3>
                <p className="text-white/70 mb-4">
                  Full audit trail of memory creation, evolution, and retrieval for enterprise compliance.
                </p>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`# Get full provenance chain
provenance = client.get_provenance(memory_id)
print(provenance)
# {
#   "created_at": "2025-01-15T10:30:00Z",
#   "source": "user_input",
#   "modified_history": [
#     {"timestamp": "2025-01-20T14:20:00Z", "type": "correction", "by": "user"},
#     {"timestamp": "2025-01-25T09:15:00Z", "type": "consolidation", "by": "system"}
#   ],
#   "retrieval_count": 47,
#   "last_accessed": "2025-02-01T16:45:00Z"
# }`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Configuration</h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Environment Variables</h3>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`# Required
MAPI_API_KEY=your_api_key_here

# Optional - Custom endpoints
MAPI_BASE_URL=https://api.mapi.io/v1
MAPI_REGION=us-east-1

# Optional - Performance tuning
MAPI_CACHE_TTL=3600
MAPI_MAX_RETRIES=3
MAPI_TIMEOUT=30`}
                  </pre>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Custom Configuration</h3>
                <div className="bg-black/40 border border-orange-500/20 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-orange-300 overflow-x-auto">
                    {`client = MemoryClient(
    api_key="your_key",
    config={
        "consolidation_frequency": "daily",  # or "weekly", "monthly"
        "importance_threshold": 0.3,         # Min importance for consolidation
        "hallucination_sensitivity": 0.85,   # Detection threshold
        "temporal_decay_rate": 0.95,         # Ebbinghaus curve
        "max_working_memory": 50             # Items in working memory
    }
)`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-orange-400" />
              </div>
              <h2 className="text-3xl font-bold text-white">Best Practices</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-orange-500/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">✅ Do</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Use importance scores to guide consolidation (0.7+ for critical facts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Include temporal context for time-sensitive information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Tag memories with metadata for better retrieval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Implement user corrections to improve system learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Monitor hallucination detection rates in production</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-red-500/20 bg-white/5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-white mb-4">❌ Don't</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span>Store sensitive data without encryption in metadata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span>Ignore confidence scores when making critical decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span>Bypass hallucination detection in production systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span>Use default importance (0.5) for all memories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-red-400 text-xs">✕</span>
                    </div>
                    <span>Mix user contexts without proper isolation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Support */}
          <section>
            <div className="p-12 rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5 backdrop-blur-sm text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Join our Discord community, check out example projects on GitHub, or reach out to our team directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-base font-semibold text-white transition-all hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/20">
                  Join Discord
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-orange-500/30 bg-orange-500/10 px-6 py-3 text-base font-semibold text-orange-200 backdrop-blur transition-all hover:bg-orange-500/20 hover:border-orange-500/50">
                  View Examples
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
