declare interface Grecaptcha {
  ready: (cb: () => void) => void
  execute: (
    secret: string | undefined,
    config: Record<string>
  ) => Promise<string>
}

declare const grecaptcha: Grecaptcha
