import { Route, Routes, NavLink } from 'react-router-dom'
import data from '../data.json'

const Technology = () => {
  const technology = data.technology
  const vehicle = technology[0]
  const spaceport = technology[1]
  const capsule = technology[2]

  return (
    <div className='techPage'>
      <div className="container-fluid pe-0 me-0">
      <div className='tech-header'>
        <h5 className='page-intro'><span className='page-num'>03</span> space launch 101</h5>
          
        <nav className="tech-nav">
          <NavLink className="nav-link me-4 mb-lg-3" to="vehicle">
            <span>1</span>
          </NavLink>
          <NavLink className="nav-link me-4 mb-lg-3" to="spaceport">
            <span>2</span>
          </NavLink>
          <NavLink className="nav-link me-4" to="capsule">
            <span>3</span>
          </NavLink>
        </nav>
      </div>

      <Routes>
        <Route 
           path='vehicle'
           element = {(
            <div className='techDetails'>
              <div className='desc'>
                <p className='terminology'>The terminology...</p>
                <h6>{vehicle.name}</h6>
                <p>{vehicle.description}</p>
              </div>
              <div className='d-flex justify-content-end'>
               <div className='tech-img1'></div>
              </div>
            </div>
           )}
        />
         <Route 
           path='spaceport'
           element = {(
            <div className='techDetails'>
              <div className='desc'>
                <p className='terminology'>The terminology...</p>
                <h6>{spaceport.name}</h6>
                <p>{spaceport.description}</p>
              </div>
              <div className='d-flex justify-content-end'>
               <div className='tech-img2'></div>
              </div>
            </div>
           )}
        />
         <Route 
           path='capsule'
           element = {(
            <div className='techDetails'>
              <div className='desc'>
                <p className='terminology'>The terminology...</p>
                <h6>{capsule.name}</h6>
                <p>{capsule.description}</p>
              </div>
              <div className='d-flex justify-content-end'>
               <div className='tech-img3'></div>
              </div>
            </div>
           )}
        />
      </Routes>
      </div>
    </div>
  )
}

export default Technology