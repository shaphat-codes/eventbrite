
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'





const DashboardEvents = () => {
  let {user, logoutUser} = useContext(AuthContext)


  const [events, setEvents] = useState("")


  let getEvent = async ()=> {
    
    
    let response =  await fetch(`http://127.0.0.1:8000/events/`, {
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
       <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        &nbsp;&nbsp;&nbsp;
        <h3><strong><a class="navbar-brand text-danger" href="#">eventbrite</a></strong></h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" ml-auto collapse navbar-collapse " id="navbarSupportedContent">
        
        <ul class="navbar-nav ">
      
          <li class=" me-auto nav-item active">
            <strong>
            <a class="nav-right nav-link" href="#">{user.user.email}</a>
            </strong>
          </li>

          &nbsp;&nbsp;&nbsp;&nbsp;
         
        </ul>
      </div>
    </nav>


    <div class="sidebar">
  <Link class="" to={"/dashboard-home"}>    <img width="35px" height="35px" src='https://www.clipartmax.com/png/middle/46-460757_home-icon-png-orange.png'/>
</Link>
  <Link class = "nav-link" to={"/events"}><img width="35px" height="35px" src='https://www.nicepng.com/png/detail/331-3316490_calendar-icon-orange-rgb-black-and-white-clipart.png'/></Link>
  <Link class = "nav-link" to={"/orders"}><img width="35px" height="35px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLvq1n3Z7mKzecHq_QaaiRfA1rfWUO07zPrRNaIHi-w&s'/></Link>
  
</div>



  <div className='content'>
    <br/>
  <h1 className='dashboard-h1'>Events</h1><br/> 

  <h4 className='dashboard-events-links'>Events</h4>
  <br/>

  <div className='events-flex'>
  <input className='events-input'  type="da" placeholder="Enter event title" name="uname" required/>
  <button className='events-button'>List</button>
  </div>
  <div className='flex'>
  {events && events.map((event, index)=>(
		<React.Fragment key = {index}>
      {event.user == user.user.pk ? 
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
:null}
</React.Fragment>
		))}
    </div>




		
      {events? null :
  <div  className='no-events'>
    <img width="160px" height="160px" src="https://static.vecteezy.com/system/resources/previews/005/988/959/non_2x/calendar-icon-free-vector.jpg"/>
   <br/> No events to show yet
  </div>
  }
  

  </div>

  


  

  




    
    </div>
    
    )
}
export default DashboardEvents