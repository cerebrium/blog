import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/layout.scss'

const IndexPage = () => (
  <div className='overallDiv'>
    <SEO title="Home" />
      <div className='navBar'>
        <div className='dropDownHamburger'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <div className='dropdownContent'>
          <div className='linkStyle'>
            <Link to="/travel/" className='links'>Travel</Link>
          </div>
          <div className='linkStyle'>
            <Link to="/food/" className='links'>Eat</Link>
          </div>
          <div className='linkStyle'>
            <Link to="/program/" className='links'>Program</Link>
          </div>
          <div className='linkStyle'>
            <Link to="/credits/" className='links'>Credits</Link>
          </div>
        </div>
      </div>
      <div className='content'>
        <h1 className='indexTitle'>Welcome to my <span>Blog</span></h1>
        <h3 className='indexContent'>
          This is a page where any and all things will be discussed! Mostly I am into travelling, food, and programming. As such there are three different main pages, and within those pages all sorts of fun stuff and discussions. Not all of the pictures are mine (for instance this background picture of Bali!), for the authors names there is a credits page. My mind is usually in Bali, so apologies if there are references and pictures everywhere. If you would like to contact me for any reason there is also a contact page. Don't be afraid to leave me a note. Also I make blogs and portfolios for fun for people so if you would like one let me know!
        </h3>
      </div>
  </div>
)

export default IndexPage
