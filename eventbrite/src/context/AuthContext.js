import  {createContext, useState, useEffect} from 'react'

import jwt_decode from "jwt-decode"
import {useHistory} from 'react-router-dom'





const AuthContext = createContext()





export default AuthContext


export const AuthProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(false);
	
	let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
	let [user, setUser] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
	
	const histroy = useHistory()
	histroy.push('/')


	let loginUser = async (e)=> {
		setIsLoading(true)
		e.preventDefault()
		

		let response = await fetch('http://127.0.0.1:8000/users/login/', {

			method: "POST",

			credentials: "include",
      		headers: {
			"Content-Type": "application/json",
			
      },
      		
			body:JSON.stringify({'email':e.target.email.value, 'password':e.target.password.value})
		})
		
		let data = await response.json()
		setIsLoading(false)


		console.log('response:', response)
		if (response.status === 200) {
			setAuthTokens(data)
			setUser(data)
			localStorage.setItem('authTokens', JSON.stringify(data))
			alert("yaay!! you are logged in.")
		} else{
			alert('oops..... you might have entered an incorrect email or password.')
		}
		
	}


		let registerUser = async (e)=> {
		setIsLoading(true)
		e.preventDefault()

		let response = await fetch('http://127.0.0.1:8000/users/register/', {

			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify({
			
			'email':e.target.email.value,
			'password1':e.target.password1.value,
			'password2':e.target.password2.value})
		})
		alert('A verification link has been sent to your email')
		let data = await response.json()
		
		console.log('response:', response)
		
		
	}



	

		


	let logoutUser = () => {
		setAuthTokens(null)
		setUser(null)
		localStorage.removeItem('authTokens')
		histroy.push('/')
	}


	let contextData = {
		user:user,
		loginUser : loginUser,
		logoutUser : logoutUser,
		registerUser : registerUser,
		isLoading	 : isLoading,

	}


	return(

		<AuthContext.Provider value={contextData}>
			<div>

</div>
			{children}
		
		</AuthContext.Provider>

		)
}