
import './App.css';

import Home from './Home.js'


import Contact from './Contact.js'
import Portfolio from './Portfolio.js';
import About from './About.js';
function App() {

  if (window.location.pathname==='/' || window.location.pathname==='/home'){  
    return (
      <div>
             <Home />
      </div>
    );
  }
  else if (window.location.pathname==='/about'){  
    return (
      <div>
            <About />
      </div>
    );
  }
  else if (window.location.pathname==='/portfolio'){  
    return (
      <div> 
            
            <Portfolio />
      </div>
    );
  }
  else if (window.location.pathname==='/contact'){  
    return (
      <div>
           <Contact />   
      </div>
    );
  }
}

export default App;
