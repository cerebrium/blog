import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { props } from 'gatsbypropshandler'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// comment
const Food = () => {
  const data = useStaticQuery(graphql`
    query {
      chickenInHanoi: file(relativePath: { eq: "chickenInHanoi.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      espressoAndDrink: file(relativePath: { eq: "espressoAndDrink.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sushi: file(relativePath: { eq: "sushi.jpg" }) {
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
      <SEO title="Foods" />
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
              <Link to="/travel/" className='links'>Travel</Link>
            </div>
            <div className={linkStyle}>
              <Link to="/program/" className='links'>Program</Link>
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
      <div className='contentTravel'>
        <h1 className='indexTitle'>Eats</h1>
        <div className={imageContainers}>
          <div className='innerContainer'>
            <Img fluid={data.chickenInHanoi.childImageSharp.fluid} className='gatsbyImages'/>
          </div>
          <div className='textInsideBox'>
            <h2>This is some chicken I got in Saigon. Generally I did not enjoy Saigon as much as Hanoi, but htis chicken was fantastic. It was one of the first meals that we got in the city and it really made me happy. The rice there was from the bottom of the pan and was kinda crunchy, but in a good way. and the chicken was so soft it truly was very well done!</h2>
          </div>
        </div>
        <div className={imageContainersRight}>
          <div className='textInsideBox'>
            <h2>Bali really is one of my favorite places on earth, and you can probably tell from all of the pictures from there! This was me having another espresso and cookie combination at a beach hotel, but I also opted for one of their local juices there. This one was the Bali tonic, but they were all good. They are just fruit juice freshly squeezed and put into a bottle with healthy spices and things. Carrot and turmeric actually go quite well with each other... as I found out on this trip!</h2>
          </div>
          <div className='innerContainer'>
            <Img fluid={data.espressoAndDrink.childImageSharp.fluid} className='gatsbyImages'/>
          </div>
        </div>
        <div className={imageContainers}>
          <div className='innerContainer'>
            <Img fluid={data.sushi.childImageSharp.fluid} className='gatsbyImages'/>
          </div>
          <div className='textInsideBox'>
            <h2>This is sushi! No i did not go to Japan, although I really wish I could! Definitely a future travel location, but this sushi is to be found in Bali... of course! The actual taste of this sushi was pretty good, for being completely vegetarian. That being said I really liked the image more than anything else. The way the mushrooms come sprouting out of the little roll was really cool. Also there is fruit in it! </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
