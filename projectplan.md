# Horizon Win98 Skin — Project Plan

## High-Level Brief
We are theming Shopify's Dawn base theme with a retro Windows 98 skin using [98.css] (`https://github.com/jdan/98.css`). The design goal is to visually transfer components into Win98-style windows, buttons, and inputs. Theme settings will map to CSS variables so merchants can customize colors, spaces, and typography from the Shopify Theme Editor.

## DevTheme IDs
- **Dev Theme ID:** `180779843896`
- **Store:** `quickstart-2ec45548.myshopify.com`
- **Theme Name:** "Win98 - Dev"
- **Theme Preview:** https://quickstart-2ec45548.myshopify.com?preview_theme_id=180779843896
- **Theme Editor:** https://quickstart-2ec45548.myshopify.com/admin/themes/180779843896/editor

## Concept
Transform Shopify's Dawn theme into a nostalgic Windows 98 desktop experience. Every UI component will adopt the characteristic raised/sunken borders, MS Sans Serif typography, and classic Win98 color palette. The shopping experience will feel like browsing through desktop applications with windowed product cards, dialog-style popups, and classic button interactions.

## Key Features
1. **Win98 Visual Components**
   - Window-style product cards with title bars
   - Classic Win98 buttons with raised/sunken states
   - Dialog boxes for cart, login, and checkout flows
   - Pixelated MS Sans Serif typography
   - Authentic Win98 color schemes and borders

2. **Theme Customization**
   - Shopify Theme Editor settings for Win98 color variables
   - Typography scale controls
   - Spacing and border customization
   - Window appearance toggles

3. **Interactive Elements**
   - Hover states that mimic Win98 button behavior
   - Click animations for authentic desktop feel
   - Scrollbar styling to match Win98 aesthetic
   - Form elements styled as Win98 controls

## Technical Stack
- **Base Theme:** Shopify Dawn theme
- **CSS Framework:** 98.css for authentic Win98 styling
- **Fonts:** Pixelated MS Sans Serif (included in 98.css)
- **Icons:** SVG icons matching Win98 system icons
- **Customization:** Shopify theme settings mapped to CSS custom properties

## Fleshed-Out Development Plan

### Phase 1: Setup & Foundation ✅ COMPLETED
- [x] Download and examine current Dawn theme structure
- [x] Set up development environment with Shopify CLI
- [x] Connect to dev theme: `quickstart-2ec45548.myshopify.com`
- [x] Integrate 98.css framework into theme assets
- [x] Create base CSS custom properties structure
- [x] Test theme deployment and preview functionality

### Phase 2: Core Visual Components
- [ ] Style main navigation with Win98 menu bar
- [x] Transform product cards into window-style components ✅
- [x] Implement Win98 button styling for CTAs ✅
- [ ] Style form inputs to match Win98 controls
- [x] Add Win98 typography (MS Sans Serif) ✅
- [x] Implement basic Win98 color scheme ✅

### Phase 3: Layout & Structure ✅ COMPLETED
- [x] Style header to resemble Win98 desktop taskbar ✅
- [x] Create authentic Win98 taskbar with Start menu ✅  
- [x] Implement customizable Start button with logo support ✅
- [x] Add navigation integration with recursive menu rendering ✅
- [x] Build quick launch bar with configurable icons and links ✅
- [x] Add system tray with cart, search, account, and clock ✅
- [x] Implement responsive mobile behavior ✅
- [x] Create Win98 Blue Screen of Death 404 page ✅
- [x] Add 11px header typography standardization ✅

### Phase 4: Interactive Features
- [ ] Add hover states for Win98 button behavior
- [ ] Implement click animations for buttons
- [ ] Style cart drawer as Win98 dialog window
- [ ] Create Win98-style loading animations
- [ ] Add desktop-like drag interactions (if feasible)
- [ ] Style search as Win98 file search dialog

### Phase 5: Theme Customization
- [ ] Create Shopify theme settings schema
- [ ] Map Win98 colors to theme settings
- [ ] Add typography controls to theme editor
- [ ] Implement spacing/border customization options
- [ ] Add window appearance toggles
- [ ] Test all customization options in theme editor

### Phase 6: Polish & Optimization
- [ ] Test responsive behavior on mobile/tablet
- [ ] Optimize CSS for performance
- [ ] Add fallback fonts and error handling
- [ ] Cross-browser testing (especially IE-style quirks)
- [ ] Final QA and bug fixes
- [ ] Documentation for theme usage

### Phase 7: Launch Preparation
- [ ] Final theme testing on live preview
- [ ] Performance audit and optimization
- [ ] Accessibility review and fixes
- [ ] Create theme documentation
- [ ] Prepare for theme deployment

