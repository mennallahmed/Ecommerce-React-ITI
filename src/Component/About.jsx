import React from 'react'

export default function About() {
  let info=[
    {
      number:"30",
      title:"COUNTRIES"
    },
    {
        number:"500+",
        title:"STORES"
      },
      {
        number:"14.000+",
        title:"EMPLOYEES"
      },
      {
        number:"34%",
        title:"GROWTH RATE"
      },
  ]
  return (
  <div>
      <main className='about-main'></main>
      <span className="about-span">ABOUT US</span>
      <p className="about-p">
          As ECOMM, we started an excitement journey in 2005. In this journey we set off to bring a fresh new perspective to Turkish fashion and bring together our brand new, quality and unique designs with consumers at four corners of the World, we put our signature under very important Works and achievements.
      </p>
      <section className="info">
        {info.map((item,index)=>{
            return(
                <div key={index} className="container">
                    <div>{item.number}</div>
                    <p>{item.title}</p>
                </div>
            )
        })}
      </section>
      <div className="img-container">
          <img className="about-img" alt='background' src="http://corporate.defacto.com.tr/assets/img/hakkimizda.jpg"/>
          <p className="about-p">We were born in Turkey and realized our purpose to become a global brand. We have adopted innovation and renewal as a corporate culture. In this line, we have created sub-brands aimed to needs of everyone. Today, we touch lives of our consumers in more than 100 countries at more than 500 stores.</p>
      </div>
  </div>
  )
}
