import { useRef, useEffect, useState } from 'react'
import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Images from '../Images';


function Home() {
  const sliderRef = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth)
  }, [])

  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-img'>
      <div className='header'>
      <div className='text'>
          
          <h1>why an artist platform ?</h1>
          <br />
          <p >
          In the era of modern technology, the world is witnessing astonishing advancements in various fields, 
          including art and culture. With the growing interest in contemporary arts and the expansion of the artist community,
           the Artist Platform emerges as one of the most significant technological initiatives that empower artists to express themselves and share their works with the world.
            
          </p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>



          <br/>
          <p className='par'>Also the Artist Platform serves as a virtual creative hub that brings together artists, admirers,
             and art enthusiasts, allowing artists, both emerging and established, to showcase their works and exchange ideas, 
             experiences, and knowledge.</p>
        </div>
        
    
      
      
        </div>
        </div>
     

      <div className='part'><h2>Examples of some of our work </h2></div>

      <motion.div ref={sliderRef} className='slider'>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-slider'>
          {Images.map((image) => (
            <motion.div className='item' key={image}>
              <img src={image} alt='Slider Item' />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home
