# Design System: Anthony Jewelers — Lake Nona

## Creative Direction: "The Prismatic Vault & Optical Loupe Vitrine"

Anthony Jewelers (9971 Tagore Pl #4, Orlando, FL 32827 — Lake Nona Landing) is an independent, family-owned fine jeweler led by Master Jeweler Anthony ("Tony") and Joanne, celebrating over a decade in Lake Nona with a 4.9★ Google rating (728 reviews) and 98% recommendation across 101 Facebook reviews.

Rather than a wordy corporate brochure or generic template, the interface is conceived as a **futuristic dark-field gemological instrument and high-jewelry vault**:
1. **Minimalist High-Jewelry Discipline**: Zero filler copy, zero invented prices, and zero AI-slop paragraphs. Every piece is presented by its exact name, metal/stone specification, and provenance.
2. **Dual-Mode Optical Vitrine (Original Showroom vs. Studio Loupe)**: Visitors can filter the full catalog (`Wedding & Engagement Sets`, `Custom One-of-a-Kind Designs`, `Yael Designs Partnership`, `Sunflower Collection by Hakman Designs`, `Fine Bracelets & Necklaces`) and toggle enhanced pieces between their original showroom photograph and studio loupe redraw.
3. **Viewport-Safe Image Architecture**: Every media container on desktop and mobile enforces strict aspect-ratio and `max-height` bounds (`<= 280px` hero split on mobile, `<= 195px` vitrine cells on mobile) so a visitor never scrolls a full screen to pass a single image.
4. **Live-Linked Social Media Stream (`LATEST from Anthony Jewelers:`)**: Dynamically linked to `https://www.facebook.com/AnthonyJewelersOfLakeNona/` via `/api/latest-media` and `/api/media-proxy`, streaming the latest three media posts directly from the live feed without storing social media files on disk and without displaying the word "Instagram" anywhere in the section.

## Color Palette

- **Obsidian Darkfield (`#07090E`)**: Primary gemological microscope canvas.
- **Vitrine Slate (`#0E131D`)**: Architectural glass-case surface with subtle specular edge refraction.
- **Sapphire Pedestal (`#162C58`)**: Deep royal velvet accent drawn directly from Anthony Jewelers' signature blue leather ring display stands (`gmaps-photo-03.jpg`).
- **Champagne Prong (`#D4B483`)**: 18K warm gold accent echoing their custom tulip settings and Lake Nona storefront signage.
- **Diamond Spectral White (`#F5F7FA`)**: Primary platinum-white display ink.
- **Loupe Silver (`#9AA6B8`)**: Secondary gemological index and metadata ink.

## Typography

- **Display & Collection Titles**: `Cormorant Garamond` (weights 300, 400, 500, 600, italic) — razor-sharp haute-joaillerie proportions.
- **Technical Interface & Specifications**: `Plus Jakarta Sans` (weights 400, 500, 600) — high-legibility geometric sans for product names, service filters, and native mobile controls.
