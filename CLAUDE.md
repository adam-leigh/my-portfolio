# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Export static files
npm run export
```

## High-Level Architecture

This is a **Magic Portfolio** built with Next.js 15, React 19, and the Once UI design system. It's a personal portfolio website with blog, work showcase, and about sections.

### Core Structure

- **App Router**: Uses Next.js 13+ app directory structure
- **Once UI Design System**: Custom design system located in `src/once-ui/` with comprehensive component library
- **Content Management**: Configuration-driven content system using JavaScript objects
- **MDX Support**: Blog posts and project pages written in MDX format
- **SCSS Modules**: Component-scoped styling with SCSS modules

### Key Directories

- `src/app/` - Next.js app router pages and API routes
- `src/components/` - Portfolio-specific React components  
- `src/once-ui/` - Complete design system with 80+ components
- `src/app/resources/` - Configuration and content files
- `src/app/blog/posts/` - Blog posts in MDX format
- `src/app/work/projects/` - Project case studies in MDX format

### Configuration System

The portfolio uses a dual-file configuration approach:

- `src/app/resources/config.js` - Routes, styling, fonts, visual effects, and password protection
- `src/app/resources/content.js` - Personal information, social links, page content, and portfolio data

### Content Management

- **Blog Posts**: Add `.mdx` files to `src/app/blog/posts/`
- **Projects**: Add `.mdx` files to `src/app/work/projects/`
- **Page Content**: Modify sections in `src/app/resources/content.js`
- **Routing**: Enable/disable pages in `src/app/resources/config.js` routes object
- **Password Protection**: Configure protected routes in `src/app/resources/config.js`

### Design System Features

The Once UI system provides:
- Comprehensive theming with CSS custom properties
- 80+ production-ready components with TypeScript support
- Built-in responsive design patterns
- Consistent spacing and typography scales
- Dark/light theme switching
- Visual effects system (gradients, dots, masks, grids)

### Authentication

Simple password protection system using:
- Environment variables for passwords (`.env` file)
- API routes: `/api/authenticate` and `/api/check-auth`
- `RouteGuard` component for protected content
- Configure protected routes in `src/app/resources/config.js`

### Styling Approach

- **SCSS Modules**: Component-scoped styles prevent conflicts
- **CSS Custom Properties**: Design token system for consistent theming
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **PostCSS**: Modern CSS features with PostCSS processing

### SEO & Meta

- Automatic OpenGraph image generation via `/app/og/route.tsx`
- Dynamic meta tags based on page content
- Structured data generation for better search visibility
- Configurable base URL for production deployment

## Development Notes

- Uses Biome for code formatting (spaces, 100 char line width, double quotes)
- TypeScript strict mode enabled
- Images should be optimized and placed in `public/images/`
- Font configuration uses Geist and Geist Mono via Google Fonts
- Sass compiler set to "modern" with legacy JS API deprecation warnings silenced