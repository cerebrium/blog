import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"

const Travel = () => {
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
    <SEO title="Home" />
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
          <Link to="/program/" className='links'>Program</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/credits/" className='links'>Credits</Link>
        </div>
      </div>
    </div>
    <div className='modeToggle'>
      <label class='switch'>
        <input type='checkbox' onClick={toggleMode}/>
        <span class='slider round'></span>
      </label>
    </div>
    <div className='contentTravel'>
      <h1 className='indexTitle'>Travel</h1>
    </div>
  </div>
)}

export default Travel
