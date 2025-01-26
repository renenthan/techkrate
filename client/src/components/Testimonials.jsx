import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'

const testimonials = [
  {
    quote: "With IRDA-compliant reporting, mobile app-based surveys, real-time damage marking, and seamless data reusability, Moval sets a new standard in efficiency and precision for data-driven claim management.",
    author: "N. Vishwanath",
    company: "IIISLA Fellow Member"
  },
  {
    quote: "Moval’s intuitive cloud platform and mobile app empower surveyors with state-of-the-art tools to execute precise inspections and deliver comprehensive reports effortlessly.",
    author: "Sandeep Saxena",
    company: "Surveyor & Loss Assessor"
  },
  {
    quote: "As a chartered engineer, CARS offers an intuitive, hybrid platform that simplifies report management, enhances staff coordination, and streamlines administrative tasks with its powerful mobile app integration.",
    author: "Naveen Arora",
    company: "ACE Consulting Pvt. Ltd."
  },
  {
    quote: "Techkrate exemplifies technological innovation, delivering transformative solutions that drive efficiency, scalability, and digital evolution for modern enterprises.",
    author: "RNS Kushwaha",
    company: "IIISLA Fellow Member"
  },
  {
    quote: "Moval’s AI-driven modules seamlessly integrate precision and speed, revolutionizing motor survey processes with unparalleled claim analysis and automation.",
    author: "Manoj Sharma",
    company: "RMS Associates"
  }
];


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const progressRefs = useRef([])

  useEffect(() => {
    const animateProgress = (index) => {
      const progressBar = progressRefs.current[index]
      if (progressBar) {
        progressBar.style.transition = 'width 5s linear'
        progressBar.style.width = '100%'
      }
    }

    const resetProgress = () => {
      progressRefs.current.forEach((bar) => {
        if (bar) {
          bar.style.transition = 'none'
          bar.style.width = '0%'
        }
      })
    }

    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % testimonials.length)
        setIsAnimating(false)
        resetProgress()
        animateProgress((currentIndex + 1) % testimonials.length)
      }, 500)
    }, 5000)

    resetProgress()
    animateProgress(currentIndex)

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <div className="w-full px-6 sm:px-12 md:px-20 lg:px-44 py-16 sm:py-24 md:py-32 bg-black">
      <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            What our customers think
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 text-white">
          Delve into the experiences of our users who have leveraged our platform to optimize workflows and enhance precision. The following testimonials provide an overview of the substantial benefits our solutions have delivered.
          </p>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div key={index} className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  className="h-full bg-white rounded-full"
                  style={{ width: index === currentIndex ? '0%' : '0%' }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] bg-white text-black overflow-hidden">
          <div
            className={`absolute inset-0 p-4 sm:p-6 md:p-8 transition-transform duration-500 ease-out ${
              isAnimating ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="h-full flex flex-col justify-between">
              <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
                &quot;{testimonials[currentIndex].quote}&quot;
              </p>
              <div>
                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-gray-900 text-xs sm:text-sm md:text-base">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  )
}
