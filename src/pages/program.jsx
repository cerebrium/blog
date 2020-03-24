import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"

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
        <label class='switch'>
          <input type='checkbox' onClick={toggleMode}/>
          <span class='slider round'></span>
        </label>
      </div>
      <div className='content'>
        <h1>Program</h1>
      </div>
    </div>
  )
}

export default Program
