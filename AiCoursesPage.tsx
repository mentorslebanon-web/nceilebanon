@import "tailwindcss";

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #ffffff;
    color: #0f172a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Cyber tech subtle grid background for tech accents */
.tech-grid-bg {
  background-size: 36px 36px;
  background-image: 
    linear-gradient(to right, rgba(6, 182, 212, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(6, 182, 212, 0.04) 1px, transparent 1px);
}

.tech-dot-bg {
  background-image: radial-gradient(rgba(14, 165, 233, 0.12) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Glowing cyan tech borders inspired by image */
.glow-cyan {
  box-shadow: 0 0 20px -3px rgba(6, 182, 212, 0.25);
}

.glow-cyan-sm {
  box-shadow: 0 0 10px -2px rgba(6, 182, 212, 0.35);
}

