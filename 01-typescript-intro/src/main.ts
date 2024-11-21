import './style.css'
import { setupCounter } from './counter.ts'
//import './topics/01-basic-types.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hello World!
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
