Project Prompt: UI Comparison & KPI Drilldown System
Project Goal
Build a web app where users can:
Upload Current UI screenshot


Upload Revamped UI screenshot


System generates a structured design thought process for each screen in Problem → User → Decision → Outcome format


Each KPI card (Revenue, Active Subscriptions, Renewal Rate, etc.) is clickable, opening a modal showing:


Current vs Previous values


Growth %


Tabs for Trend and Segment-wise Distribution



Tech Stack
Frontend: React.js + Vite + TailwindCSS


Backend: Node.js + Express.js


Database: MongoDB (flexible JSON storage for screens, KPIs, and thought process)


Charts: Chart.js or Recharts


Testing:


Frontend: Jest + React Testing Library


Backend: Jest + Supertest


Optional AI Layer: OpenAI GPT API → generate thought process automatically from screenshots



Frontend Features
Screenshot Upload


Two fields: Current UI, Revamped UI


Preview uploaded images


Side-by-Side Comparison


Show both screenshots


Optional: AI highlight major differences


Thought Process Generator / Editor


Auto-fill or manual fields:


Problem / Context


User Insight


Product Decision


Expected Impact


Editable for corrections


Dynamic KPI Cards


Data-driven config: any KPI can appear (Revenue, Renewal Rate, etc.)


Shows current value, growth %, trend sparkline


KPI Drilldown Modal


Header: Current vs Previous + Growth


Tab 1: Trend chart (month/quarter/year)


Tab 2: Pie chart of segment-wise distribution


Configurable per KPI: some KPIs may not have segment chart


Export / Save


Save JSON in DB


Export as PDF for portfolio or review



Backend Features
Upload API


/upload-screenshots → store images + return ID


Thought Process API


/generate-thought-process


Inputs: screenshot IDs, optional notes


Returns JSON: Problem / User / Decision / Impact


KPI API


/kpi/:id → returns:


Current / Previous value


Growth %


Trend data


Segment distribution


Config for frontend (showTrend, showSegmentDistribution)


Database Structure Example (MongoDB)


{
  "screens": [
    {
      "screen_name": "Dashboard Overview",
      "current_ui_url": "string",
      "revamped_ui_url": "string",
      "thought_process": {
        "problem_context": "string",
        "user_insight": "string",
        "product_decision": "string",
        "expected_impact": ["string"]
      },
      "kpis": [
        {
          "name": "Revenue",
          "type": "monetary",
          "current": 100000,
          "previous": 85000,
          "growth": 17.65,
          "trendData": [ ... ],
          "segmentData": { "State A": 40000, "State B": 60000 },
          "showTrend": true,
          "showSegmentDistribution": true
        },
        {
          "name": "Active Subscriptions",
          "type": "count",
          "current": 1200,
          "previous": 1150,
          "growth": 4.35,
          "trendData": [ ... ],
          "showTrend": true,
          "showSegmentDistribution": false
        }
      ]
    }
  ]
}


Frontend Components (React)
UploadScreenshots → handles file upload


ScreenComparison → side-by-side display


ThoughtProcessEditor → Problem/User/Decision/Impact


KpiCard → dynamic, reusable


KpiModal → reads KPI config to render charts


TrendChart / PieChart → charts for drilldown



Dynamic KPI Handling
Use a JSON-driven approach for all KPIs


Frontend reads config → renders KPI cards and modal dynamically


Supports future KPIs without code changes



Optional AI Integration
Use OpenAI API to generate thought process automatically


Prompt Example:


Generate structured design thought process for a screen:
- Current UI: [description or image reference]
- Revamped UI: [description or image reference]

Return JSON:
{
  "problem_context": "...",
  "user_insight": "...",
  "product_decision": "...",
  "expected_impact": ["...", "..."]
}

file structure :

frontend/
├─ package.json
├─ vite.config.js
├─ index.html
├─ src/
│  ├─ main.jsx                 # App entry
│  ├─ App.jsx
│  ├─ index.css                # Tailwind + global styles
│  ├─ assets/                  # Images, icons, placeholder data
│  ├─ components/
│  │  ├─ UploadScreenshots/
│  │  │  ├─ UploadScreenshots.jsx
│  │  │  └─ UploadScreenshots.css
│  │  ├─ ScreenComparison/
│  │  │  ├─ ScreenComparison.jsx
│  │  │  └─ ScreenComparison.css
│  │  ├─ ThoughtProcessEditor/
│  │  │  ├─ ThoughtProcessEditor.jsx
│  │  │  └─ ThoughtProcessEditor.css
│  │  ├─ KpiCard/
│  │  │  ├─ KpiCard.jsx
│  │  │  └─ KpiCard.css
│  │  ├─ KpiModal/
│  │  │  ├─ KpiModal.jsx
│  │  │  └─ KpiModal.css
│  │  ├─ charts/
│  │  │  ├─ TrendChart.jsx
│  │  │  └─ PieChart.jsx
│  │  └─ UI/
│  │     ├─ Modal.jsx           # Generic modal wrapper
│  │     └─ Button.jsx          # Generic button
│  ├─ pages/
│  │  ├─ Dashboard.jsx
│  │  └─ ScreenDetail.jsx
│  ├─ context/
│  │  └─ AppContext.jsx         # Global state (screens, KPIs)
│  ├─ hooks/
│  │  └─ useKpiData.js
│  ├─ services/
│  │  ├─ api.js                 # Axios / fetch wrapper
│  │  └─ kpiService.js
│  └─ utils/
│     ├─ format.js              # Format numbers, percentages
│     └─ aiPrompt.js            # AI prompt generation
└─ tests/
   ├─ UploadScreenshots.test.jsx
   ├─ KpiCard.test.jsx
   └─ ThoughtProcessEditor.test.jsx
