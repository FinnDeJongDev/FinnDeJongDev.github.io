import { useGSAP } from '@gsap/react'
import InfoPanels from './components/infoPanels/infoPanels';
import gsap from 'gsap';
import './App.css'

function App() {
  const title = "Finn de Jong".split('');

  useGSAP(() => {
    const scrollAnimation = gsap.timeline({ repeat: Infinity, repeatDelay: 1.5, ease: 'power1.inOut' });
    scrollAnimation.to(".scroll-dot", { duration: 1, opacity: 1 });
    scrollAnimation.to(".scroll-dot", { duration: 1, y: 30 });
    scrollAnimation.to(".scroll-dot", { duration: 1, opacity: 0 });

    const onLoadAnimation = gsap.timeline({ ease: 'power1.in'});
    onLoadAnimation.fromTo(
      ".title", 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, ease: 'power1.in', stagger: { amount: 0.5, from: 'start' } }
    );
    onLoadAnimation.to(".scroll-wheel", {opacity: 1})
  });

  return (
    <>
      <div className='container title-container'>
        { title.map((i, a) => {
          return i === " " ? (<h1 className='title' key={a}>&nbsp;</h1>) :(<h1 className='title' key={a}>{i}</h1>)
        }) }
      </div>
      <div className='scroll-wheel-container'>
        <span className='scroll-wheel' />
        <span className='scroll-dot' />
      </div>
      <InfoPanels />
    </>
  )
}

export default App
