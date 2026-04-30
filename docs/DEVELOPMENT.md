# Technical Development Documentation — MIT Indore Website

This document provides deeper technical insights into the architecture, design system, and maintenance of the Malwa Institute of Technology (MIT) Indore website.

---

## 1. Project Architecture & State Management

### Tech Stack
- **Framework**: React 18 (Vite)
- **Routing**: React Router Dom v6 (HashRouter for shared hosting compatibility)
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Intersection Observer API for scroll reveals.

### Global Configuration
- **Root Component**: `src/App.jsx` handles the high-level routing and layout persistence (Navbar/Footer).
- **Global Styles**: `src/index.css` contains the entire design system, variables, and global utility classes.

---

## 2. Design System (CSS Architecture)

The project uses a **Global Design Token** system defined in `:root` of `src/index.css`.

### Core Color Palette
| Variable | Value | Usage |
| :--- | :--- | :--- |
| `--crimson` | `#C62828` | Primary brand color, CTA buttons, active links. |
| `--navy` | `#0A0F1E` | Primary background, hero sections, footers. |
| `--navy-card` | `#131929` | Background for cards on dark sections. |
| `--surface-alt` | `#F8FAFC` | Light grey background for section alternation. |

### Responsive Breakpoints
- **Mobile**: `< 768px` (Stacks grids, removes side paddings, converts navbar to hamburger).
- **Tablet**: `768px - 1024px` (Adjusts grid columns from 3 to 2).
- **Desktop**: `> 1024px` (Full 1200px container width).

---

## 3. Dynamic Content Management

### 🎓 Departments & Academics
- **Data File**: `file:///src/data/departmentsData.jsx`
- **Logic**: This file is the single source of truth for all engineering branches.
- **Maintenance**: To add a department, simply add a new object to `departmentsData`. The site will automatically generate a dedicated route (`/department/:id`) and update the Navbar dropdown.

### 📅 Academic Calendar
- **Location**: `src/pages/Academics.jsx`
- **Update Process**:
    1. Upload the new calendar image to `src/assets/academics/`.
    2. Import the image at the top of `Academics.jsx`.
    3. Update the labels (e.g., "5th Semester", "8th Semester") in the `calendarItems` array within the component.

### 💼 Career / Employee Application
- **Location**: `src/components/About.jsx`
- **Link**: The "Join Our Team" button points to an external Zoho form.
- **Styling**: Uses the `.btn-career` class which includes a premium "shimmer" animation.

---

## 4. Component Guidelines

### Navigation (Navbar)
- **Mobile Logic**: The "Departments" link is an accordion (`mobile-accordion`). It uses the `ChevronDown` icon which rotates 180° when active.
- **Active State**: The `NavLink` component automatically applies the `.active-link` class, which adds a crimson underline on desktop and changes text color on mobile.

### Video Player
- **Component**: `src/components/VideoPlayer.jsx`
- **Features**: Supports custom thumbnails, YouTube integration, and automatic "cover" scaling.
- **Responsive**: On mobile, it automatically removes border-radii and horizontal padding to provide a full-bleed "immersive" view.

---

## 5. Deployment Guide (GoDaddy/Shared Hosting)

1. **Build**: Run `npm run build`. This generates a `dist/` folder.
2. **Compatibility**: The project uses `HashRouter`. This is crucial for GoDaddy because it allows page refreshes without requiring server-side `.htaccess` configurations.
3. **Paths**: Ensure all images are imported via JavaScript (`import img from '...'`) so Vite can properly hash them for the `dist/assets/` directory.

---

## 🛠️ Maintenance Checklist

- [ ] **Batch Year Update**: Update the admissions batch string in `Hero.jsx` and `Admissions.jsx`.
- [ ] **Stats Update**: Adjust the "20+ Years" or "200+ Recruiters" counts in `Hero.jsx` and `About.jsx`.
- [ ] **HOD Messages**: Update HOD names and messages in `src/data/departmentsData.jsx` when faculty changes occur.

---
*Last Updated: April 2026*
