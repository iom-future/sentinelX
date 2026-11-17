// Complete structured content and excessive tags for SentinelX (without arbitrary card numberings)

export const ANNOUNCEMENT = {
  version: "v2.4.8-RELEASE",
  tag: "SYS_UPDATE",
  latency: "< 0.8ms",
  title: "SentinelX eBPF Autonomous Pipeline Engine v2.4 Live",
  cta: "View Changelog",
};

export const HERO_DATA = {
  eyebrow: "NEXT-GENERATION SECURITY INTELLIGENCE",
  headline: "Your Infrastructure. Under Watch.",
  subheadline:
    "Detect suspicious activity, investigate security threats and understand your attack surface with AI-powered security intelligence built for modern engineering teams.",
  supportingLine:
    "Built for developers. Designed for security. Ready for modern infrastructure.",
  metrics: [
    { label: "TELEMETRY INGESTION", value: "480k/sec", tag: "SYS_L7", icon: "Activity", trend: "+12.4%" },
    { label: "MEAN DETECTION TIME", value: "< 140ms", tag: "AI_INFERENCE", icon: "Clock", trend: "-68%" },
    { label: "FALSE POSITIVE REDUCTION", value: "94.2%", tag: "ML_FILTER", icon: "ShieldCheck", trend: "OPTIMAL" },
    { label: "CONNECTED SERVICES", value: "1,840+", tag: "MESH_ACTIVE", icon: "Radio", trend: "ARMED" },
  ],
  liveEvents: [
    {
      id: "EVT-8921",
      event: "Unusual login activity",
      origin: "auth-service-us-east",
      protocol: "OIDC / OAuth2",
      status: "Under review",
      statusType: "warning",
      timestamp: "Just now",
      ip: "198.51.100.44",
      cvss: "6.8",
      layer: "L7_AUTH",
      tags: ["AUTH_ANOMALY", "GEO_BURST", "RISK: MED", "PORT: 443"],
    },
    {
      id: "EVT-8920",
      event: "API request anomaly",
      origin: "api-gateway-edge-04",
      protocol: "HTTP/2 REST",
      status: "Investigating",
      statusType: "critical",
      timestamp: "12s ago",
      ip: "203.0.113.19",
      cvss: "8.9",
      layer: "L7_API",
      tags: ["BURST_BURNOUT", "JWT_TAMPER", "RISK: HIGH", "SIG: WAF_BYPASS"],
    },
    {
      id: "EVT-8919",
      event: "Suspicious access pattern",
      origin: "db-cluster-aurora-02",
      protocol: "PostgreSQL / TLS",
      status: "Flagged",
      statusType: "warning",
      timestamp: "45s ago",
      ip: "10.0.14.88",
      cvss: "7.2",
      layer: "L4_DATA",
      tags: ["PRIV_ESC", "SLOW_SCAN", "INTERNAL_VPC", "ACTOR: SERVICE_ROLE"],
    },
    {
      id: "EVT-8918",
      event: "Configuration exposure",
      origin: "s3-backup-artifacts-prod",
      protocol: "AWS_IAM",
      status: "Needs attention",
      statusType: "amber",
      timestamp: "2m ago",
      ip: "172.16.0.4",
      cvss: "5.4",
      layer: "CLOUD_IAM",
      tags: ["ACL_DRIFT", "POLICY_REWRITE", "RISK: LOW", "AUTO_REMED"],
    },
  ],
};

