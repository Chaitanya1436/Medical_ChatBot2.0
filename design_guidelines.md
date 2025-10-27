# Medical Chatbot Design Guidelines

## Design Approach
**Selected Approach**: Custom conversational UI with healthcare-focused visual design
**Rationale**: Medical chatbot requires trust, clarity, and conversational flow. User has provided specific color scheme emphasizing modern, vibrant aesthetic with strong contrast.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: `0 0% 0%` (Pure Black)
- Chatbot Messages: `195 100% 50%` (Peacock Blue) - primary bot message background
- User Messages: `75 80% 50%` (Lemon Green) - user message background
- Conversation Borders: Vibrant gradient combinations using peacock blue and lemon green with cyan/magenta accents
- Text on Dark: `0 0% 100%` (White)
- Text on Chatbot Bubble: `0 0% 0%` (Black for contrast on peacock blue)
- Text on User Bubble: `0 0% 0%` (Black for contrast on lemon green)
- Progress Bar Active: `195 100% 50%` (Peacock Blue)
- Progress Bar Inactive: `0 0% 20%` (Dark Gray)
- API Toggle Active: `75 80% 50%` (Lemon Green)

**Accent Colors**
- Error/Warning: `0 85% 60%` (Red)
- Success: `145 80% 50%` (Green)
- Neutral: `0 0% 60%` (Gray)

### B. Typography
**Font Families**
- Primary: 'Inter' or 'DM Sans' from Google Fonts - modern, readable sans-serif
- Monospace: 'JetBrains Mono' for API keys and technical data

**Hierarchy**
- Chatbot Questions: 16px, weight 500
- User Input Text: 16px, weight 400
- Headers/Titles: 24-32px, weight 700
- Progress Labels: 12px, weight 500, uppercase, tracking-wide
- Medicine/Disease Names: 14px, weight 600
- Dosage/Instructions: 13px, weight 400, line-height 1.6

### C. Layout System
**Spacing Primitives**: Use Tailwind units 2, 4, 8, 12, 16 for consistency
- Message padding: `p-4`
- Message spacing: `mb-4`
- Container margins: `mx-8` on desktop, `mx-4` on mobile
- Progress bar height: `h-2`
- Icon size: `w-12 h-12`

**Conversation Layout**
- Max-width conversation area: `max-w-3xl mx-auto`
- Messages: Left-aligned for bot (with icon on left), right-aligned for user (icon on right)
- Message bubbles: `rounded-2xl` with subtle shadow
- Border effects: 2px vibrant gradients on hover (`hover:border-gradient`)

### D. Component Library

**Conversation Messages**
- Chatbot Bubble: Peacock blue background, black text, rounded-2xl, bot icon (medical cross or robot) on left side
- User Bubble: Lemon green background, black text, rounded-2xl, user icon (person silhouette) on right side
- Typing Indicator: Animated dots in peacock blue
- Message Enter Animation: Slide-in from respective side (left for bot, right for user)

**Input Components**
- Text Input: Dark gray `0 0% 15%` background, white text, peacock blue focus ring, rounded-lg
- Radio Buttons: Custom styled with peacock blue selected state, lemon green hover
- Dropdown: Dark background, white text, peacock blue active item
- Number Input: Same as text input with +/- controls
- Skip Buttons: Outline style, peacock blue border, hover fill

**Sliders (Severity Rating)**
- Track: Dark gray `0 0% 20%`
- Fill: Gradient from lemon green (low) to peacock blue (high)
- Thumb: White circle with shadow, 20px diameter
- Labels: 0-10 marks below slider

**Progress Timeline (Top Right)**
- 5 horizontal steps with connecting lines
- Active step: Peacock blue circle with checkmark
- Current step: Peacock blue outline, pulsing animation
- Future step: Dark gray circle
- Labels: Step names below circles (Profile, Symptoms, Severity, Analysis, Report)

