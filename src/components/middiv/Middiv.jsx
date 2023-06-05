import axios from 'axios';
import React, { useRef} from 'react'

function Middiv() {
  const txt = useRef()
  const handleSearch = async(event) =>{
    event.preventDefault();
    localStorage.setItem('txt', txt.current.value)
    window.location.replace("/results")
  }
  return (
    <div style={{ backgroundColor: "rgb(255,192,23)", color: 'black', padding: '60px', fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif', display:'flex', alignItems:'center', justifyContent:'space-around'}}>
      <div>
        <h2 style={{ fontSize: '90px', fontWeight:'140' }}>
          Stay curious.
        </h2>
        <p style={{ fontSize: '20px' }}>
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>
      <div>
        <input ref={txt} style={{borderBottom:'2px solid black', fontSize:'25px'}} placeholder='Search an article'></input>
        <button onClick={handleSearch}>
          <img src='https://cdn-icons-png.flaticon.com/512/3031/3031293.png' style={{width:'25px'}}></img>
        </button>
      </div>
    </div>

  )
}

export default Middiv