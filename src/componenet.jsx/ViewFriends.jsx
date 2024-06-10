import React, { useEffect, useState } from 'react'
import NavFriends from './NavFriends'
import axios from 'axios'

const ViewFriends = () => {
    const [data,changeData]=useState([])
    const fetchData=()=>{
        console.log("hello")
    axios.get("https://friendsapi-re5a.onrender.com/view").then(
        (response)=>{
            changeData(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.data)
        }
    ).finally()
}
useEffect(()=>{fetchData()},[])
  return (
    <div>
        <NavFriends/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
    <th>userid</th>
      <th>name</th>
      <th>Friendname</th>
      <th>friendNickName</th>
      <th>descibe your friend</th>
      <th>__v</th>
    </tr>
  </thead>
  {data.map(
    (value,index)=>{
        return <tbody>
        <tr>
            <td>{value._id}</td>
          <td>{value.name}</td>
          <td >{value.friendName}</td>
          <td >{value.friendNickName}</td >
          <td >{value.DescribeYourFriend}</td >
          <td >{value.__v}</td >
          
        </tr>
        
      </tbody>
    }
  )
  }
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFriends