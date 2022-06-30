import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';



export default function Newsletter() {
 


  return (
    <section className="news-letter">
            <header>Newsletter</header>
            <p>Get timely updates from your favorite products.</p>
            <div>
                <input type="text" placeholder="Your Email"/>
                <ArrowRight className='class-arrow'/>
            </div>
    </section>
  )
}
