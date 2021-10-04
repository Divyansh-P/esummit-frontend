import { useState } from 'react'
import ProfileCards from './ProfileCards';
import classes from './Profile.module.css'

const Profile = () => {

    return (
        
            <ul className={classes.Profile}>
                <ProfileCards />
            </ul>
    )
}

export default Profile;