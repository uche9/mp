import svg_data from '../svg/svg_data.js'

import data from '../../data.js'

import './contactbody.css'

function ContactBody(){

    var direct_reach_data=[
        {
           id:1,
           name:'phone',
           icon:svg_data[9].code,
           prefix:'tel:',
           value:data[0].contact.phone_number,
           instr:data[0].contact.phone_number
     },
     {
        id:1,
           name:'email',
           icon:svg_data[10].code,
           prefix:'mailto:',
           value:data[0].contact.email,
           instr:'You can send a mail'
     }
   ]


   var direct_reach_data_array=direct_reach_data.map(el=>(
    
         <div>
             <a href={el.prefix+el.value}>{el.icon}{"       "}{el.instr}</a>
         </div>
    
   ))


   //Social media
   var social_media_data=[
    {
       id:1,
       name:'facebook',
       icon:svg_data[6].code,
       value:data[0].contact.facebook,
    },
   {
        id:2,
        name:'github',
        icon:svg_data[7].code,
        value:data[0].contact.github,
    },
    {
        id:3,
        name:'linkedin',
        icon:svg_data[8].code,
        value:data[0].contact.linkedin,
    },
    {
        id:4,
        name:'twitter', 
        icon:svg_data[11].code,
        value:data[0].contact.twitter,
    }
]


var social_media_data_array=social_media_data.map(el=>(

     <div>
         <a href={el.value} className='social--media '>
            <div>{el.icon}</div>
            <div> {el.name}</div>
        </a>
     </div>


))

    return(
        <div className='contact--container'>

            <div className='direct--reach--container  slide--right'>
                <div className='contact--heading'>Direct Reach</div>
                <div className='underline'></div> 
                <div className='direct--reach--data--array'> {direct_reach_data_array}</div>
            </div>
            <div className='social--media--container slide--left'>
                <div className='contact--heading'>Social Media</div>
                <div className='underline'></div> 
                <div className="social--media--data--array">{social_media_data_array}</div>
            </div>
        </div>
    )
}

export default ContactBody;