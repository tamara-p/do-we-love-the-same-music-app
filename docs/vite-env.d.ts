

// vite-env.d.ts

/// <reference types="vite/client" />

// If you want to declare only the default VITE_* vars, the above line is enough.
// To add or tighten specific env‐var types, you can also do:

interface ImportMetaEnv {
  readonly VITE_SPOTIFY_CLIENT_ID: string;
  
  // add other VITE_* variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
