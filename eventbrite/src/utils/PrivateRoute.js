import {Route, Redirect} from 'react-router-dom'
import {useContext} from 'react'
import AuthContext from '../context/AuthContext'


const PrivateRoute = ({children, ...rest}) => {
	let {user} = useContext(AuthContext)

	return(
		<div>

		<Route {...rest}>{user ?<Redirect to="/create-event"/>: children}</Route>
		
		
		
		
		</div>
	)
}

export default PrivateRoute