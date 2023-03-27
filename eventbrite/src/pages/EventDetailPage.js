import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaystackPop from '@paystack/inline-js'

import AuthContext from '../context/AuthContext'



const EventDetailPage = (props) => {
  let {user, logoutUser} = useContext(AuthContext)


  const id = props.match.params.id

  const [event, setEvent] = useState("")



  const getEventDetail = async () => {
        
    const response = await fetch(`https://eventbrite-j311.onrender.com/event/${id}`,
    {
      method: 'GET',
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      
    
    }
    )
    const data = await response.json()
    
    
    setEvent(data)

    console.log(data)

  }





  
  let OrderEvent = async ()=> {
		
		

		let response = await fetch('https://eventbrite-j311.onrender.com/create-order/', {

			method: 'POST',
      credentials: "include",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
      'user':user.user.pk,
			'event':event.id
    
    })
		})
		
		let data = await response.json()
		
		console.log('response:', response)
		if (response.status === 200) {
			
			alert('Event ordered successfully!')
		} else{
			alert('something went wrong') 
		}
		
	}





  const paywithpaystack = () =>{
      
  
 
    const paystack = new PaystackPop()
   
    paystack.newTransaction({
      
      key:"pk_test_0019a4e3acb7a9886c8c65386a5be0619de6223e" ,
      amount: 1000,    
      email: user.user.email,
      

      onSuccess(transaction){
        let message = `Payment Complete! Reference ${transaction.reference}`
        alert(message)
        
      },
      onSuccess: () => OrderEvent(),
      
      onCancel(){
        alert("Transaction cancelled!")
      }
    })


   
 }

  useEffect(() => {
    getEventDetail()
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

      <li class="nav-item active">
        <strong>
        <a class="nav-link text-primary" href="#">Create an event</a>
        </strong>
      </li>
      
      <li class="nav-item active">
        <strong>
        <a class="nav-link" href="#">Log In</a>
        </strong>
      </li>
      <li class="nav-item active">
        <strong>
        <a class="nav-link" href="#">Sign Up</a>
        </strong>
      </li>
      &nbsp;&nbsp;&nbsp;&nbsp;
     
    </ul>
  </div>
</nav>
<br/>

<div className='container'>
        <img className='event-detail-banner'  src="https://cdn.evbstatic.com/s3-build/fe/build/images/6aaf4a36e35b1b71bc077e200ac7429c-1_tablet_1067x470.jpg"/>
    <br/><br/><br/>

    
        <p>{event.date_time}</p>
        <div className='event-date-time'>
    <h1>{event.title}</h1>

    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={paywithpaystack} className='ticket-button'>Get ticket</button></div>
   


    <div>
        <h4>When and where</h4>
    </div>
    <br/>
    <div className='event-date-time'>
        <div>
            <h5>Date and Time</h5>
            <p><strong>starts at </strong><br/>
            {event.start_time}<br/>
            <strong>on </strong><br/>  {event.start_date}
            </p>
        </div>

        <div className='event-detail-location'>
            <h5>Location</h5>
            <p>
            {event.location}
            </p>
        </div>
    </div>

    </div>
  
    </div>
    )
}
export default EventDetailPage