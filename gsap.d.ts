declare module 'gsap/ScrollTrigger' {
    export const ScrollTrigger: any;
  }
  
  declare module 'gsap' {
    export * from 'gsap/gsap-core';
    export { ScrollTrigger } from 'gsap/ScrollTrigger';
  }