import classes from './TeamMember.module.css'
import TeamMemberCards from './TeamMemberCards'
import algo from './1.png'
import virtual from './2.png'
import startup from './3.png'
import casestudy from './4.png'
import content from './5.png'
import saleable from './6.png'
import showcase from './7.png'

const TeamMember = () => {
    return (
        <div className={classes.team}> 

        <div className={classes.heads}> EVENTS </div>
            <div className={classes.teamItem}>
                <TeamMemberCards content=" “THINK, TEST, AND AUTOMATE YOUR STRATEGIES”
                  HANDPICKED STRATEGIES WITH THEIR PERFORMANCE ALGORITHMS AND PARAMETERS WILL BE CHOSEN BASED ON RISK TOLERANCE" 
                  img1={algo} className={classes.left} />
                <TeamMemberCards content="“RISK SE MILEGA RETURN” 
                TRY YOUR HANDS ON THE STOCK MARKET WITHOUT THE FEAR OF LOSING ANY REAL MONEY" 
                img1={virtual} className={classes.right} />
            </div>
            <div className={classes.teamItem}>
                <TeamMemberCards content="“RISE OF AN ENTREPRENEUR” 
                FLAUNT YOUR ENTREPRENEURIAL AND IDEA-FORMATION SKILLS" 
                img1={startup} className={classes.left} />
                <TeamMemberCards content=" “ANALYZE AND DETECT”
                GET A CHANCE TO TEST AND ENHANCE YOUR PRACTICAL KNOWLEDGE THROUGH RECTIFYING THE COMPLICATIONS IN A DETAILED ANALYSIS OF A MARKET SITUATION OR ANY ORGANIZATION" 
                img1={casestudy} className={classes.right} />
            </div>
            <div className={classes.teamItem}>
                <TeamMemberCards content="“CONTENT IS KING”
              SHOWCASE YOUR TALENT AND COMPETE WITH OTHER AMAZING CONTENT CREATORS" 
                img1={content} className={classes.left} />
                <TeamMemberCards content="“Sell the product and choose the market”
                   Don’t find customers for your product, find products for your customers." 
                img1={saleable} className={classes.right} />
            </div>
            <div className={classes.teamItem}>
                <TeamMemberCards content="“POWER YOUR BRAND AND THE FUTURE”
                 GET IN TOUCH WITH HUNDREDS OF POTENTIAL CUSTOMERS AND INVESTORS AND GET A CHANCE TO SHOWCASE YOUR POTENTIAL AS A FUTURE COMAPANY" 
                img1={showcase} className={classes.left} />
                {/* <TeamMemberCards content="" img1={} className={classes.right} /> */}
            </div>
            {/* <TeamMemberCards /> */}
        </div>
    )
}

export default TeamMember;
