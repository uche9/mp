import svg_data from '../svg/svg_data.js'

import image_0 from './u.jfif'
import './homebody.css'

import data from '../../data.js'

function HomeBody(){

//Service
   var servie_data=[
    {
        icon:svg_data[5].code,
        name:'Web Development',
        description:'I can build stunning web applications in E-commerce, E-leaning, Digital Portfolio, etc fully optimized ...'
    },
    {
        icon:svg_data[4].code,
        name:'Data Analysis and Visualization',
        description:'I can clean, analyze, manipulate and visualize data.Beyond that, I can provide business insights based on results of analysis ...'
    },
    {
        icon:svg_data[3].code,
        name:'Tech tutor',
        description:'I can teach a number of courses related to web development and data analysis...'
    },
   ]
   var servie_data_array=servie_data.map(el=>{
    return(
        <div className='service--item--container'>
            <div className='service--icon'>
                <div className="service--icon--container">
                   {el.icon}
                </div>
                
            </div>
            <div className='service--name'>
                {el.name}
            </div>
            <div className='service--description'>
                {el.description}
            </div>
        </div>
    )
   })
   


   //Work experience

   var experience_data=[
    {
        role:'Frontend developer',
        duration:'2019-2021',
        company:'E-cube Tech',
        details:'As a front-end developer, I built applications with HTML,CSS, React Js, Javascript, etc',
        proficiency:8
   },
   {
    role:'Fullstack developer',
    duration:'2021-present',
    company:'E-cube Tech',
    details:'As a full-stack developer, I built applications with Python, Django, Sqlite,Node, Express, etc',
    proficiency:8
   },
   {
    role:'Data Analyst Tutor',
    duration:'2024-Present',
    company:'E-cube Academy',
    details:'As a data analyst tutor, I taught Pandas, Excel,etc',
    proficiency:8
  },
]
   var experience_data_array=experience_data.map((el)=>{
    return(
        <div className='experience--item--container'>
               <div><b>Role: </b>{el.role}</div>
               <div><b>Duration: </b>{el.duration}</div>
               <div><b>Company: </b>{el.company}</div>
               <div><b>Details: </b>{el.details}</div>
        </div>
    )
   })
 

   //Portfolio

    return(
        <div className='container--homebody'>
            <div className='name'>
                I am {data[0].profile.name}
            </div>
            <div className='brief--intro'> 
                 {data[0].profile.profile_summary}
            </div>

            <div className='profile--photo--container'> 
                
                <img className='profile--photo' alt='profile--photo' src={image_0}  />
            </div>
            <div className='aboutme--container'>
                <div>About Me</div>
                <div className='underline'></div>
                <div>World class {data[0].profile.profile_summary} </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
                
            </div>
            <div> 
               <a href='./contact' ><button class='contact--button'> Contact Me</button></a>
            </div>
            <div className='service--container'>
                <div className='what--service'>What Services I'm providing?</div>
                <div className='underline'></div>
                <div>With my broad range of skills, I can offer the following services</div>
                
                <div className='service--data--array'>
                  {servie_data_array}
                </div>
                
            </div>
            <div className='experience--container'>
                <div className='experience'> Work Experience</div>
                <div className='underline'></div>
                <div> I have over  4 years work experience</div>
                <div className='experience--data--array'>{ experience_data_array}</div>
            </div>
            <div className='portfolio--container'>
                <div className='portfolio'> My Portfolio</div>
                <div className='underline'></div>
                <div><a href='portfolio'>Please find my works here</a> </div>
                <div className='portfolio--data--array'></div>
            </div>
         </div>
    )
}

export default HomeBody