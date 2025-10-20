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