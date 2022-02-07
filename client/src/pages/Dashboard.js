import  {useState} from 'react'
import axios from "axios";

const Dashboard = () => {
	const [user, setUser] = useState([])
    axios.get('http://localhost:8080/api/record', {
        headers: {
            "x-access-token": localStorage.getItem("token")
        }
})
.then((res) => {
    setUser(res.data)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

	
	return (
		<div>
            Hello
			<h1>{user.fname}</h1>
			<h1>{user.lname}</h1>
            <h1>{user.email}</h1>
            <h1>{user.date}</h1>
            <h1>{user.month}</h1>
            <h1>{user.year}</h1>
            <h1>{user.gender}</h1>
		</div>
	)
}

export default Dashboard