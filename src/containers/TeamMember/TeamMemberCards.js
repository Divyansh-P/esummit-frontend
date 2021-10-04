import { useState } from 'react'
import classes from './TeamMemberCards.module.css'
import img1 from'./ecell.png';

const TeamMemberCards = (props) => {


    return (
            <div className={`${classes[`col-md-6`]} ${props.className}`} >
                <div className={classes.cardsssssss}>
                    <img src={props.img1} className={classes[`card-img-top`]}/>
                    <div className={classes["card-body"]}>
                        <p className={classes["card-text"]}>{props.content}.</p>
                    </div>
                </div>
            </div>
    )
}

export default TeamMemberCards;