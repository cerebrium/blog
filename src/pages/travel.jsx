import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import '../components/layout.scss'

const Travel = () => {
  const data = useStaticQuery(graphql`
    query {
      beachBeer: file(relativePath: { eq: "beachBeer.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      espressoAndCookie: file(relativePath: { eq: "espressoAndCookie.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      backgroundSF: file(relativePath: { eq: "backgroundSF.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [ line, setLine ] = useState("line")
  const [ linkStyle, setLinkStyle ] = useState("linkStyle")
  const [ links, setLinks ] = useState("links")
  const [ dropDownContent, setDropDownContent ] = useState("dropdownContent")
  const [ navBar, setNavBar ] = useState("navBar")
  const [ imageContainers, setimageContainers ] = useState("imageContainer")
  const [ imageContainersRight, setimageContainersRight ] = useState("imageContainerRight")
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
        setimageContainers('imageContainerDark')
        setimageContainersRight('imageContainerRightDark')
        setLinks('linksDark')
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
        setimageContainers('imageContainerDark')
        setimageContainersRight('imageContainerRightDark')
        setLinks('linksDark')
        props({
          modeToggle: 'overallDivMainDark'
        })
      } else {
        setMode('overallDivMain')
        setLine('line')
        setLinkStyle('linkStyle')
        setDropDownContent('dropdownContent')
        setNavBar('navBar')
        setimageContainers('imageContainer')
        setimageContainersRight('imageContainerRight')
        setLinks('links')
        props({
          modeToggle: 'overallDivMain'
        })
      }
    }

return (
  <div className={mode}>
    <SEO title="Travel" />
    <div className={navBar}>
      <div className='dropDownHamburger'>
        <div className={line}></div>
        <div className={line}></div>
        <div className={line}></div>
      </div>
      <div className={dropDownContent}>
        <div className={linkStyle}>
          <Link to="/" className={links}>Home</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/food/" className={links}>Eat</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/program/" className={links}>Program</Link>
        </div>
        <div className={linkStyle}>
          <Link to="/credits/" className={links}>Contact</Link>
        </div>
      </div>
    </div>
    <div className='modeToggle'>
      <label className='switch'>
        <input type='checkbox' onClick={toggleMode}/>
        <span className='slider round'></span>
      </label>
    </div>
    <div className='contentTravel'>
      <h1 className='indexTitle'>Travel</h1>
      <div className={imageContainers}>
        <div className='innerContainer'>
          <Img fluid={data.beachBeer.childImageSharp.fluid} className='gatsbyImages'/>
        </div>
        <div className='textInsideBox'>
          <h2>This is a picture of me on the beach in Bali enjoying a local beer and espressos. Basically my favorite two things. The coffee in Asia where I have been was very sweet. Because of this I opted for espressos whenever possible. Even the espressos came with cookies as you can see! <br /> The sunsets in Bali are fantastic, and really the people are all lovely. </h2>
        </div>
      </div>
      <div className={imageContainersRight}>
        <div className='textInsideBox'>
          <h2>In Bali we went to this hotel on the beach for their chicken satay and espressos before going out to boogie board. Most people surf, but boogie boarding was easier for me and my significant other to get into since it has a lower skill barrier for entry. Also its super fun and you can get a better tan! :) This picture is one of the espressos we had at the hotel. The little cookies they served there were absolutely amazing. You wouldn't think to go to Bali for the little cookies they serve with the espressos, but I would go back just for them!</h2>
        </div>
        <div className='innerContainer'>
          <Img fluid={data.espressoAndCookie.childImageSharp.fluid} className='gatsbyImages'/>
        </div>
      </div>
      <div className={imageContainers}>
        <div className='innerContainer'>
          <Img fluid={data.backgroundSF.childImageSharp.fluid} className='gatsbyImages'/>
        </div>
        <div className='textInsideBox'>
          <h2>This is a little beach between Los Angeles and San Francisco. One of the prettiest places I have ever been. Only down side is the beach is nearly impossible to get to, however it is very easy to get to the top for a lovely view and some sun.</h2>
        </div>
      </div>
    </div>
  </div>
)}

export default Travel
