# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Dev server: `npm run dev` or `next dev --turbopack`
- Build: `npm run build` or `next build`
- Production server: `npm run start` or `next start`
- Lint: `npm run lint` or `next lint`

## Code Style Guidelines
- **Imports**: React imports first, then external libraries, Next.js imports, followed by component types
- **TypeScript**: Use explicit typing for all variables, props, and return types
- **Components**: Use 'use client' directive for client components
- **Naming**:
  - PascalCase for components (LandingPage, NavLink)
  - camelCase for variables and functions
  - Interface names end with 'Props' (NavLinkProps)
  - Boolean state variables use 'is' prefix (isScrolled)
- **Formatting**: Use 4-space indentation
- **Component Structure**: Maintain well-structured components with clear section comments
- **Error Handling**: Implement try/catch blocks for async operations

When editing code, ensure compatibility with Next.js 15, React 19, and Tailwind CSS.

---

## Company Context: Color Robotics

### What We Do
AI-powered visual diagnostics for robotic arms. We use computer vision to watch robots via standard cameras, diagnose failures when they occur, and guide users to resolution - including suggesting code fixes.

### The Problem We Solve
When a robot fails on a factory floor:
- Small/mid manufacturers often don't have dedicated robotics engineers
- They wait hours or days for integrators to come fix things
- Every hour of downtime costs thousands of dollars
- Error codes alone don't tell the full story of what went wrong

### Our Solution
- Point a standard camera at your robot (no special hardware)
- Our AI watches and understands what's happening visually
- When something goes wrong, we diagnose the probable cause
- We provide fix guidance or even suggest code fixes directly
- Goal: Resolve failures in minutes instead of days

### Target Audience
- Small to mid-size manufacturers
- Plant managers, VPs of Operations
- Teams without dedicated robotics staff
- Companies with 6-axis robotic arms (FANUC, ABB, Mitsubishi, etc.)

### Current Stage
- Early stage startup
- Building prototype in simulation
- Will test on real robots soon
- Looking for early partners/design partners
- Technical validation phase

### Team Background
- Engineers from: Built Robotics, Honeywell, Glacier, Third Wave Automation
- Education: Penn, Berkeley

### Investors/Accelerators
- Forum Ventures (investment)
- Berkeley SkyDeck Pad13 (incubator)
- Creative Destruction Lab (accelerator)

### Brand Colors
- Primary Blue: #185BA7 (trust, technology)
- Orange: #FF6600 (energy, innovation)
- Yellow: #FFC300 (intelligence, highlights)
- Green: #1B4D2E (success, resolution)

### Design Preferences
- Clean, futuristic (originally referenced Anthropic's website)
- Should feel confident but approachable
- NOT cold/corporate - needs warmth and personality
- Abstract illustrations over stock photography

### Key Messaging
- Headline: "AI that sees why your robot stopped"
- Value prop: "Bring your robots back online in minutes, not days. No robotics expertise required."

### Website Goals
1. Visitors immediately understand what we do
2. Get people to book calls / request early access
3. Build trust despite being early stage

### CTA
- Primary: "Get Early Access" or "Book a Call"
- Calendly link: https://calendly.com/pradeesh-colorrobotics/15-minutes
- Form submission: https://submit-form.com/jvPcybbTB
- Contact email: hello@colorrobotics.ai
