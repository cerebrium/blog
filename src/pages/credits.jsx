import React, { useState, useEffect} from "react"
import { Link } from "gatsby"
import { props } from 'gatsbypropshandler'
import SEO from "../components/seo"
import '../components/layout.scss'

const Credits = () => {
  const [ line, setLine ] = useState("line")
  const [ buttonStyle, setButtonStyle ] = useState("contactButton")
  const [ linkStyle, setLinkStyle ] = useState("linkStyle")
  const [ dropDownContent, setDropDownContent ] = useState("dropdownContent")
  const [ navBar, setNavBar ] = useState("navBar")
  const [ mode, setMode ] = useState("overallDivMain")
  const [ status, setStatus ] = useState('')

  useEffect ( () => {
    let myVar = props('modeToggle')
        setLine('lineDark')
        setLinkStyle('linkStyleDark')
        setDropDownContent('dropdownContentDark')
        setNavBar('navBarDark')
        setButtonStyle('contactButtonDark')
  }, [])

    const submitForm = (ev) => {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
          form.reset();
          setStatus("SUCCESS") 
      } else {
          setStatus("ERROR")
      }
      };
      xhr.send(data);
  }

  return (
    <div className='contentContact'>
      <div className='contact'>
      <SEO title="Contact" />
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
            <Link to="/travel/" className='links'>Travel</Link>
          </div>
        </div>
      </div>
          <h1 className='indexTitleContact'>Drop me a line!</h1>
          <form onSubmit={submitForm} action='https://formspree.io/meqelkae' method="POST" className='myForm'>
              <label className='labels'>Name:</label>
              <input type="text" name="name" className='inputBars'/>
              <label className='labels'>Email:</label>
              <input type="email" name="email" className='inputBars'/>
              <label className='labels'>Message:</label>
              <textarea type="textarea" rows='15' cols='16' name="message" className='myTextArea'></textarea>
              {status === "SUCCESS" ? <p>Thanks!</p> : <button className='contactButton'>Submit</button>}
              {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
  )
}

export default Credits