export const PROBLEM_CARDS = [
  {
    id: "PROB-NOISE",
    title: "Too Much Security Noise",
    icon: "BellOff",
    description:
      "Security systems generate large volumes of alerts. Identifying the events that genuinely require attention can become difficult.",
    metricLabel: "ALERT NOISE FATIGUE",
    metricValue: "94%",
    badge: "SIGNAL_DEFICIT",
    tags: [
      "TAG: NOISE_FLOOD",
      "SYS: ALERT_FATIGUE",
      "METRIC: 1:450 RATIO",
      "SEV: HIGH",
      "LAYER: AGGREGATION",
      "STATUS: VULNERABLE",
      "DRIFT: +38%",
    ],
  },
  {
    id: "PROB-SILOS",
    title: "Fragmented Visibility",
    icon: "Layers",
    description:
      "Application logs, authentication events, infrastructure activity and security tools often operate independently.",
    metricLabel: "UNMAPPED ATTACK EDGES",
    metricValue: "8.4 avg",
    badge: "SILO_MULTIPLICITY",
    tags: [
      "TAG: DATA_ISLANDS",
      "SYS: LOG_DISPERSION",
      "TOOL_COUNT: 11+",
      "SEV: SEVERE",
      "LAYER: OBSERVABILITY",
      "STATUS: BLIND_SPOT",
      "CONTEXT_LOSS: 72%",
    ],
  },
  {
    id: "PROB-SLOW",
    title: "Slow Investigations",
    icon: "Clock",
    description:
      "Understanding a security incident can require manually connecting information from multiple sources.",
    metricLabel: "MEAN TIME TO CORRELATE",
    metricValue: "4.8 hrs",
    badge: "MANUAL_CORRELATION",
    tags: [
      "TAG: QUERY_LATENCY",
      "SYS: MANUAL_TIMELINE",
      "PIVOTS_REQ: 14+",
      "SEV: CRITICAL",
      "LAYER: FORENSICS",
      "STATUS: INHIBITED",
      "EFFICIENCY: -64%",
    ],
  },
  {
    id: "PROB-REACTIVE",
    title: "Reactive Security Workflows",
    icon: "Flame",
    description:
      "Organizations may discover vulnerabilities or suspicious behaviour only after significant damage has occurred.",
    metricLabel: "POST-BREACH REVELATION",
    metricValue: "182 days",
    badge: "DELAYED_AWARENESS",
    tags: [
      "TAG: POST_MORTEM_ONLY",
      "SYS: ZERO_ANTICIPATION",
      "DWELL_TIME: 180D+",
      "SEV: CRITICAL",
      "LAYER: STRATEGY",
      "STATUS: HAZARDOUS",
      "EXPOSURE: PEAK",
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    phase: "CONNECT",
    id: "FLOW-CONNECT",
    title: "Connect",
    icon: "Plug",
    description:
      "Integrate applications, APIs, authentication systems, cloud infrastructure and relevant security data sources.",
    protocols: ["eBPF Kernel", "Kubernetes DaemonSet", "AWS CloudTrail", "Fastly/Cloudflare Edge"],
    tags: [
      "INPUT: MULTI_SOURCE",
      "PORT: TLS/443",
      "eBPF: ARMED",
      "RATE: 10Gbps",
      "SYS: INGESTION",
      "ZERO_OVERHEAD",
    ],
  },
  {
    phase: "OBSERVE",
    id: "FLOW-OBSERVE",
    title: "Observe",
    icon: "Eye",
    description:
      "Collect and organize security events, system activity and infrastructure signals.",
    protocols: ["Zero-Copy RingBuffer", "Kafka EventStream", "OTel Semantic Conv.", "gRPC Stream"],
    tags: [
      "BUFFER: LOCK_FREE",
      "EPS: 48,000/s",
      "RETENTION: HOT_TIER",
      "PIPELINE: STREAMING",
      "PARSER: SIMD",
      "HEALTH: 100%",
    ],
  },
  {
    phase: "DETECT",
    id: "FLOW-DETECT",
    title: "Detect",
    icon: "Search",
    description:
      "Use analytics and AI-assisted analysis to identify unusual behaviour, suspicious patterns and potential vulnerabilities.",
    protocols: ["Vector Embeddings", "Cosine Anomaly Engine", "Bayesian Auth Profiler", "Rule Matrix"],
    tags: [
      "MODEL: NEURAL_SURFACE",
      "ACCURACY: 99.7%",
      "LATENCY: <12ms",
      "CONFIDENCE: HIGH",
      "FP_SUPPRESS: ON",
      "CLASSIFIER: v2.4",
    ],
  },
  {
    phase: "INVESTIGATE",
    id: "FLOW-INVESTIGATE",
    title: "Investigate",
    icon: "GitPullRequest",
    description:
      "Bring related events together, understand their context and help security teams determine what requires action.",
    protocols: ["Directed DAG Graph", "Blast Radius Evaluator", "Forensic Timeline", "Automated Webhook"],
    tags: [
      "GRAPH: UNIFIED_DAG",
      "CORRELATION: AUTO",
      "DISPATCH: WEBHOOK",
      "ROLE: SEC_ENGINEER",
      "AUDIT: TAMPER_PROOF",
      "RESOLVED: FAST",
    ],
  },
];

export const DEMO_TABS = [
  {
    id: "overview",
    name: "Security Overview",
    label: "VIEW // OVERVIEW",
    summary: "Centralized view of connected systems, monitored services and security activity.",
    tags: ["MODE: REALTIME", "SCOPES: 14_VPCs", "NODE_STATUS: ALL_GREEN", "REFRESH: 1s"],
  },
  {
    id: "detection",
    name: "Threat Detection",
    label: "VIEW // DETECTION_STREAM",
    summary: "A stream of suspicious events with severity, source, timestamp and detection context.",
    tags: ["INSPECTION: DEEP_PACKET", "SURFACE: API+AUTH", "QUEUE: 4_PENDING", "PRIORITY: P0"],
  },
  {
    id: "investigation",
    name: "Investigation Workspace",
    label: "VIEW // FORENSIC_GRAPH",
    summary: "A visual timeline connecting related events and showing how an incident developed.",
    tags: ["GRAPH: MULTI_HOP", "INCIDENT_ID: INC-7049", "ACTOR: SUSPECT_IP", "CHAIN: 5_NODES"],
  },
  {
    id: "infrastructure",
    name: "Infrastructure Health",
    label: "VIEW // ASSET_HEALTH",
    summary: "An overview of monitored applications, exposed services and security configuration issues.",
    tags: ["CLUSTERS: K8S_EKS", "EXPOSURES: 0_CRITICAL", "COMPLIANCE: 98.4%", "IAM_AUDIT: OK"],
  },
];

export const CORE_CAPABILITIES = [
  {
    id: "CAP-THREAT-AI",
    title: "AI-Assisted Threat Detection",
    icon: "BrainCircuit",
    tagline: "Identify unusual activity across connected systems.",
    description:
      "Continuous behavioral baseline learning that catches zero-day access anomalies and subtle lateral movements without brittle signature sets.",
    bullets: [
      "Behavioural anomaly detection.",
      "Suspicious authentication patterns.",
      "Unusual API activity.",
      "Security event classification.",
      "Contextual alert prioritization.",
    ],
    tags: [
      "TAG: ML_ANOMALY",
      "CVSS_v3.1",
      "ENGINE: EMBED_COSINE",
      "REALTIME_INFERENCE",
      "LATENCY: 4.2ms",
      "PRIORITY: P0",
      "LAYER: INFERENCE",
    ],
  },
  {
    id: "CAP-API-MONITOR",
    title: "Application & API Monitoring",
    icon: "Globe",
    tagline: "Gain visibility into security-related activity across applications and API infrastructure.",
    description:
      "Deep introspection into HTTP/REST, gRPC, and GraphQL requests with automatic token credential validation and payload scanning.",
    bullets: [
      "API request monitoring.",
      "Authentication event tracking.",
      "Suspicious request patterns.",
      "Application activity analysis.",
      "Security event history.",
    ],
    tags: [
      "TAG: API_INTROSPECTION",
      "PROTO: HTTP2/gRPC",
      "JWT_INSPECT: ACTIVE",
      "RATE_WINDOW: 100ms",
      "COVERAGE: 100%",
      "LAYER: L7_GATEWAY",
    ],
  },
  {
    id: "CAP-VULN-INTEL",
    title: "Vulnerability Intelligence",
    icon: "ShieldAlert",
    tagline: "Help teams organize and prioritize known vulnerabilities and exposed configurations.",
    description:
      "Context-aware vulnerability scoring that evaluates actual reachability and runtime exploitability rather than theoretical CVE databases.",
    bullets: [
      "Vulnerability findings.",
      "Severity classification.",
      "Asset context.",
      "Remediation tracking.",
      "Security posture overview.",
    ],
    tags: [
      "TAG: REACHABILITY_AST",
      "CVE_SYNC: LIVE",
      "EPSS_CORRELATED",
      "SURFACE: RUNTIME_REACHABLE",
      "SEV: DYNAMIC",
      "REMEDIATION: TRACKED",
    ],
  },
  {
    id: "CAP-INCIDENT-INVESTIGATE",
    title: "Intelligent Incident Investigation",
    icon: "GitFork",
    tagline: "Connect related security events to make investigations easier.",
    description:
      "Automatic event graph correlation reconstructs the blast radius from ingress point to database write within milliseconds.",
    bullets: [
      "Event correlation.",
      "Incident timelines.",
      "Related activity discovery.",
      "Investigation notes.",
      "Evidence organization.",
    ],
    tags: [
      "TAG: DAG_CORRELATION",
      "TOPOLOGY: DYNAMIC",
      "BLAST_RADIUS: SCOPED",
      "TIMELINE: AUTO_MERGED",
      "FORENSICS: CRYPTO_SEALED",
      "TIME_SAVED: 84%",
    ],
  },
  {
    id: "CAP-ALERTS-AUTOMATION",
    title: "Security Alerts & Automation",
    icon: "BellRing",
    tagline: "Help teams respond to important events through configurable workflows.",
    description:
      "Deterministic webhook pipelines and bidirectional incident syncing directly into Slack, PagerDuty, or security orchestration runbooks.",
    bullets: [
      "Configurable alerts.",
      "Webhook notifications.",
      "Alert routing.",
      "Integration with existing workflows.",
      "Investigation status tracking.",
    ],
    tags: [
      "TAG: WEBHOOK_DISPATCH",
      "SLACK_OPS: SYNC",
      "PAGERDUTY: ESCALATION",
      "RATE_LIMIT: UNLIMITED",
      "RETRY: EXPONENTIAL",
      "SIG: HMAC_SHA256",
    ],
  },
  {
    id: "CAP-ANALYTICS-DASHBOARD",
    title: "Security Analytics Dashboard",
    icon: "BarChart4",
    tagline: "Understand security activity across your infrastructure.",
    description:
      "High-density telemetry views for engineers with drill-down capabilities from multi-region clusters down to individual pod system calls.",
    bullets: [
      "Event trends.",
      "Alert history.",
      "Application activity.",
      "Vulnerability summaries.",
      "Security reports.",
    ],
    tags: [
      "TAG: TIME_SERIES",
      "RETENTION: 365D",
      "AGGREGATION: SEC_LEVEL",
      "EXPORT: NDJSON/CSV/PDF",
      "RBAC_RESTRICTED",
      "COMPLIANCE_READY",
    ],
  },
];

export const DEV_FEATURES = [
  {
    id: "DEV-API",
    title: "Simple API Integration",
    icon: "Code2",
    desc: "Connect applications and services through documented REST & gRPC APIs with standard authentication headers.",
    tags: ["REST/OPENAPI_3.1", "JSON_SCHEMA", "LATENCY < 2ms", "TLS 1.3"],
  },
  {
    id: "DEV-SDK",
    title: "SDK Support",
    icon: "Cpu",
    desc: "Type-safe SDKs for TypeScript, Node.js, Python, Go, and Rust with built-in retry and connection pooling.",
    tags: ["TYPESCRIPT", "PYTHON_3.11+", "GO_1.22+", "RUST_CRATES"],
  },
  {
    id: "DEV-WEBHOOKS",
    title: "Webhooks",
    icon: "Zap",
    desc: "Deliver HMAC-SHA256 cryptographically signed security payloads directly to your internal automation endpoints.",
    tags: ["HMAC_SHA256", "AT_LEAST_ONCE", "DLQ_FALLBACK", "MTLS_SUPPORT"],
  },
  {
    id: "DEV-CLI",
    title: "CLI Tools",
    icon: "Terminal",
    desc: "First-class `sentinelx` command-line utility for local development testing, policy linting, and CI/CD gates.",
    tags: ["BINARY_STATIC", "CI_CD_READY", "STDOUT_NDJSON", "SHELL_AUTOCOMPLETE"],
  },
  {
    id: "DEV-DOCS",
    title: "Developer Documentation",
    icon: "FileCode",
    desc: "Interactive recipe tutorials, schema references, posture rule definitions, and copy-paste integration blueprints.",
    tags: ["OPEN_SPEC", "POSTMAN_EXPORT", "QUICKSTART_5MIN", "INTERACTIVE"],
  },
  {
    id: "DEV-RBAC",
    title: "Team Access Controls",
    icon: "Lock",
    desc: "Fine-grained granular RBAC with SSO/SAML integration, token rotation, and per-environment audit policies.",
    tags: ["RBAC_GRANULAR", "SAML_2.0", "SCIM_PROVISION", "KEY_ROTATION"],
  },
];

export const CODE_EXAMPLES = {
  javascript: {
    language: "JavaScript / TypeScript",
    tab: "Node.js SDK",
    ext: "index.ts",
    runtime: "Node 20+ / Bun / Deno",
    tags: ["@sentinelx/sdk", "v2.4.0", "ASYNC/AWAIT", "TYPESAFE", "ZERO_DEPS"],
    code: `import SentinelX from "@sentinelx/sdk";

// Initialize SentinelX telemetry client with least-privilege token
const sentinel = new SentinelX({
  apiKey: process.env.SENTINELX_API_KEY,
  environment: "production",
  clusterId: "us-east-prod-k8s",
  telemetryMode: "realtime"
});

// Query active security anomalies across microservices
const events = await sentinel.security.events.list({
  severity: "high",
  limit: 10,
  includeContext: true
});

console.log(\`[SentinelX] Ingested \${events.data.length} high-severity anomalies\`);
for (const event of events.data) {
  console.log(\`-> [\${event.id}] \${event.classification} | Score: \${event.riskScore}\`);
}`,
  },
  python: {
    language: "Python",
    tab: "Python SDK",
    ext: "sentinel_monitor.py",
    runtime: "Python 3.10+",
    tags: ["sentinelx-py", "v2.4.0", "PAGINATED", "ASYNCIO_READY", "PEP-561"],
    code: `from sentinelx import SentinelXClient
import os

# Initialize client using environment credentials
client = SentinelXClient(
    api_key=os.environ["SENTINELX_API_KEY"],
    region="us-east-1",
    timeout_seconds=5.0
)

# Fetch streaming investigation alerts
anomalies = client.events.filter(
    severity="critical",
    category="suspicious_authentication",
    time_window_minutes=15
)

for anomaly in anomalies:
    print(f"[ALERT] {anomaly.id}: {anomaly.source_service} -> Risk: {anomaly.score}")
    if anomaly.requires_escalation:
        client.investigations.create_docket(anomaly.id, notify=["secops-oncall"])`,
  },
  curl: {
    language: "cURL",
    tab: "cURL API",
    ext: "request.sh",
    runtime: "HTTP/1.1 / HTTP/2",
    tags: ["REST_ENDPOINT", "BEARER_AUTH", "TLS_1.3", "STRICT_JSON", "ETAG_CACHE"],
    code: `curl -X POST "https://api.sentinelx.security/v1/events/search" \\
  -H "Authorization: Bearer $SENTINELX_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "X-SentinelX-Environment: production" \\
  -d '{
    "severity": ["high", "critical"],
    "timeframe": "last_1h",
    "sources": ["api-gateway", "auth-service"],
    "limit": 10
  }'`,
  },
  go: {
    language: "Go",
    tab: "Go SDK",
    ext: "main.go",
    runtime: "Go 1.22+",
    tags: ["go.sentinelx.dev", "v2.4.0", "CONTEXT_AWARE", "ZERO_ALLOC", "CONCURRENCY"],
    code: `package main

import (
	"context"
	"fmt"
	"os"
	"github.com/sentinelx/sentinelx-go"
)

func main() {
	ctx := context.Background()
	client, err := sentinelx.NewClient(os.Getenv("SENTINELX_API_KEY"))
	if err != nil {
		panic(err)
	}

	stream, err := client.Events.Subscribe(ctx, &sentinelx.Filter{
		Severity: sentinelx.SeverityHigh,
	})
	if err != nil {
		panic(err)
	}

	for evt := range stream.Events() {
		fmt.Printf("[SENTINELX] %s | Threat: %s\\n", evt.ID, evt.Summary)
	}
}`,
  },
};

export const INTELLIGENCE_LAYERS = [
  {
    id: "LAYER-COLLECT",
    name: "Signal Collection",
    short: "COLLECT",
    icon: "Radio",
    description: "Collect security-related information from connected applications, container runtimes and infrastructure.",
    tags: ["INGEST: eBPF/K8s/AWS", "RATE: 480k eps", "LATENCY < 1ms", "TAMPER_CHECK: PASSED"],
  },
  {
    id: "LAYER-ANALYZE",
    name: "Behaviour Analysis",
    short: "ANALYZE",
    icon: "BrainCircuit",
    description: "Analyze patterns, identify unusual activity and examine relevant contextual signals across sessions.",
    tags: ["BASELINE: 30D_ROLLING", "VECTOR_SPACE: 1536D", "FP_RATE: 0.04%", "ENTROPY_ANALYSIS"],
  },
  {
    id: "LAYER-CORRELATE",
    name: "Threat Intelligence",
    short: "CORRELATE",
    icon: "Share2",
    description: "Organize findings into understandable alerts, investigation context and security priorities.",
    tags: ["GRAPH: MULTI_NODE_DAG", "CVSS_AUGMENTED", "EPSS_RANKING", "PRIORITY: COMPUTED"],
  },
  {
    id: "LAYER-RESOLVE",
    name: "Human Review & Feedback",
    short: "RESOLVE",
    icon: "UserCheck",
    description: "Allow security teams to investigate findings, confirm incidents and improve detection workflows.",
    tags: ["ROLE: SOC_TIER_2", "DECISION_LOGGING", "ACTIVE_LEARNING", "REMED_DISPATCH"],
  },
];

export const NETWORK_NODES = [
  {
    id: "app-core",
    name: "Core Web App",
    type: "Application",
    risk: "Healthy",
    riskColor: "text-[#43D9C3]",
    bg: "bg-[#43D9C3]/10 border-[#43D9C3]/40",
    details: "Node.js v20 / Next.js Cluster in us-east-1a. Inbound requests normal (1,420 rps).",
    connectedTo: ["api-gw", "auth-srv", "user-pool"],
    latency: "14ms",
    tags: ["TYPE: APP_SERVICE", "RUNTIME: NODE20", "STATUS: NOMINAL"],
  },
  {
    id: "api-gw",
    name: "API Gateway Edge",
    type: "API Gateway",
    risk: "Investigating",
    riskColor: "text-[#F06464]",
    bg: "bg-[#F06464]/10 border-[#F06464]/40",
    details: "Spike in anomalous JWT signatures detected from AS13335 (Cloudflare egress IP).",
    connectedTo: ["app-core", "auth-srv", "db-primary", "evt-anomaly"],
    latency: "4.8ms",
    tags: ["TYPE: EDGE_PROXY", "PROTO: HTTP2", "ANOMALY: ACTIVE", "SEV: CRITICAL"],
  },
  {
    id: "auth-srv",
    name: "Auth Service",
    type: "Authentication",
    risk: "Under Review",
    riskColor: "text-[#F4B860]",
    bg: "bg-[#F4B860]/10 border-[#F4B860]/40",
    details: "14 failed password attempts followed by sudden token generation from foreign ASN.",
    connectedTo: ["app-core", "api-gw", "user-pool"],
    latency: "22ms",
    tags: ["TYPE: OIDC_PROVIDER", "MFA: ENFORCED", "BURST: FLAGGED"],
  },
  {
    id: "user-pool",
    name: "User Identity Store",
    type: "Users",
    risk: "Healthy",
    riskColor: "text-[#43D9C3]",
    bg: "bg-[#43D9C3]/10 border-[#43D9C3]/40",
    details: "Active user sessions: 42,800. No unauthorized privilege escalation registered.",
    connectedTo: ["auth-srv", "app-core"],
    latency: "6ms",
    tags: ["TYPE: IDENTITY_DIR", "SCIM: ACTIVE", "SESSIONS: 42.8k"],
  },
  {
    id: "db-primary",
    name: "Aurora PostgreSQL DB",
    type: "Database Server",
    risk: "Guarded",
    riskColor: "text-[#3978E8]",
    bg: "bg-[#3978E8]/10 border-[#3978E8]/40",
    details: "Query rate: 3,400 qps. Zero SQL injection patterns detected. TLS connection verified.",
    connectedTo: ["api-gw", "server-host"],
    latency: "1.2ms",
    tags: ["TYPE: DB_CLUSTER", "TLS: 1.3", "ENCRYPTION: KMS_AES256"],
  },
  {
    id: "evt-anomaly",
    name: "Threat Correlator",
    type: "Security Event",
    risk: "Flagged",
    riskColor: "text-[#F06464]",
    bg: "bg-[#F06464]/10 border-[#F06464]/40",
    details: "Correlation DAG detected linked path: IP -> API-GW -> Token Impersonation attempt.",
    connectedTo: ["api-gw", "auth-srv"],
    latency: "0.4ms",
    tags: ["TYPE: SEC_ANOMALY", "CORRELATION: CONFIRMED", "ACTION: BLOCKED"],
  },
];

export const AUDIENCE_CARDS = [
  {
    id: "AUD-DEV",
    role: "Software Development Teams",
    icon: "Code",
    desc: "Understand application activity, investigate suspicious behaviour and improve application security.",
    focus: "DevSecOps & CI/CD Security Visibility",
    tags: ["ROLE: DEV_TEAMS", "STAGE: BUILD & RUN", "TOOL: SDK/CLI", "ENV: DEV/STAGING/PROD"],
  },
  {
    id: "AUD-SAAS",
    role: "SaaS Companies",
    icon: "Cloud",
    desc: "Gain visibility into security events across applications, APIs and cloud infrastructure.",
    focus: "Tenant Isolation & API Attack Defense",
    tags: ["ROLE: SAAS_FOUNDERS", "STAGE: SCALE-UP", "COMPLIANCE: SOC2/ISO", "MULTI_TENANT"],
  },
  {
    id: "AUD-SECENG",
    role: "Security Engineers",
    icon: "ShieldCheck",
    desc: "Organize security findings, investigate incidents and prioritize potential threats.",
    focus: "Alert Prioritization & Forensic Graphs",
    tags: ["ROLE: SEC_ENGINEER", "STAGE: SOC_TIER_2", "EFFICIENCY: 10X", "REDUCE_FATIGUE"],
  },
  {
    id: "AUD-INFRA",
    role: "Cloud & Infrastructure Teams",
    icon: "Server",
    desc: "Monitor infrastructure activity and understand potential security exposures.",
    focus: "eBPF Kernel Monitoring & Cloud Posture",
    tags: ["ROLE: INFRA_SRE", "STAGE: CLUSTER_OPS", "PLATFORM: K8S/AWS/GCP", "DRIFT_DEFENSE"],
  },
  {
    id: "AUD-STARTUP",
    role: "Startups & Growing Businesses",
    icon: "Rocket",
    desc: "Build more structured security monitoring as applications and customer data grow.",
    focus: "Enterprise-Grade Security Without High Overhead",
    tags: ["ROLE: GROWTH_TECH", "STAGE: SEED_TO_SERIES_B", "TIME_TO_VALUE: 15MIN", "COST_OPTIMAL"],
  },
  {
    id: "AUD-ENTERPRISE",
    role: "Enterprise Security Teams",
    icon: "Building2",
    desc: "Bring additional security context into existing operational workflows.",
    focus: "Unified Security Data Layer & Custom Rules",
    tags: ["ROLE: ENTERPRISE_CISO", "STAGE: GLOBAL_CORP", "SCALE: 100k+ TPS", "CUSTOM_RETENTION"],
  },
];

export const INTEGRATIONS = [
  {
    category: "Cloud Infrastructure",
    catId: "cloud",
    items: [
      { name: "AWS CloudTrail & EKS", status: "Available", statusColor: "text-[#43D9C3]", icon: "Cloud", tags: ["INGEST: eBPF", "AWS_IAM", "AUTO_SYNC"] },
      { name: "Microsoft Azure", status: "Planned / Roadmap", statusColor: "text-[#929EAE]", icon: "Server", tags: ["AZURE_AD", "ROADMAP: Q3", "EVENT_HUB"] },
      { name: "Google Cloud (GCP)", status: "Available", statusColor: "text-[#43D9C3]", icon: "Cpu", tags: ["GKE_NATIVE", "CLOUD_LOGGING", "PUB/SUB"] },
    ],
  },
  {
    category: "Development & Code Hosting",
    catId: "dev",
    items: [
      { name: "GitHub Actions & Webhooks", status: "Available", statusColor: "text-[#43D9C3]", icon: "GitBranch", tags: ["CI_CD_SCAN", "PR_COMMENTS", "SECRET_AUDIT"] },
      { name: "GitLab CI", status: "Available", statusColor: "text-[#43D9C3]", icon: "GitPullRequest", tags: ["PIPELINE_GATE", "SAST_SYNC", "WEBHOOK"] },
      { name: "Bitbucket", status: "Planned / Roadmap", statusColor: "text-[#929EAE]", icon: "Code", tags: ["BITBUCKET_PULL", "ROADMAP: Q4"] },
    ],
  },
  {
    category: "Monitoring & Observability",
    catId: "observability",
    items: [
      { name: "Datadog", status: "Available", statusColor: "text-[#43D9C3]", icon: "Activity", tags: ["DOGSTATSD", "METRIC_FORWARD", "TAG_MAPPING"] },
      { name: "Grafana & Prometheus", status: "Available", statusColor: "text-[#43D9C3]", icon: "BarChart3", tags: ["PROM_EXPORTER", "DASHBOARD_JSON", "METRICS"] },
      { name: "OpenTelemetry (OTel)", status: "Available", statusColor: "text-[#43D9C3]", icon: "Radio", tags: ["OTEL_COLLECTOR", "TRACE_CORRELATE", "SPANS"] },
    ],
  },
  {
    category: "Communication & Incident Management",
    catId: "incident",
    items: [
      { name: "Slack Incident Channel", status: "Available", statusColor: "text-[#43D9C3]", icon: "MessageSquare", tags: ["INTERACTIVE_BOT", "SLASH_CMDS", "BI_DIRECTIONAL"] },
      { name: "PagerDuty", status: "Available", statusColor: "text-[#43D9C3]", icon: "Bell", tags: ["ON_CALL_ESCALATE", "INCIDENT_SYNC", "AUTO_RESOLVE"] },
      { name: "Microsoft Teams", status: "Planned / Roadmap", statusColor: "text-[#929EAE]", icon: "Share2", tags: ["TEAMS_CARD", "ROADMAP: Q3"] },
    ],
  },
  {
    category: "Data & Event Pipelines",
    catId: "data",
    items: [
      { name: "Deterministic Webhooks", status: "Available", statusColor: "text-[#43D9C3]", icon: "Zap", tags: ["HMAC_SHA256", "RETRIES: EXPONENTIAL", "DLQ"] },
      { name: "REST & gRPC APIs", status: "Available", statusColor: "text-[#43D9C3]", icon: "Layers", tags: ["OPENAPI_3.1", "PROTOBUF", "TLS_1.3"] },
      { name: "Kafka Event Streaming", status: "Available", statusColor: "text-[#43D9C3]", icon: "Workflow", tags: ["SASL_SCRAM", "TOPIC_ROUTING", "48k_EPS"] },
    ],
  },
];

export const TRUST_PRINCIPLES = [
  {
    id: "TRUST-DATA",
    title: "Data Protection",
    icon: "Lock",
    desc: "Protect customer security data through appropriate encryption and secure data handling.",
    technicalDetails: "Zero raw-token persistence, client-controlled KMS keys, AES-256-GCM at rest, TLS 1.3 in transit.",
    tags: ["AES-256-GCM", "TLS 1.3", "KMS_INTEGRATION", "EPHEMERAL_BUFFER", "ZERO_DATA_LEAK"],
  },
  {
    id: "TRUST-ACCESS",
    title: "Access Control",
    icon: "KeyRound",
    desc: "Use role-based permissions and controlled access to sensitive information.",
    technicalDetails: "Strict least-privilege RBAC, hardware security token / FIDO2 MFA enforcement, and per-action authorization.",
    tags: ["GRANULAR_RBAC", "FIDO2 / WEBAUTHN", "MFA_STRICT", "PERM_ISOLATION", "SCOPED_KEYS"],
  },
  {
    id: "TRUST-TRANSPARENCY",
    title: "Transparent Detection",
    icon: "Eye",
    desc: "Make it possible for teams to understand why an event was flagged and what evidence supports an assessment.",
    technicalDetails: "No opaque black boxes. Every finding provides an explainable inference vector, baseline comparison, and raw audit proof.",
    tags: ["EXPLAINABLE_AI", "AUDITABLE_CHAIN", "RAW_TELEMETRY_REF", "EVIDENCE_PROOF", "ZERO_GUESSWORK"],
  },
  {
    id: "TRUST-HUMAN",
    title: "Human Oversight",
    icon: "UserCheck",
    desc: "Keep security professionals responsible for confirming incidents and approving sensitive response actions.",
    technicalDetails: "Human-in-the-loop governance: automated containment suggestions require explicit engineer confirmation before production actions.",
    tags: ["HUMAN_IN_THE_LOOP", "TWO_PERSON_RULE", "AUDIT_TRAIL", "OVERRIDE_ENABLED", "SAFE_DESTRUCT"],
  },
];

export const FAQS = [
  {
    q: "What is SentinelX?",
    a: "SentinelX is an AI-powered cybersecurity intelligence platform that helps engineering and security teams monitor activity, identify suspicious behaviour and investigate potential threats across their applications and digital infrastructure.",
    category: "General",
    tags: ["PLATFORM", "OVERVIEW", "SECURITY_CORE"],
  },
  {
    q: "Is SentinelX an antivirus?",
    a: "No. SentinelX is designed as a security monitoring and intelligence platform for applications, APIs and infrastructure — not an endpoint antivirus application.",
    category: "Architecture",
    tags: ["POSITIONING", "NOT_ANTIVIRUS", "INFRA_LAYER"],
  },
  {
    q: "Does SentinelX support API monitoring?",
    a: "API monitoring is a core product direction. The actual supported integrations and monitoring capabilities include HTTP/REST, gRPC inspection, and anomaly detection across authentication headers and rate patterns.",
    category: "Monitoring",
    tags: ["API_SECURITY", "L7_MONITORING", "RATE_ANOMALY"],
  },
  {
    q: "Does SentinelX replace existing security tools?",
    a: "No. Its intended role is to complement existing security and infrastructure tools (such as SIEMs, WAFs, and APM tools) by providing additional visibility, behavioral correlation, and automated investigation capabilities.",
    category: "Integrations",
    tags: ["COEXISTENCE", "SIEM_COMPLEMENT", "DATA_LAYER"],
  },
  {
    q: "How does AI help SentinelX?",
    a: "AI-assisted analysis can help identify unusual patterns, organize security events and provide contextual investigation support. Security findings still require appropriate validation and human oversight.",
    category: "AI Engine",
    tags: ["ML_INFERENCE", "EXPLAINABILITY", "HUMAN_LOOP"],
  },
  {
    q: "Who should use SentinelX?",
    a: "Developers, SaaS companies, security engineers, cloud infrastructure teams and organizations responsible for application security.",
    category: "Audience",
    tags: ["TARGET_USERS", "ENGINEERING_TEAMS", "ENTERPRISE"],
  },
  {
    q: "Can I integrate SentinelX into my application?",
    a: "The platform is designed around developer-friendly integrations, including APIs and webhooks. Supported SDKs for Node.js, Python, and Go are part of our roadmap.",
    category: "Developers",
    tags: ["SDK_SUPPORT", "REST_API", "OPEN_STANDARDS"],
  },
];
