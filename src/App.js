import {BsFillEnvelopeOpenFill} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiTwotonePhone} from 'react-icons/ai'

import React, {useState, useEffect} from 'react'
import './App.css';

const url = 'https://randomuser.me/api/'
const defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {

  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  const handleRandomUser = async ()=> {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    const user = data.results[0] 
    const {phone, email} = user
    const {large:image} = user.picture
    const {first, last} = user.name

    const newPerson = {
      image, 
      phone, 
      email, 
      name: `${first} ${last}`
    }
    console.log(newPerson)
    setPerson(newPerson)
    setLoading(false)
    setTitle("name")
    setValue(newPerson.name)
  }

  useEffect(()=> {
    handleRandomUser()
  }, [])

  const handleValue = (e)=> {
    //extract title and value
    // set title 
    // set value
    // setValue(e.target)
    if(e.target.dataset.label) {
      console.log(e.target.dataset.label)
      const title = e.target.dataset.label
      const value = person[title]
      setValue(value)
      setTitle(title)
    }
  }

   return (
    <div className="App">
      <section className="section-user">
        <div className="top-bar"></div>
        <div className="bottom-bar">
          <div className="user-info">
            <img className="circle-image" src={(person && person.image) || defaultImg} alt="Random user"/>
            <p className="user-title">my {title} is</p>
            <p className="user-value">{value}</p>
  
            <div className="user-icons">
              <button className="icon"
                      data-label="email"
                      onMouseOver={handleValue}
              >
                <BsFillEnvelopeOpenFill data-label="email"/>
              </button>
              <button className="icon"
                      data-label="name"
                      onMouseOver={handleValue}
              >
                <BsFillPersonFill data-label="name" />
              </button>
              <button className="icon"
                      data-label="phone"
                      onMouseOver={handleValue}
              >
                <AiTwotonePhone data-label="phone"/>
              </button> 
            </div>

            <button className="btn" onClick={handleRandomUser}>
              {loading ? "loading..." : "Random User"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