**API Toggle Section**
- Toggle Switch: Lemon green when enabled, dark gray when disabled
- API Key Input: Monospace font, password field style, peacock blue focus
- Load API Button: Peacock blue background, white text, rounded-lg
- Status Indicator: Green checkmark or red X with validation message

**Disease/Medicine Cards**
- Background: `0 0% 10%` (Very dark gray, slightly lifted from black)
- Border: 1px peacock blue on hover
- Medicine items: Grid layout, 3 per disease minimum
- Age group badges: Small rounded pills with distinct colors per group
- Dosage indicators: Bold weight numbers with timing icons

**Final Report**
- Summary sections with subtle dividers
- Collapsible sections with peacock blue expand/collapse indicators
- Print button: Lemon green background
- Specialist badge: Highlighted with gradient border

**Icons**
- Use Heroicons via CDN (outline style for most, solid for active states)
- Chatbot icon: Medical cross or friendly bot avatar (32x32px beside messages)
- User icon: Simple person silhouette (32x32px)
- Disease icons: Stethoscope, thermometer, etc. from Heroicons
- Download/Print: Arrow-down, printer icons

**Hover Effects**
- Message borders: Vibrant gradient glow (peacock blue to cyan)
- Buttons: Slight scale (1.02) and brightness increase
- Cards: Lift effect with shadow and border glow
- Icons: Rotate or pulse subtly

### E. Animations
**Minimal, Purpose-Driven**
- Message appearance: 200ms slide-in from side
- Typing indicator: Gentle pulse
- Progress step transition: 300ms smooth fill
- Button clicks: Quick scale feedback
- Page transitions: 150ms fade between conversation phases
- **Avoid**: Excessive floating elements, continuous animations, distracting movements

## Layout Structure

**Full Page Layout**
- Black background fills entire viewport
- Progress bar: Fixed at top-right corner, `max-w-md`, semi-transparent dark background panel
- Conversation area: Centered column, `max-w-3xl`, scrollable with custom scrollbar (peacock blue thumb)
- API toggle: Top-left corner, collapsible panel

**Message Flow**
- Each question appears as bot message (left-aligned with icon)
- User response appears as user message (right-aligned with icon)
- Input controls appear below last bot message, integrated into conversation
- Clear visual progression down the page

**Responsive Behavior**
- Desktop: Full conversation flow visible, progress bar top-right
- Tablet: Slightly narrower conversation, progress bar stacked vertically
- Mobile: Single column, progress bar horizontal at top, icons smaller (24x24px)

## Special Features

**NLP Symptom Correction Display**
- Show original input in gray italic
- Arrow indicator
- Corrected symptom in peacock blue bold
- Confirmation checkbox with lemon green check

**API vs JSON Mode Indicator**
- Persistent badge showing active mode
- Peacock blue for API mode, gray for JSON mode
- Smooth transition animation when toggling

**Weight Reminder for Critical Diseases**
- Highlighted message in amber/warning color
- Pulsing border to draw attention
- Mandatory input field appears inline

This design creates a trustworthy, modern medical chatbot experience with high contrast, clear visual hierarchy, and engaging conversational UI while maintaining professional healthcare aesthetics.





---




## Overview

MedBot is a conversational AI medical chatbot that collects patient information, analyzes symptoms using NLP-based fuzzy matching, and provides disease predictions with medication recommendations. The application features a fully static frontend with a custom conversational UI optimized for healthcare interactions, emphasizing trust, clarity, and accessibility through carefully designed visual elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with HMR support
- **Wouter** for lightweight client-side routing
- **TanStack Query v5** for state management and data synchronization

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CVA (Class Variance Authority)** for component variant management
- Custom conversational UI components (`ChatMessage`, `ConversationInput`, `SymptomVerification`, `DiseaseReport`)

