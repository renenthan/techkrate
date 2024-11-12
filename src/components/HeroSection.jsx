
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import moval from '../assets/image/moval.png'
import bgVid from '/bgVid.mp4'
import CARS from "../assets/image/Cars.jpg"

gsap.registerPlugin(ScrollTrigger)


const HeroSection = () => {


  const panelsContainer = useRef(null)
  const panelsRef = useRef([])
  const heroTextRefs = useRef([])
  const subHeadingRefs = useRef([])

  useEffect(() => {
    const totalPanels = panelsRef.current.length
    const panels = panelsRef.current

    // Set up horizontal scroll for the panels
    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        end: () => '+=' + panelsContainer.current.offsetWidth,
        anticipatePin: 1,
      },
    })

    // Animate text for both sections
    heroTextRefs.current.forEach((heroTextRef, index) => {
      const words = heroTextRef.innerText.split(" ")
      heroTextRef.innerHTML = words
        .map(
          (word) => `<span class="inline-block"><span class="inline-block">${word}</span></span>`
        )
        .join(" ")

      const splitWords = heroTextRef.querySelectorAll("span > span")

      gsap.from(splitWords, {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power4.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: panelsRef.current[index],
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      })

      // Subheading fade-in animation
      gsap.fromTo(
        subHeadingRefs.current[index],
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: panelsRef.current[index],
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const panelClasses = 'w-screen h-screen flex justify-center items-center font-semibold text-2xl text-white p-4 relative'

  return (
    <div className="overflow-x-hidden">
      <div ref={panelsContainer} className="w-[200%] h-screen flex flex-nowrap">
        {/* First Section with Hero content */}
        <div ref={el => (panelsRef.current[0] = el)} className={`${panelClasses} bg-black`}>
          <video className="absolute top-0 right-0 w-2/3 h-full object-cover transform scale-x-[-1] z-0" autoPlay loop muted playsInline>
            <source src={bgVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 text-left w-full px-4 md:px-8 lg:px-16">
            <h1 ref={el => (heroTextRefs.current[0] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6">
              Experience Motor Surveying Like Never Before.
            </h1>
            <p ref={el => (subHeadingRefs.current[0] = el)} className="text-lg md:text-xl mt-4 max-w-2xl font-normal">
              Introducing Moval– an advanced platform designed to optimize motor claims processing for insurance companies and empower motor surveyors
              with customizable, AI-driven features such as Damage Detection & Real-Time Reporting.
            </p>
          </div>
          <div className="relative z-20 absolute bottom-10 right-10 w-1/3 max-w-md">
            {/* <img src={moval} alt="Moval" layout="responsive" /> */}
          </div>
        </div>

        {/* Second Section */}
        <section ref={el => (panelsRef.current[1] = el)} className={`${panelClasses} bg-black`}>
        <video className="absolute top-0 right-0 w-2/3 h-full object-cover transform scale-x-[-1] z-0" autoPlay loop muted playsInline>
            <source src={bgVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-20 text-left w-[200%] px-4 md:px-8 lg:px-16">
            <h2 ref={el => (heroTextRefs.current[1] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6">
              Revolutionizing Motor Claims Processing
            </h2>
            <p ref={el => (subHeadingRefs.current[1] = el)} className="text-lg md:text-xl mt-4 max-w-2xl">
              Our cutting-edge AI technology streamlines the entire claims process, reducing turnaround times and improving accuracy. Experience the future of motor surveying with Moval.
            </p>
          </div>
          <div className="relative z-20 absolute bottom-10 left-10 w-1/3 max-w-md">
            {/* <img src={CARS} width={400} height={300} alt="AI Technology" layout="responsive" /> */}
          </div>
        </section>
      </div>
    </div>
  )
}
export default HeroSection;