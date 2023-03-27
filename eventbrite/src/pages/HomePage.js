
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'





const HomePage = () => {

  let {user, logoutUser} = useContext(AuthContext)


  const [events, setEvents] = useState("")

  let getEvent = async ()=> {
    
    
    let response =  await fetch(`https://eventbrite-j311.onrender.com/events/`, {
        method: "GET",
        credentials: "include",
        headers: {
       "Content-Type": "application/json"
  },
          
       
    })
   
    let data = await response.json()
    setEvents(data)
    console.log(data)
   

}


useEffect(() => {
 getEvent()
 }, [])


    return (
  <div class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    &nbsp;&nbsp;&nbsp;
    <h3><strong><a class="navbar-brand text-danger" href="#">eventbrite</a></strong></h3>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="form-inline my-2 my-lg-0 me-auto">
      <input class="form-control mr-sm-2" type="search" placeholder="Search events" aria-label="Search"/>
      
    </form>

    <ul class="navbar-nav ">
     
      <li class="nav-item dropdown ">
        <strong>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Organize
        </a>
        </strong>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown ">
        <strong>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Help
        </a>
        </strong>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
{user ? 
  <li class="nav-item active">
        <strong>
        <Link class = "nav-link text-primary" to={"/dashboard-home"}>Create an event</Link>

        </strong>
      </li>
      : null

}
      
      {!user? <li class="nav-item active">
        <strong>
        <Link class = "nav-link" to={"/login"}>Log In</Link>
        </strong>
      </li> : null}
      
      {!user?<li class="nav-item active">
        <strong>
        <Link class = "nav-link" to={"/signup"}>Sign up</Link>
        </strong>
      </li> :null}

      {user? <li class="nav-item active">
        <strong>
        <Link onClick={logoutUser} class = "nav-link" to={"#"}>Logout</Link>
        </strong>
      </li> :null}
      
      &nbsp;&nbsp;&nbsp;&nbsp;
     
    </ul>
  </div>
</nav>

    <div>
        <img className='hero' src="https://cdn.evbstatic.com/s3-build/fe/build/images/6aaf4a36e35b1b71bc077e200ac7429c-1_tablet_1067x470.jpg"/>
    </div><br/><br/>

    <div  className='heading'><h2><b>Popular in  </b></h2></div>

    <div className='flex'>
    <div class="scrollmenu">
  <a href="#home">All</a>
  <a href="#news">For you</a>
  <a href="#contact">Online</a>
  <a href="#about">Today</a>
  <a href="#about">This Weekend</a>
  <a href="#about">St Patrick's day</a>
  <a href="#about">Women's History Month</a>
  <a href="#about">Free</a>
  <a href="#about">Music</a>
  <a href="#about">Food & Drink</a>
  <a href="#about">Charity & Causes</a>

  
</div>

    </div>
    <div  className='heading'><h4><b>Check out trending categories</b></h4></div>
    <div className='flex'>
    <div className='trending'>
        <img width="35px" height="35px" src='https://thumbs.dreamstime.com/b/music-logo-free-to-use-no-copyright-124960721.jpg'/>
        &nbsp; Music
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://w7.pngwing.com/pngs/574/520/png-transparent-computer-icons-microsoft-paint-fruit-picking-information-painting-painting-orange-palette-painting.png'/>
        &nbsp;
        Performing and Visual Arts
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxY8mjJG7GH-4KPPPeudVirNG3fShcqYHQ_HEKoHk&s'/>

    &nbsp; Holiday
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_orange_heart.svg/1024px-Eo_circle_orange_heart.svg.png'/>

    &nbsp; Health
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://www.citypng.com/public/uploads/preview/joystick-game-controller-orange-icon-download-png-1163964820354mye27erq.png'/>

&nbsp; 
        Hobbies
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd9sPWkUIj1Ypk-NoW2-OTPLSbc1fsMJvP6XywLU&s'/>

&nbsp;
        Business
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9y2_CUEkRHtngWwc7u4WEmotHg7S3SiQ0CZq-cx3aTg&s'/>

&nbsp;
        Food & Drink
    </div>

    <div className='trending'>
    <img width="35px" height="35px" src='https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/107240/01/sv01/fnd/THA/fmt/png/ULTRA-Pro-FG/AG-Football-Boots-Men'/>

&nbsp;
        Sports & Fitness
    </div>
    </div>
    <div  className='heading'><h4><b>Events in Greater Accra</b></h4></div>
<div className='flex'>
    
 
{events && events.map((event, index)=>(
		<React.Fragment key = {index}>
<div class="card ">
<Link to={`/event/${event.id}`}>
  <img width="268px" height="150px" src={`${event.image}`}/>
  </Link>
  <br/>
  <div className='event-text' >
    <h4><b>{event.title}</b></h4>
  
    <p className='para para-orange'>{event.date_time}</p>
    <p className='para'>{event.location}</p>
    <strong><p>Starts at {event.start_time} on {event.start_date}</p></strong>
    <strong><p>${event.ticket_price}</p></strong>
    <strong><p>{event.organizer}</p></strong>
    </div>
  
</div>
</React.Fragment>
		))}

</div>
  
    </div>
    )
}
export default HomePage