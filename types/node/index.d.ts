/// <reference lib="esnext" />

// Minimal Node.js type stubs required for Next.js route handlers

declare namespace NodeJS {
  interface ProcessEnv {
    [key: string]: string | undefined;
  }
}

export {};
