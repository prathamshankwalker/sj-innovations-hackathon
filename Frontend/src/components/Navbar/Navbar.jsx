import React,{useContext,useState} from 'react'
import './Navbar.css'
import {useDispatch, useSelector} from "react-redux"
import {DensityMedium,ArrowBack,Logout,ManageAccounts,AccountCircle} from "@mui/icons-material"
import {Typography} from '@mui/material'
import { MenuContext } from 'react-flexible-sliding-menu';
import {useAlert} from 'react-alert'
import Loader from '../Loader/Loader'
import {logoutUser} from '../../actions/user'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    const navigate = useNavigate();

    const [isClicked,setClicked] = useState(false)
    const [isDropdownOpen , setDropdownOpen ] = useState('hide');
    const {isAuthenticated,message,user,loading} = useSelector((state)=>state.user);

    const { toggleMenu } = useContext(MenuContext);
      
    const handleClick = () =>{
        !isClicked?setClicked(true):setClicked(false)
        toggleMenu()
    }
    const toggleDropDown = () => {
    isDropdownOpen === 'show' ? setDropdownOpen('hide') : setDropdownOpen('show')
    }
    const handleLogout = async() =>{
      toggleDropDown()
      dispatch(logoutUser())
    }

  return (
    isAuthenticated && !loading ?(
    <div className='nav-bar'>
      {!isClicked?<DensityMedium onClick={handleClick}/>: <ArrowBack onClick={handleClick}/> }
      <div>
        <ManageAccounts onClick={toggleDropDown}/>
        {isDropdownOpen==='show'?
          <div className={isDropdownOpen}>
            <div>
              <AccountCircle/>
              <Typography variant='h6'>{user.username}</Typography>
            </div>
            <div onClick={handleLogout}>
              <Logout/>
              <Typography variant='h6'>Logout</Typography>
            </div>
          </div>
          :
          <div className={isDropdownOpen}></div>
        }
    </div>
    </div>
    ):null
  )
}

export default Navbar