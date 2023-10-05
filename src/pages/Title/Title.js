import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Title.css'
import TitleTable from '../../components/TitleTable/TitleTable'
import { useLocation } from 'react-router-dom'

const Title = () => {

  const location = useLocation();
  const selectedItemData = location.state;

  console.log(location);
  console.log(selectedItemData);
  




  return (
    <div className='title'>
      <Searchbar></Searchbar>
      <Sidebar></Sidebar>
      <TitleTable selectedItemData = {selectedItemData}></TitleTable>
      
    </div>
  )
}

export default Title
