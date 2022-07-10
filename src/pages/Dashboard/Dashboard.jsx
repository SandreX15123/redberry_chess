import King from '../../img/king.png'
import Land from '../../img/land.png'
import GetStarted from '../../img/getstarted.png'



const Dashboard = () => {
    return (
        <>
            <div id="ULig">
                <img id="Ligtxt" src={King} />
            </div>

            <div id="RLig"></div>
            <img id="Lig" src={Land} alt="" />
            <p id="Btxt">CHESS SAYS</p>
            <p id="Stxt">a lot about</p>
            <p id="Btxt2">who we are</p>

            <a href="register.html"><button className="button getstarted"><img id="B1Ctxt" src={GetStarted} alt="" /></button></a>
        </>
    )
}
export default Dashboard;