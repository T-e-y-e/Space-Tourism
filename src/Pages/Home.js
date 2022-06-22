import { useNavigate } from "react-router"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='homePage'>
      <div className="container px-4">
      <div className="left">
        <h5>So, you want to travel to</h5>
        <h1>SPACE</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
           outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!</p>
      </div>
      <div>
        <button className="btn exploreBtn" type="button" onClick={() => navigate('/destination')}>
          <h4>EXPLORE</h4>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home