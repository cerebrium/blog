import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"
import '../components/layout.scss'

const Program = () => {
  const [ line, setLine ] = useState("line")
  const [ linkStyle, setLinkStyle ] = useState("linkStyle")
  const [ dropDownContent, setDropDownContent ] = useState("dropdownContent")
  const [ navBar, setNavBar ] = useState("navBar")
  const [ mode, setMode ] = useState("overallDivMain")


  useEffect ( () => {
    let myVar = props('modeToggle')
    if (myVar) {
      setMode(myVar)
      if (myVar === 'overallDivMainDark') {
        setLine('lineDark')
        setLinkStyle('linkStyleDark')
        setDropDownContent('dropdownContentDark')
        setNavBar('navBarDark')
      }
    }
  }, [])

  const toggleMode = (e) => {
      if (mode === 'overallDivMain') {
        setMode('overallDivMainDark')
        setLine('lineDark')
        setLinkStyle('linkStyleDark')
        setDropDownContent('dropdownContentDark')
        setNavBar('navBarDark')
        props({
          modeToggle: 'overallDivMainDark'
        })
      } else {
        setMode('overallDivMain')
        setLine('line')
        setLinkStyle('linkStyle')
        setDropDownContent('dropdownContent')
        setNavBar('navBar')
        props({
          modeToggle: 'overallDivMain'
        })
      }
    }
  return (
    <div className={mode}>
      <SEO title="Programming" />
      <div className={navBar}>
        <div className='dropDownHamburger'>
          <div className={line}></div>
          <div className={line}></div>
          <div className={line}></div>
        </div>
        <div className={dropDownContent}>
          <div className={linkStyle}>
            <Link to="/" className='links'>Home</Link>
          </div>
          <div className={linkStyle}>
            <Link to="/food/" className='links'>Eat</Link>
          </div>
          <div className={linkStyle}>
            <Link to="/travel/" className='links'>Travel</Link>
          </div>
          <div className={linkStyle}>
            <Link to="/credits/" className='links'>Contact</Link>
          </div>
        </div>
      </div>
      <div className='modeToggle'>
        <label className='switch'>
          <input type='checkbox' onClick={toggleMode}/>
          <span className='slider round'></span>
        </label>
      </div>
      <div className='content'>
        <h1 className='indexTitle'>Program</h1>
        <div className='programText'>
          <h2>The format for this page is different, little boxes with nifty pictures and blurbs about cool stuff won't cut it for actually doing things! Instead here there are a variety of articles I have read and enjoyed, and stuff I am writing. If anything you find looks not true or could be optimized, please reach out to me on the contact page... I am relatively new and looking to learn as much as I can!</h2>
        </div>
        <div className='programLinkBox'>
          <h2 className='noSpace'>Intro Title Effect</h2>
          <h3 className='noSpace'>The little ball that turns into my title on the home page is explained <Link to='/introTitleBlurb/' className='inTextLink'>HERE</Link></h3>
          <h3 className='noSpace'>Author: Nick Shankland</h3>
        </div>
      </div>
    </div>
  )
}

export default Program
