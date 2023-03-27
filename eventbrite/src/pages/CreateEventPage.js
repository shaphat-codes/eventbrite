
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/AuthContext'



const CreateEventPage = () => {
  const [ image, setImage ] = useState("")
  let {user, logoutUser} = useContext(AuthContext)




  let createEvent = async (e)=> {
		
		e.preventDefault()

		let response = await fetch('https://eventbrite-j311.onrender.com/create-event/', {

			method: 'POST',
      credentials: "include",
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
      'user':user.user.pk,
			'title':e.target.title.value,
			'location':e.target.location.value,
      'ticket_price': e.target.ticket_price.value,
			'description':e.target.description.value,
      'organizer':e.target.organizer.value,
      'start_time':e.target.start_time.value,
      'end_time':e.target.end_time.value,
      'start_date':e.target.start_date.value,
      'end_date':e.target.end_date.value,
      'image':image,
    
    })
		})
		
		let data = await response.json()
		
		console.log('response:', response)
		if (response.status === 200) {
			
			alert('Success!')
		} else{
			alert('something went wrong') 
		}
		
	}





  const uploadFile = async () => {

    
    

    const uploadData = new FormData();
    uploadData.append('file', image);
    uploadData.append("upload_preset", "buymeanapple")
    
    
    
  const response = await fetch('https://api.cloudinary.com/v1_1/dmdf71t0f/image/upload', {
      method: 'POST',
      body: uploadData
    })
    
    const data = await response.json()

    setImage(data.secure_url)
    console.log(data.secure_url)
 
  }



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
<form onSubmit={createEvent}>
        <div className='container create-event-whole'>
            <h2>Basic Info</h2>
            <p>Name your event and tell event-goers why they should come. <br/>Add details that highlight what makes it unique.</p>
            <div className='create-event-input'><input  type="text" placeholder="Title" name="title" required/></div>
            <div  className='create-event-input' ><input type="text" placeholder="Organizer" name="organizer" required/></div>

  <br/>

  <h5>Description</h5>
  <p>Improve discoverability of your event by a description that best suits it.
</p>
<div className='create-event-input'><input  type="text" placeholder="Describe event" name="description" required/> </div>
<br/>
<label><strong>Price of ticket</strong></label><br/>

<input className='date-time'  type="tet" placeholder="Ticket price" name="ticket_price" required/>
<br/><br/>
<hr/>
<h2>Location</h2>
<p>Help people in the area discover your event and let attendees know where to show up.</p>

<div className='create-event-input'><label>Venue location</label><input  type="text" placeholder="Where is it happening?" name="location" required/> </div>

<br/>
<hr/>
<h2>Date and time</h2>
<p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
<br/>

<div>
  <label><strong>starts: </strong></label><br/>
<input className='date-time'  type="date" placeholder="Enter Username" name="start_date" required/><input className='date-time' type="dat" placeholder="start time" name="start_time" required/>
<br/>
<label><strong>ends: </strong></label><br/>
<input className='date-time'  type="date" placeholder="Enter Username" name="end_date" required/><input className='date-time' type="dat" placeholder="end time" name="end_time" required/>

<br/> <br/>

<h2>Upload photo</h2>


<input className='date-time'
        type="file"
        name = "image"
        files={image}
        onChange={(e) => setImage(e.target.files[0])}
        /><button onClick={uploadFile} className='date-time'>Upload</button>

</div>
<button type='submit' className='ticket-button '>Create</button>
        </div>
        </form>






    
    </div>
    
    )
}
export default CreateEventPage