# Jatin Motwani — Portfolio

Summary
-------
A personal portfolio built with React + Vite showcasing projects, animations, 3D canvas elements, and a contact form using EmailJS. Responsive layout with Tailwind CSS and animated UI using Framer Motion and GSAP.

Demo
----
<img width="1896" height="967" alt="image" src="https://github.com/user-attachments/assets/90427051-bc96-49d2-8389-5c973b81a2fa" />


Features
--------
- Hero section with animated profile
- Projects / work showcase
- Testimonials (Feedbacks) component (optional)
- Contact form that sends messages via EmailJS
- 3D canvas components (Earth/Computers) using three.js / react-three-fiber
- Responsive layout with Tailwind CSS
- Smooth animations with Framer Motion & GSAP

Tech Stack
----------
- React (JSX)
- Vite (dev server / build)
- Tailwind CSS
- Framer Motion
- GSAP (ScrollTrigger)
- three.js / @react-three/fiber (3D canvas)
- @emailjs/browser (contact form)
- react-icons
- Node.js / npm

Getting Started
---------------
Prerequisites
- Node.js (>=16) and npm
- EmailJS account (for contact form)

Clone and install
```bash
git clone <repo-url>
cd Jatin-Motwani-Portfolio
npm install
```

Environment variables
---------------------
Create a `.env` file in the project root with these keys (replace values with your EmailJS credentials):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Important: restart the dev server after editing `.env`.

EmailJS setup (step-by-step)
----------------------------
1. Sign up at https://www.emailjs.com/.
2. Add an Email Service (Gmail, SMTP, etc.) in the Email Services section.
3. Create an Email Template. Use variables that match the payload from the contact form:
   - Example template body:
     ```
     New contact form message

     Name: {{name}}
     Email: {{email}}
     Message:
     {{message}}
     ```
   - In template settings set:
     - To Email: your receiving email
     - From Name: `{{name}}` (optional)
     - Reply To: `{{email}}`
4. From the EmailJS dashboard copy:
   - Service ID
   - Template ID
   - Public Key
5. Put those values in `.env` as shown above.

How contact form data is sent (example)
```js
// in src/components/Contact.jsx — ensure keys match template variables
emailjs.send(
  import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    message: form.message
  },
  import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
)
.then(() => { /* success */ })
.catch(err => { /* error */ });
```

How to run
----------
Development
```bash
npm run dev
# open http://localhost:5173 (or printed URL)
```

Production build & preview
```bash
npm run build
npm run preview
```

Deployment
----------
Recommended static hosting:
- Vercel
  - Connect GitHub repo
  - Vite auto-detected; set environment variables in Vercel dashboard (same VITE_APP_* keys)
- Netlify
  - Set build command: `npm run build`
  - Publish directory: `dist`
  - Add environment variables in Netlify site settings
- GitHub Pages (static)
  - Build locally and push `dist` to `gh-pages` branch (or use a deploy action)

Notes for deployment
- Never commit `.env` or your public key to the repo. Use platform environment settings.
- If EmailJS public key is missing you will see: "The public key is required." Add it to env on host.

Project Structure (high level)
------------------------------
- src/
  - assets/        → images, icons
  - components/    → Hero, Navbar, Contact, Footer, Feedbacks, canvas components
  - styles.js      → shared tailwind style strings
  - constants.js   → navLinks, projects, etc.
  - main.jsx
- public/          → static files


Contact
-------
- Email: jatinmotwnai17@gmail.com
- LinkedIn: https://www.linkedin.com/in/jatin-motwani-?utm_source=share