## Phase 1 Review - COMPLETED ✅

### Changes Made:
- **98.css Integration**: Successfully integrated 98.css framework with MS Sans Serif fonts
- **Theme Foundation**: Built on Shopify Dawn theme base with Win98 styling overlay
- **CSS Architecture**: Created modular CSS structure with custom properties for theme settings
- **Development Setup**: Established Shopify CLI workflow with live development environment
- **Font Integration**: Added authentic MS Sans Serif fonts (regular and bold) in WOFF/WOFF2 formats

### Key Files Added:
- `assets/98.css` - Core Win98 styling framework
- `assets/win98-custom-properties.css` - Theme customization variables
- `assets/ms_sans_serif.*` - Authentic Win98 fonts
- Updated `layout/theme.liquid` - Integrated CSS files

### Technical Implementation:
- Win98 color palette with CSS custom properties
- Button styling with raised/sunken border effects
- Form element styling matching Win98 aesthetics  
- Font-face declarations for MS Sans Serif
- Base utility classes for Win98 components

### Deployment Status:
- **Development Theme ID**: 180779843896
- **Live Preview**: https://quickstart-2ec45548.myshopify.com?preview_theme_id=180779843896
- **Theme Editor**: https://quickstart-2ec45548.myshopify.com/admin/themes/180779843896/editor
- **Repository**: https://github.com/ddiliberto/Win98-Theme

### Next Steps:
Ready to proceed with Phase 2 - Core Visual Components, starting with product card styling.

## Phase 2 Progress Update

### ✅ COMPLETED: Perfect Win98 Product Cards
- **Window-style cards**: Complete transformation using authentic 98.css structure
- **Title bars**: Blue gradient title bars with product names in white MS Sans Serif
- **Window controls**: Authentic minimize, maximize, and close buttons with proper icons
- **Image panels**: Inset border styling creating Win98 image viewer appearance
- **Typography**: MS Sans Serif fonts throughout with proper sizing
- **Buttons**: Raised/sunken Win98 button styling for Add to Cart
- **Color scheme**: Authentic Win98 grays (#c0c0c0) and blues (#000080)
- **Responsive design**: Mobile-friendly with proper scaling
- **404 Page**: Added authentic Win98 Blue Screen of Death for 404 errors

### Key Files Modified:
- `snippets/card-product.liquid` - Updated HTML structure to use proper window components
- `assets/win98-product-cards.css` - Complete CSS refactor for perfect Win98 styling
- `sections/main-404.liquid` - Windows 98 BSOD-style 404 page

### Technical Achievements:
- Authentic window structure with proper 98.css classes
- Perfect title bar implementation with window controls
- Inset image panels matching Win98 aesthetics
- Complete typography system using MS Sans Serif
- Responsive design maintaining Win98 authenticity
- Image display issues resolved with proper CSS overrides

## Phase 3 Review - COMPLETED ✅

### Changes Made:
- **Win98 Taskbar System**: Complete bottom taskbar with Start menu, quick launch, and system tray
- **Customizable Start Button**: Logo upload support and custom text configuration
- **Navigation Integration**: Shopify navigation menus integrated into Start menu with recursive rendering
- **Quick Launch Bar**: Secondary links next to Start button with customizable icons and URLs
- **System Tray**: Cart drawer integration, search dialog, account links, and live system clock
- **Mobile Responsive**: Icons-only mode and adaptive layout for mobile devices
- **Typography Standardization**: All header text standardized to 11px MS Sans Serif

### Key Files Added/Modified:
- `sections/win98-taskbar.liquid` - Complete taskbar section with comprehensive schema
- `assets/win98-taskbar.css` - Full Win98 taskbar styling with responsive behavior  
- `assets/win98-taskbar.js` - Interactive functionality for all taskbar components
- `snippets/win98-navigation-item.liquid` - Recursive navigation rendering with smart icons
- `assets/win98-header.css` - Header typography standardization
- `layout/theme.liquid` - Taskbar integration at page bottom

### Technical Implementation:
- CSS custom properties for dynamic taskbar height adjustment
- JavaScript class-based architecture for interactive components
- Block-based schema system for theme editor customization
- Recursive Liquid templating for multi-level navigation menus
- Cart drawer integration with multiple fallback methods
- Real-time system clock with date/time display
- Authentic Win98 visual styling throughout

### Deployment Status:
- **Feature Branch**: `feature/win98-taskbar` 
- **Commits**: Complete taskbar system with quick launch functionality
- **Theme Integration**: Taskbar included in main theme layout
- **Customization**: Full theme editor support for all settings

### Next Steps:
Ready to proceed with Phase 4 - Interactive Features, starting with comprehensive button styling across all theme components.

## Review Section
*[To be completed after full implementation]*
