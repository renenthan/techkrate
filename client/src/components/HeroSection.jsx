"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import bgVid from '/bgVid.mp4'
import ThirdSection from './ThirdSection'
import Navbar from './Navbar'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const HeroSection = () => {
  const containerRef = useRef(null)
  const textContainersRef = useRef([])
  const heroTextRefs = useRef([])
  const subHeadingRefs = useRef([])
  const thirdSectionRef = useRef(null)

  const [thirdSectionOffset, setThirdSectionOffset] = useState(0)

  useEffect(() => {
    const textContainers = textContainersRef.current
    const totalSections = textContainers.length

    gsap.to(textContainers, {
      xPercent: -100 * (totalSections - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalSections - 1),
        end: () => '+=' + window.innerHeight * (totalSections - 1),
        anticipatePin: 1,
      },
    })

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
          trigger: textContainersRef.current[index],
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      })

      gsap.fromTo(
        subHeadingRefs.current[index],
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: textContainersRef.current[index],
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    if (thirdSectionRef.current) {
      setThirdSectionOffset(thirdSectionRef.current.offsetTop)
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const scrollToThirdSection = () => {
    if (thirdSectionRef.current) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: thirdSectionRef.current,
          offsetY: 0,
        },
        ease: "power3.inOut",
      })
    }
  }

  return (
    <>
      <Navbar thirdSectionOffset={thirdSectionOffset} />
      <div ref={containerRef} className="overflow-hidden h-screen relative">
        <video className="absolute top-0 right-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="relative z-20 h-full flex">
          <div ref={el => (textContainersRef.current[0] = el)} className="min-w-full h-full flex items-center">
            <div className="text-left w-full px-4 md:px-8 lg:px-16">
              <h1 ref={el => (heroTextRefs.current[0] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6 text-white">
                Experience Motor Surveying Like Never Before.
              </h1>
              <p ref={el => (subHeadingRefs.current[0] = el)} className="text-lg md:text-xl mt-4 max-w-2xl font-normal text-white">
                Introducing Moval– an advanced platform designed to optimize motor claims processing for insurance companies and empower motor surveyors
                with customizable, AI-driven features such as Damage Detection & Real-Time Reporting.
              </p>
            </div>
          </div>

          <div ref={el => (textContainersRef.current[1] = el)} className="min-w-full h-full flex items-center">
            <div className="text-left w-full px-4 md:px-8 lg:px-16">
              <h2 ref={el => (heroTextRefs.current[1] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6 text-white">
                Revolutionizing Motor Claims Processing
              </h2>
              <p ref={el => (subHeadingRefs.current[1] = el)} className="text-lg md:text-xl mt-4 max-w-2xl text-white">
                Our cutting-edge AI technology streamlines the entire claims process, reducing turnaround times and improving accuracy. Experience the future of motor surveying with Moval.
              </p>
            </div>
          </div>

          <div ref={el => (textContainersRef.current[2] = el)} className="min-w-full h-full flex items-center">
            <div className="text-left w-full px-4 md:px-8 lg:px-16">
              <h2 ref={el => (heroTextRefs.current[2] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6 text-white">
                Transforming Surveying
              </h2>
              <p ref={el => (subHeadingRefs.current[2] = el)} className="text-lg md:text-xl mt-4 max-w-2xl text-white">
                Use advanced analytics to redefine how motor claims are handled, minimizing errors and improving satisfaction rates.
              </p>
            </div>
          </div>

          <div ref={el => (textContainersRef.current[3] = el)} className="min-w-full h-full flex items-center">
            <div className="text-left w-full px-4 md:px-8 lg:px-16">
              <h2 ref={el => (heroTextRefs.current[3] = el)} className="text-6xl md:text-8xl font-bold leading-[1] mb-6 text-white">
                Join the Revolution
              </h2>
              <p ref={el => (subHeadingRefs.current[3] = el)} className="text-lg md:text-xl mt-4 max-w-2xl text-white">
                Be a part of the movement to bring innovation and speed to motor claims processing with Moval.
              </p>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToThirdSection}
          className="group fixed bottom-8 right-8 w-16 h-16 bg-black rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 z-30"
          aria-label="Scroll to third section"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45 transition-colors duration-300">
              <div 
                className="absolute w-3 h-3 border-r border-b border-white transform rotate-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </button>
      </div>

      <div ref={thirdSectionRef}>
        <ThirdSection />
      </div>
    </>
  )
}

export default HeroSection
