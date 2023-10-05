import React, { useEffect, useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Searchbar from '../../components/Searchbar/Searchbar'
import Table from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const [info,setInfo] = useState(null);

  const [selectedMembers, setSelectedMembers] = useState([]);

  const [selectedMemberInfoParent, setSelectedMemberInfoParent] = useState([]);

  const onItemSelectedParent = (id,memberInfo) => {

    let member = memberInfo;
    console.log(member);

   
    let index = selectedMembers.indexOf(id);

    if (index === -1) {
      setSelectedMembers(selectedMembers => [...selectedMembers,id]);
      setSelectedMemberInfoParent(selectedMemberInfoParent => [...selectedMemberInfoParent,memberInfo]);
      
    }else{
      setSelectedMembers(selectedMembers => selectedMembers.filter(item => item != id));
      setSelectedMemberInfoParent(selectedMemberInfoParent => selectedMemberInfoParent.filter(item => item != memberInfo));
    }
  }


  const navigate = useNavigate();
      
  const url = "http://localhost:8000/members";

  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setInfo(data);
    } );
  },[url]);

  const approvedMembers = (e) => {
    e.preventDefault();
    navigate('/title', { state: selectedMemberInfoParent });
  };

  const removeMembers = (e) => {

    e.preventDefault();
    setSelectedMembers([]);
    setSelectedMemberInfoParent([]);

    
  }
  

  return (
    <div className='members'>
      
      
      <Searchbar></Searchbar>
      <Sidebar></Sidebar>
      <button className='reject' id='reject' onClick={removeMembers}>Reject</button>
      <button className='approve' info={info}  onClick={approvedMembers}>Approve</button>

      {info && <Table onItemSelected={onItemSelectedParent} info={info}></Table>}
      
          
    </div>
  )
}

export default Home;