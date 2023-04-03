import React from 'react'
import Logo from './logo/Logo'
import LocationModal from './LocationModal'
import SelectCategory from './SelectCategory'
import SearchInAdvertises from './SearchInAdvertises'
import ProfileButton from './ProfileButton'
import ChatButton from './ChatButton'
import SupportButton from './SupportButton'
import RegisterAdvertiseButton from './RegisterAdvertiseButton'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex'>
        {/* logo website */}
        <Logo />

        {/* set location with modal */}
        <LocationModal />

        {/* select category  */}
        <SelectCategory />

        {/* search box in advertises */}
        <SearchInAdvertises />

        {/* profile */}
        {/* <ProfileButton /> */}

        {/* chats */}
        <ChatButton />

        {/* support website */}
        <SupportButton />

        {/* register advertise */}
        <RegisterAdvertiseButton />

       
    </div>
  )
}

export default Header