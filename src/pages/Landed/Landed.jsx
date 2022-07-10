
import king from '../../img/king.png'
import lastchess from '../../img/lastchess.png'
import onboard from '../../img/onboard.png'

const Landed = () => {
    return (
        <>
            <div id="ULig">
                <img id="Ligtxt" src={king} />
            </div>
            <img id="Lig" src={lastchess} alt="" />
            <img id="onBoard" src={onboard} alt=""></img>
        </>
    );
}

export default Landed;
