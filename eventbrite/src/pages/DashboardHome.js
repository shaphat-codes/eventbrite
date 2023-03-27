
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'




const DashboardHome = () => {
  let {user, logoutUser} = useContext(AuthContext)



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


<div class="content flex">
  <br/>
  <h1 className='dashboard-h1'>Hello, {user.user.username}</h1><br/> 

  <div className='dashboard-main-card'>
  <div class="container">
    <h4><b>Your next event</b></h4>
    <p>  <Link class = "nav-link" to={"/events"}>Go to events</Link>
</p>

        <div >
            <p className='dashboard-p'>You can create an event here for free</p>
    <button className='dashboard-button' type="submit">        <Link class = "nav-link" to={"/create-event"}>Create event</Link>
</button>
    </div>
  </div>

  </div><br/>
  <div className='right-side'>
        <h4>Let’s help you<br/> become a marketing pro!</h4>
        
        <p>Try Eventbrite’s premium marketing tools for 14 days and market your events successfully⁠—all from one place.</p>
        <button className='' type="submit">Explore marketing tools</button>

  </div>

  <div className='dashboard-main-card'>

  <div class="container">
    <h4><b>Your checklist</b></h4>
    <p>We make it easy to plan successful events. Here's how to start!</p>
    <br/>

    <ul>
        <div className='checklist'><li><span>Create event</span> </li><small>Publish an event to reach millions of people on eventbrite</small></div>
        <div className='checklist'><li><span>Set up your organizer profile</span> </li><small>Highlight your brand by adding your organizer a name, image, and bio</small></div>
        <div className='checklist'><li><span>Add your bank account</span> </li><small>Get paid for future ticket sales by entering your bank details</small></div>

    </ul>

       
  </div>


</div><br/>

<div className='dashboard-main-card'>

</div>
</div>

    
    </div>
    
    )
}
export default DashboardHome