**Design System**
- Dark mode primary theme with vibrant peacock blue (#00BFFF) and lemon green (#BFFF00) accent colors
- Custom animated background with glowing plus symbols
- Typography hierarchy using 'DM Sans' and 'JetBrains Mono' fonts
- Consistent spacing primitives using Tailwind's scale (2, 4, 8, 12, 16)
- Accessible color contrast ratios with black text on bright bubble backgrounds

**NLP & Symptom Processing**
- **Fuse.js** for fuzzy string matching and spell correction of symptom inputs
- Local symptom database with aliases for natural language understanding
- Multi-step verification flow for corrected symptom names
- Severity rating system (0-10 slider) per symptom

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Custom Vite middleware integration for development with HMR
- Static file serving for production builds
- Request logging middleware with response capture

**Data Storage**
- **In-memory storage** (MemStorage class) for session data
- **Drizzle ORM** configured for PostgreSQL (via @neondatabase/serverless)
- User schema with UUID primary keys and username/password fields
- Migration support via drizzle-kit

**Application Logic**
- Conversational state machine managing user input flow (welcome → profile → symptoms → severity → analysis → report)
- Disease prediction algorithm using weighted symptom matching
- Medicine recommendation system based on age groups and severity levels
- BMI-aware logic for diseases requiring weight/height data

### Core Conversational Flow

**Phase 1: User Profile Collection**
- Name (free text)
- Gender (radio buttons: Male, Female, Other, Prefer Not to Say)
- Age (dropdown: Infant, Child, Teen, Adult, Middle Age, Senior)
- Weight in kg (number input with skip option)
- Height in cm (number input with skip option)

**Phase 2: Symptom Input & Verification**
- Three symptom inputs with NLP-based fuzzy matching against predefined symptom database
- Real-time spell correction and synonym detection
- Visual verification UI showing original input → corrected symptom
- Duration input for third symptom

**Phase 3: Severity Rating**
- 0-10 slider for each detected symptom
- Severity values stored per symptom for weighted disease prediction

**Phase 4: Disease Analysis & Report**
- Weighted probability calculation based on symptom-disease mappings
- Age-appropriate medication recommendations with dosage instructions
- Specialist recommendations
- Optional weight reminder for BMI-related conditions

### Data Models

**Medical Knowledge Base**
- `SYMPTOMS`: Array of symptom objects with IDs, names, and alias arrays
- `DISEASES`: Disease objects with symptom arrays, weighted mappings, specialist info, and weight requirements
- `MEDICINES`: Medicine objects with age group restrictions, dosage levels (low/medium/high), timing, and instructions
- `getAgeGroup()`: Utility function mapping age ranges to categories

## External Dependencies

### Core Libraries
- **@tanstack/react-query v5.60.5** - Server state management
- **wouter** - Client-side routing
- **fuse.js** - Fuzzy search and symptom matching

### UI Component Libraries
- **@radix-ui/** (multiple packages) - Accessible headless UI primitives for accordion, dialog, dropdown, popover, slider, switch, tabs, toast, etc.
- **class-variance-authority v0.7.1** - Type-safe component variants
- **clsx v2.1.1** & **tailwind-merge** - Conditional CSS class management
- **lucide-react** - Icon system
- **cmdk v1.1.1** - Command menu component
- **embla-carousel-react v8.6.0** - Carousel functionality

### Database & ORM
- **drizzle-orm v0.39.1** - TypeScript ORM
- **@neondatabase/serverless v0.10.4** - PostgreSQL serverless driver
- **drizzle-zod v0.7.0** - Zod schema integration for validation
- **connect-pg-simple v10.0.0** - PostgreSQL session store

### Development Tools
- **Vite v5+** - Build tool and dev server
- **TypeScript v5+** - Type checking
- **Tailwind CSS v3+** - Utility-first CSS framework
- **PostCSS** with Autoprefixer
- **@replit/vite-plugin-*** - Replit-specific development plugins (cartographer, dev-banner, runtime-error-modal)

### Build Configuration
- **esbuild** - Server-side bundling
- **tsx** - TypeScript execution for development
- Path aliases configured: `@/` → client/src, `@shared/` → shared, `@assets/` → attached_assets