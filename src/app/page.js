import Image from "next/image";
import Heading from "./components/Heading";

export default function Home() {
  return (
    <div className="flex  flex-col items-center justify-between">
     Hello
     <Heading/>
     <button className="btn text-2xl bg-red-50 btn-primary">Call Me</button>

     <div>
     1. Server-Side Rendering (SSR)
Next.js supports SSR out of the box, which improves:

SEO (Search Engine Optimization)

Initial page load speed

Better performance for dynamic content

⚡ 2. Static Site Generation (SSG)
You can pre-render pages at build time, which makes sites:

Fast

Scalable

Easy to deploy on CDNs

🔁 3. API Routes
Next.js allows you to create backend API routes inside the same project without a separate server.

🔍 4. Built-in SEO Optimization
With dynamic meta tags, title updates, and server rendering, it helps your site rank better on Google.

🧭 5. File-based Routing
You don’t need to manually configure routes. Pages are created just by adding .js or .tsx files in the pages/ directory.

♻️ 6. Hot Reloading and Fast Refresh
Code updates appear instantly in the browser without losing component state—great for developer experience.

📦 7. Built-in CSS and Sass Support
You can import CSS/Sass files directly or use styled-components and Tailwind CSS easily.

🧱 8. Flexible Rendering Options
Supports:

CSR (Client-side rendering)

SSR (Server-side rendering)

SSG (Static site generation)

ISR (Incremental static regeneration)

☁️ 9. Vercel Integration
Next.js is made by Vercel, and it works seamlessly with their platform for fast, optimized deployments.


     </div>
    </div>
  );
}
