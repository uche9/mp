 import './header.css'
 import svg_data from '../svg/svg_data.js'
 
  import React, { useState } from 'react'

 function Header(){
  

  const [menuStatus, setMenuStatus]=useState(false)
  const [count, setCount]=useState(0)
    
    var handleMenu=()=>{
      setMenuStatus(prevstatus=> !prevstatus)
      setInterval(()=>{
        
        setCount(prevcount=>prevcount+1)
      },100)
    }
    
    var link_data=[
      {
        id:1,
        name:'Home',
      },
      {
        id:2,
        name:'About',
      },
      {
        id:3,
        name:'Portfolio',
      },
      {
        id:4,
        name:'Contact',
      }
    ]

    //Handle Navigation
    function handleNavigation(el){
       window.location=el.name.toLowerCase()
    }

    const link_array=link_data.map(el=>{
      return(
         <div id={el.name} className='menu--item animate' onClick={()=>handleNavigation(el)}>
               {el.name} 
         </div>
      )
    })
   
  //slice array
  
   return(
    <div className='header--container'>
       <div className='nav--bar'>
          <div className='home'>
              <a href='home' >{ svg_data[1].code }</a> 
          </div>
          { menuStatus?
           <div className='menu'   onClick={handleMenu}>
              { svg_data[2].code }
          </div> 
          : 
          <div className='close'   onClick={handleMenu}>
              { svg_data[0].code }
          </div>
          }
          
       </div>
       {
        menuStatus?
        <div className='menu--box' id='menu--box'>
            {link_array.slice(0,count)}
       </div>
         :
         ''
       }
    </div>
   )
 }
 export default Header;
