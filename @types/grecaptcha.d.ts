declare interface Grecaptcha {
    ready: (cb: () => void) => void;
    execute: (secret: string | undefined, config: any) => Promise<string>;
}

declare const grecaptcha: Grecaptcha;