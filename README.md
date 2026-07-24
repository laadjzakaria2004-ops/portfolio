# 🖤 Laadj Zakaria — Portfolio

> Personal portfolio built with **React** and **Vite** — fully responsive, smooth scroll animations, and interactive visual effects.

🔗 **Live:** [laadj-zakaria.vercel.app](https://laadj-zakaria.vercel.app)  
📁 **Source:** [github.com/laadj-zakaria/portfolio](https://github.com/laadj-zakaria/portfolio)

---

## ✨ Features

- **One-page layout** with smooth scroll navigation
- **Sticky Navbar** — active link updates automatically based on visible section
- **Hero section** with falling stars background effect (Lightfall shader)
- **Itachi crow effect** — click the signature to trigger a crow animation 🐦‍⬛
- **Crows background** on the Hero section
- **Responsive design** — works on desktop, tablet, and mobile
- **Contact form** powered by EmailJS
- **Download Resume** button (PDF)
- **Dark footer** with Back to Top

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Signature + falling stars + crow effects |
| **About Me** | Name, role, description, keyboard visual |
| **Technologies** | Flutter, Node.js, Java, HTML, CSS, JavaScript, Supabase, PostgreSQL, Git |
| **About Me Detail** | Personal photo, bio, stats, Download Resume |
| **Experience** | Timeline — academic & team projects |
| **Projects** | Timeline — personal projects with GitHub links |
| **Education** | Bachelor's + Master's degree cards |
| **Contact** | EmailJS form + social links |

---

## 🛠️ Tech Stack

- **React 18** + **Vite**
- **CSS Modules** (no external UI library)
- **OGL** — WebGL shader for the Lightfall falling stars effect
- **EmailJS** — contact form without a backend
- **Intersection Observer API** — active navbar detection

---

## 📁 Project Structure

```
portfolio
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ icons
│  │  ├─ css.svg
│  │  ├─ flutter.svg
│  │  ├─ git.svg
│  │  ├─ html.svg
│  │  ├─ java.svg
│  │  ├─ javascript.svg
│  │  ├─ nodejs.svg
│  │  ├─ postgersql.svg
│  │  └─ supabase.svg
│  └─ Laadj_Zakaria_CV .pdf
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ crows
│  │  │  ├─ frame-down.png
│  │  │  ├─ frame-glide.png
│  │  │  └─ frame-up.png
│  │  ├─ Keyboard.png
│  │  ├─ photo.jpg
│  │  └─ signature.png
│  ├─ components
│  │  ├─ CrowBackground.css
│  │  ├─ CrowBackground.jsx
│  │  ├─ Footer.css
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.css
│  │  └─ Navbar.jsx
│  ├─ data
│  │  ├─ experience.js
│  │  ├─ projects.js
│  │  └─ technologies.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ sections
│  │  ├─ AboutHero.css
│  │  ├─ AboutHero.jsx
│  │  ├─ AboutMe.css
│  │  ├─ AboutMe.jsx
│  │  ├─ Contact.css
│  │  ├─ Contact.jsx
│  │  ├─ Education.css
│  │  ├─ Education.jsx
│  │  ├─ Experience.css
│  │  ├─ Experience.jsx
│  │  ├─ Hero.css
│  │  ├─ Hero.jsx
│  │  ├─ Projects.css
│  │  ├─ Projects.jsx
│  │  ├─ Technologies.css
│  │  └─ Technologies.jsx
│  └─ styles
│     └─ global.css
└─ vite.config.js

```
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Clone the repo
git clone https://github.com/laadj-zakaria/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 📧 EmailJS Setup

To enable the contact form:

1. Create a free account on [emailjs.com](https://emailjs.com)
2. Add an **Email Service** (Gmail recommended)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — message content
4. Replace the placeholders in `src/sections/Contact.jsx`:

```js
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { ... },
  'YOUR_PUBLIC_KEY'
)
```

---

## 🎨 Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--color-bg` | `#adb6b6` | Main background |
| `--color-dark` | `#1a2332` | Text & accents |
| `--color-card` | `rgba(255,255,255,0.18)` | Cards |

---

## 🐦‍⬛ Easter Egg

Click on the **signature** in the Hero section to trigger the **Itachi crow effect** 🐦‍⬛

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Laadj Zakaria**  
Software Engineering Student · Master 1  
📧 laadjzakaria2004@gmail.com  
🔗 [github.com/laadj-zakaria](https://github.com/laadj-zakaria)  
🔗 [linkedin.com/in/laadj-zakaria](https://linkedin.com/in/laadj-zakaria)
```

