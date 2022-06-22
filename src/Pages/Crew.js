import { Routes, Route, NavLink} from 'react-router-dom';
import data from '../data.json'

const Crew = () => {
  const crew = data.crew
  const commander = crew[0]
  const specialist = crew[1]
  const pilot = crew[2]
  const engineer = crew[3]

  return (
    <div className="crewPage">
      <div className="container px-5">
      <div className='crew-header'>
        <h5 className='page-intro'><span className='page-num'>02</span> meet your crew</h5>
          
        <nav className="crew-nav">
          <NavLink className="nav-link me-3" to="commander"></NavLink>
          <NavLink className="nav-link me-3" to="specialist"></NavLink>
          <NavLink className="nav-link me-3" to="pilot"></NavLink>
          <NavLink className="nav-link me-3" to="engineer"></NavLink>
        </nav>
      </div>

      <Routes>
        <Route 
           path="commander"
           element= {(
            <div className='crewDetails'>
               <div className='desc'>
                <h6 className='crew-role'> {commander.role} </h6>
                <h3 className='crew-name'> {commander.name} </h3>
                <p className='pe-lg-5'> {commander.bio} </p>
               </div>
               <div className='crew-img1'>
                <img src={ require("../assets/crew/image-douglas-hurley.png") } alt="" className='img-fluid'/>
               </div>
            </div>
           )}
        />
        <Route 
           path="specialist"
           element= {(
            <div className='crewDetails'>
              <div className='desc'>
                <h6 className='crew-role'>{specialist.role}</h6>
                <h3 className='crew-name'>{specialist.name}</h3>
                <p className='pe-lg-5'>{specialist.bio}</p>
               </div>
               <div className='crew-img2'>
                <img src={ require("../assets/crew/image-mark-shuttleworth.png") } alt="" className='img-fluid' />
               </div>
            </div>
           )}
        />
        <Route 
           path="pilot"
           element= {(
            <div className='crewDetails'>
              <div className='desc'>
                <h6 className='crew-role'>{pilot.role}</h6>
                <h3 className='crew-name'>{pilot.name}</h3>
                <p className='pe-lg-5'>{pilot.bio}</p>
               </div>
               <div className='crew-img3'>
                <img src={ require("../assets/crew/image-victor-glover.png") } alt=""  className='img-fluid'/>
               </div>
            </div>
           )}
        />
        <Route 
           path="engineer"
           element= {(
            <div className='crewDetails'>
              <div className='desc'>
                <h6 className='crew-role'>{engineer.role}</h6>
                <h3 className='crew-name'>{engineer.name}</h3>
                <p className='pe-lg-5'>{engineer.bio}</p>
               </div>
               <div className='crew-img4'>
                <img src={ require("../assets/crew/image-anousheh-ansari.png") } alt=""  className='img-fluid'/>
               </div>
            </div>
           )}
        />
      </Routes>
      </div>
    </div>
  )
}

export default Crew