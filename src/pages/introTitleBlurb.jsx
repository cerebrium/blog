import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { props } from 'gatsbypropshandler'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IntroTitleBlurbs = () => {
    const data = useStaticQuery(graphql`
    query {
      homeCss: file(relativePath: { eq: "firstProgrammingBit/homeCss.png" }) {
        childImageSharp {
          fluid( quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      homeCssEffect: file(relativePath: { eq: "firstProgrammingBit/homeCssEffects.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      htmlOfFirstPage: file(relativePath: { eq: "firstProgrammingBit/htmlOfFirstPage.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      conditionalRenderingHtml: file(relativePath: { eq: "firstProgrammingBit/conditionalRenderingHtml.png" }) {
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
            <div className='content'>
                <h1 className='indexTitle'>Intro Screen Effect</h1>
                <div className='programText'>
                    <h3 className='programActualContent'>
                        The effect is pretty stright forward conceptually: have a ball start at the low on the screen and go up util it reaches the point where we want the title... then have it turn into the title. In order to do this I have used some css, and some state in Gatsby, and some conditional rendering. <br />
                        The first part is the creation of the words and the divs themselves in Gatsby. That looked like this:
                            <Img fluid={data.htmlOfFirstPage.childImageSharp.fluid} className='gatsbyImagesProgramOne'/>
                        Here I am using the 'content' class in a grid system for my css just to make the top part stay where it belongs. After that there is a reference to state item 'contentInside'. This makes more sense after I show you the conditional rendering bit:
                        <Img fluid={data.conditionalRenderingHtml.childImageSharp.fluid} className='gatsbyImagesProgramOne'/>
                        What is happeneing here is I am defining a gate in the state that switches true (could use a boolean here) after 2 second so that the div turn from a ball into some text. The links there are from the Gatsby link import, just so that when you click the workds they send you to my pages. Next I will show you the css for the div and the text:
                        <Img fluid={data.homeCss.childImageSharp.fluid} className='gatsbyImagesProgramOne'/>
                        This might not make any sense at first, but I am using scss and I have included a bit extra to give some attribution to the title photo which isn't mine! I grabbed that photo from unsplash.com and the author is aleks dahlberg. Beyond that, the '@extend' is just me using classes I have already created to keep my css easier. The relevant parts to the effect are the 'indexTitle' and 'indexLine' classes. The title sets the size for the letters, and centers them ( and removes the link underlines ) whilst the indexLine class sets a color for the ball and runs the effect ( notice the effect is the same time as the 'setTimeout' in the 'useEffect' earlier ).
                        The effect used looks like this: 
                        <Img fluid={data.homeCssEffect.childImageSharp.fluid} className='gatsbyImagesProgramOne'/>
                        The top part there is how I like to seperate my code in css so that it is easier to find stuff. The rest is the creation of the ball, the movement of the ball, and the the change of the background color of the div so you cant see it anymore. There appears to be some redundacy in my code in the the font-size is declared twice!
                    </h3>
                    <div className='spacer'></div>
                </div>
            </div>
        </div>
    )
}

export default IntroTitleBlurbs