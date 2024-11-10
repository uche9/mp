//import svg_data from '../svg/svg_data.js'

import './portfoliobody.css'
import dme from './dmadeeasy.png'
import kwn from './kwn.png'
import nsibidi from './nsibidi.png'
import waka from './waka.png'
import jiko from './jiko.png'
import dolar from './dolar.png'


function PortfolioBody(){

    var portfolio_data=[
        {
            image:dme,
            title:'Delivery Made Easy',
            description:'This is a logistics web application',
            preview:'http://dmeazy.vercel.app/',
            codes:'https://github.com/uche9/dmeazy'
        },
        {
            image:waka,
            title:'Waka',
            description:'This is a tour guide',
            preview:'http://wakatg.vercel.app/',
            codes:'https://github.com/uche9/waka'
        },
        {
            image:dolar,
            title:'Dolar',
            description:'This is an E-commerce web application',
            preview:'',
            codes:'https://github.com/uche9/dolar'
        },
        {
            image:jiko,
            title:'Jiko',
            description:'This is a chat application',
            preview:'',
            codes:'https://github.com/uche9/JIKO'
        },
        {
            image:nsibidi,
            title:'Nsibidi Alpha',
            description:'Mini-calculator for binary operations',
            preview:'https://nsibidialpha.vercel.app/',
            codes:'https://github.com/uche9/nsibidialpha'
        },
        {
            image:kwn,
            title:'Kwicknews network',
            description:'News website',
            preview:'https://kwicknewsnetwork.vercel.app/',
            codes:'https://github.com/uche9/FEFlash'
        },
                    
    ]

    var porttfolio_array=portfolio_data.map( el=>(
        <div className='portfolio--item'>
               <div className='portfolio--item--image'>
                      
                      <img  src={el.image} width='100%' alt='port'/>
               </div>
               <div>
                      <b>Project Title:</b> <i>{el.title}</i>
               </div>
               <div>
                      <b>Project Description:</b> <i>{el.description}</i>
               </div>
               <div>
                      <a href={ '' || el.preview}> <i>project preview:</i></a>
                </div>     
               <div>
                      <a href={el.codes}> <i>project codes:</i></a>
                </div>     
        </div>
    ))
    return(
       <div className="portfolio--container">
            <div className='portfolio--welcome'>
                Welcome to my portfolio!
            </div>
            <div className='portfolio--sup--container'>
                  {porttfolio_array}
            </div>
       </div>
       
       
    )
}

export default PortfolioBody;