import { Routes, Route, NavLink} from 'react-router-dom';
import data from '../data.json'

const Destination = () => {
  const destinations = data.destinations
  const moon = destinations[0]
  const mars = destinations[1]
  const europa = destinations[2]
  const titan = destinations[3]
  
  return (
    <div className='destPage'>
      <div className="container px-5">
       <div className='dest-header'>
        <h5 className='page-intro'><span className='page-num'>01</span> pick your destination</h5>
          
        <nav className="dest-nav">
          <NavLink className="nav-link me-3" to="moon">
            <span>Moon</span>
          </NavLink>
          <NavLink className="nav-link me-3" to="mars">
            <span>Mars</span>
          </NavLink>
          <NavLink className="nav-link me-3" to="europa">
            <span>Europa</span>
          </NavLink>
          <NavLink className="nav-link me-3" to="titan">
            <span>Titan</span>
          </NavLink>
        </nav>
      </div>

      <Routes>
         <Route 
             path='moon'
             element= {(
              <div className='destDetails'>
                <div className='dest-img'>
                  <img src={ require("../assets/destination/image-moon.png") } alt="" className='img-fluid' />
                </div>
                <div>
                  <div className='dest-desc'>
                    <h2>{moon.name}</h2>
                    <p>{moon.description}</p>
                  </div>
                  <div className='travel'>
                    <span>
                      <p className='pb-0 mb-2'>avg. distance</p>
                      <h6>{moon.distance}</h6>
                    </span>
                    <span>
                      <p className='pb-0 mb-2'>Est. Travel time</p>
                      <h6>{moon.travel}</h6>
                    </span>
                  </div>
                </div>
              </div>
             )}
         />
         <Route 
             path='mars' 
             element = {(
            <div className='destDetails'>
              <div className='dest-img'>
                <img src={ require("../assets/destination/image-mars.png") } alt="" className='img-fluid' />
              </div>
              <div>
                  <div className='dest-desc'>
                    <h2>{mars.name}</h2>
                    <p>{mars.description}</p>
                  </div>
                  <div className='travel'>
                    <span>
                      <p className='pb-0 mb-2'>avg. distance</p>
                      <h6>{mars.distance}</h6>
                    </span>
                    <span>
                      <p className='pb-0 mb-2'>Est. Travel time</p>
                      <h6>{mars.travel}</h6>
                    </span>
                  </div>
                </div>
            </div>
             )}
         />
         <Route 
             path='europa' 
             element = {(
              <div className='destDetails'>
              <div className='dest-img'>
                <img src={ require("../assets/destination/image-europa.png") } alt="" className='img-fluid' />
              </div>
              <div>
                  <div className='dest-desc'>
                    <h2>{europa.name}</h2>
                    <p>{europa.description}</p>
                  </div>
                  <div className='travel'>
                    <span>
                      <p className='pb-0 mb-2'>avg. distance</p>
                      <h6>{europa.distance}</h6>
                    </span>
                    <span>
                      <p className='pb-0 mb-2' >Est. Travel time</p>
                      <h6>{europa.travel}</h6>
                    </span>
                  </div>
                </div>
            </div>
             )}
         />
         <Route 
             path='titan' 
             element = {(
              <div className='destDetails'>
              <div className='dest-img'>
                <img src={ require("../assets/destination/image-titan.png") } alt="" className='img-fluid'/>
              </div>
              <div>
                  <div className='dest-desc'>
                    <h2>{titan.name}</h2>
                    <p>{titan.description}</p>
                  </div>
                  <div className='travel'>
                    <span>
                      <p className='pb-0 mb-2'>avg. distance</p>
                      <h6>{titan.distance}</h6>
                    </span>
                    <span>
                      <p className='pb-0 mb-2'>Est. Travel time</p>
                      <h6>{titan.travel}</h6>
                    </span>
                  </div>
                </div>
            </div>
             )}
         />
      </Routes>
      </div>
    </div>
  )
}

export default Destination