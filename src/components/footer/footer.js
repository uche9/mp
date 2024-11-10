import svg_data from '../svg/svg_data'
import './footer.css'

function Footer(){


   
   //Social media
   var social_media_data=[
    {
       id:1,
       name:'facebook',
       icon:svg_data[6].code,
       value:'',
    },
   {
        id:2,
        name:'github',
        icon:svg_data[7].code,
        value:'',
    },
    {
        id:3,
        name:'linkedin',
        icon:svg_data[8].code,
        value:'',
    },
    {
        id:4,
        name:'X',
        icon:svg_data[11].code,
        value:'',
    }
]


var social_media_data_array=social_media_data.map(el=>(

     <div style={{backgroundColor:'red'}}>
         <a href={el.value}>{" "}{el.icon}</a>
     </div>

))


    return(
        <div className='container--footer'>
            
            <div className='social--media--data--array'>{social_media_data_array}</div>
            <div>
                designed by e-cube tech 2024
            </div>
        </div>
    )
}

export default Footer;