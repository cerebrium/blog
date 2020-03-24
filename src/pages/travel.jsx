import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
    <SEO title="Home" />
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
          <Link to="/credits/" className={links}>Credits</Link>
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
      <div className={imageContainers}>
        <div className='innerContainer'>
          <Img fluid={data.beachBeer.childImageSharp.fluid} className='gatsbyImages'/>
        </div>
        <div className='textInsideBox'>
          <h3>This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?</h3>
        </div>
      </div>
      <div className={imageContainersRight}>
        <div className='textInsideBox'>
          <h3>This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?This is a picture of me on the beach in Bali enjpying a local beer and espresso. Basically my favorite two things. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere harum officiis nisi accusamus reprehenderit, tenetur consectetur deserunt molestiae voluptatum vitae labore fugiat necessitatibus officia eveniet a quidem ipsam fuga?</h3>
        </div>
        <div className='innerContainer'>
          <Img fluid={data.espressoAndCookie.childImageSharp.fluid} className='gatsbyImages'/>
        </div>
      </div>
    </div>
  </div>
)}

export default Travel
