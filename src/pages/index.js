import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/layout.scss'

const IndexPage = () => {
  const [ gate, setGate ] = useState('true')

  useEffect( () => {
    setTimeout( () => {
      setGate('false')
    }, 2000)
  }, [])

  var contentInside
  if (gate === 'true') {
    contentInside = ''
  } else {
    contentInside = (
      <>
        <Link to='/travel' className='linksMainTwo'>(Travel </Link>{' && '}<Link to='/food/' className='linksMainTwo'> Food) </Link>{' || '}<Link to='/program/' className='linksMainTwo'> Code</Link>
      </>
    )
  }


  return (
    <div className='overallDiv'>
      <SEO title="Home" />
        <div className='navBarMain'>
          <div className='dropDownHamburger'>
            <div className='lineMain'></div>
            <div className='lineMain'></div>
            <div className='lineMain'></div>
          </div>
          <div className='dropdownContentMain'>
            <div className='linkStyleMain'>
              <Link to="/travel/" className='linksMain'>Travel</Link>
            </div>
            <div className='linkStyleMain'>
              <Link to="/food/" className='linksMain'>Eat</Link>
            </div>
            <div className='linkStyleMain'>
              <Link to="/program/" className='linksMain'>Program</Link>
            </div>
            <div className='linkStyleMain'>
              <Link to="/credits/" className='linksMain'>Contact</Link>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='indexLine'>{contentInside}</div>
        </div>
    </div>
  )
}

export default IndexPage
