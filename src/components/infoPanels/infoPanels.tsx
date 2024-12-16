import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import profilePicture from '../../assets/face.jpg';
import dutchFlag from '../../assets/Flag_of_the_Netherlands.svg';
import { SkaterLoop } from '../Skater/SkaterLoop';
import './infoPanels.css';
import { useRef } from 'react';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function InfoPanels() {
  const countryPanel = useRef<HTMLDivElement | null>(null);
  const centerCutout = useRef<HTMLDivElement | null>(null);
  const aboutMePanel = useRef<GSAPTimeline | null>(null);
  const flag = useRef<GSAPTimeline | null>(null);
  const skater = useRef<GSAPTimeline | null>(null);

  const interactability = "I love interactability".split(' ');
  const interactabilitySubtext = "Drag the words".split(' ');

  gsap.registerPlugin(Draggable, ScrollTrigger);

  useGSAP(() => {
    const loadInTimeline = gsap.timeline({ scrollTrigger: {
      trigger: '.info-panels-container',
      start: '20% 50%',
    }});
    loadInTimeline.fromTo(
      '.top-left-panel', 
      { opacity: 0, x: -10, y: -10 }, 
      { duration: 0.5, opacity: 1, x: 0, y: 0 }
    );
    loadInTimeline.fromTo(
      '.top-right-panel', 
      { opacity: 0, x: 10, y: -10 }, 
      { duration: 0.5, opacity: 1, x: 0, y: 0 },
      "<0.2"
    );
    loadInTimeline.fromTo(
      '.bottom-right-panel', 
      { opacity: 0, x: 10, y: 10 }, 
      { duration: 0.5, opacity: 1, x: 0, y: 0 },
      "<0.2"
    );
    loadInTimeline.fromTo(
      '.bottom-left-panel', 
      { opacity: 0, x: -10, y: 10 }, 
      { duration: 0.5, opacity: 1, x: 0, y: 0 },
      "<0.2"
    );
    loadInTimeline.fromTo(
      '.center-cutout', 
      { opacity: 0}, 
      { duration: 0.5, opacity: 1},
      "<0.2"
    );
    loadInTimeline.fromTo(
      '.center-panel', 
      { opacity: 0}, 
      { duration: 0.5, delay: 0.5, opacity: 1},
      "<0.2"
    );

    flag.current = gsap.timeline({ paused: true }).to('.dutch-flag', { 
      duration: 0.5, 
      opacity: 0.5 
    });

    aboutMePanel.current = gsap.timeline({ paused: true }).to('.about-me-panel', {
      duration: 0.3,
      opacity: 1
    })

    skater.current = gsap.timeline({ paused: true }).fromTo('.skater', {
      left: "-16vw",
    }, {
      left: "15vw", 
      duration: 3,
      ease: 'none',
    }).to('.skater', {
      rotateY: 180,
      duration: 0.5,
      ease: 'none'
    }).to('.skater', {
      left: "-16vw",
      duration: 3,
      ease: 'none'
    })

    Draggable.create(".word", {
      onDragEnd: (word) => {
        // ! Probably have to write custom collision
        if (Draggable.hitTest(word, '.center-cutout', 0)) {
          gsap.to('.word', {x: 0, y: 0, duration: 0.5});
        } 
        if (!Draggable.hitTest(word, '.top-right-panel', 0)) {
          gsap.to('.word', {x: 0, y: 0, duration: 0.5});
        }
        
      },
    })
  })

  return (
    <div className="container info-panels-container">
      <div
        ref={countryPanel}
        className='panel top-left-panel'
        onMouseEnter={() => flag.current?.play()}
        onMouseLeave={() => flag.current?.reverse()}
      > 
        <img className="dutch-flag" src={dutchFlag} alt='dutch flag' />
        <div className='panel-content-container left'>
          <h1>Dutch <br /> Webdeveloper</h1>
        </div>
      </div>
      <div className='panel top-right-panel'>
        <div className='panel-content-container right interactivity-panel'>
          <div className='combine-words'>
            {interactability.map((word, iterable) => {
              return (
                <h1 className='word' key={iterable}>{word}</h1>
              )
            })}
          </div>
          <div className='combine-words'>
            {interactabilitySubtext.map((word, iterable) => {
              return (
                <h4 className='word subtext' key={iterable}><i>{word}</i></h4>
              )
            })}
          </div>
        </div>
      </div>
      <div 
        className='panel bottom-left-panel'
        onMouseEnter={() => {
          if (!skater.current?.isActive()) skater.current?.restart();
        }}
      >
        <div className='panel-content-container left hobbies-panel'>
          {
            <div className='hobbies-hover'>
              <h1>In my spare time I like to</h1>
              <h3>Play games, learn to speedskate and program</h3>
            </div>
          }
          <div className='skater'>
            <SkaterLoop />
          </div>
        </div>
      </div>
      <div className='panel bottom-right-panel'>
        <div className='panel-content-container right experience-panel'>
          <h1 className='word-height'>Experience</h1>
          <h4 className='word-height'>
            <i>
              <a 
                className='external-link' 
                target='_blank' 
                href='https://www.linkedin.com/in/finn-de-jong/'
              >
                Check here
              </a>
            </i>
          </h4>
        </div>
      </div>
      <div ref={centerCutout} className='center-cutout'></div>
      <div 
        className='center-panel'
        onMouseEnter={() => aboutMePanel.current?.play()}
        onMouseLeave={() => aboutMePanel.current?.reverse()}
      >
        <img 
          src={profilePicture} 
          alt='My profile picture'
          className='profile-picture'
        />
        <h2 className='about-me'>Hover me</h2>
        <div className='about-me-panel'>
          <h1>About me</h1>
          <h2>Born: 14-08-2003</h2>
          <h2>From: Gouda, The Netherlands</h2>
          <a href=''></a>
        </div>
      </div>
    </div>
  );
}