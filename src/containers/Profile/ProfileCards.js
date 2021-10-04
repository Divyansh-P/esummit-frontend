import { useState } from 'react'
import classes from './ProfileCards.module.css'
import imga from '../TeamMember/1.png'
const ProfileCards = () => {

    return (
        <div className={classes.body}>
            <li>
                <a href="" className={classes.cardssssss}>
                    <img src={imga} className={classes.cardssssss__image} alt="" />
                    {/* <img src="https://i.imgur.com/oYiTqum.jpg" className={classes.cardssssss__image} alt="" /> */}
                    <div className={classes.cardssssss__overlay}>
                        <div className={classes.cardssssss__header}>
                            <svg className={classes.cardssssss__arc} ><path /></svg>
                            <img className={classes.cardssssss__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                            <div className={classes.cardssssss__header_text}>
                                <h3 className={classes.cardssssss__title}>Jessica Parker</h3>
                                <span className={classes.cardssssss__status}>1 hour ago</span>
                            </div>
                        </div>
                        <p className={classes.cardssssss__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                    </div>
                </a>
            </li>


        </div>
    )
}

export default ProfileCards;