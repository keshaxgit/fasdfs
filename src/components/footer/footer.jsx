import whatsapp from "../../images/whatsapp.svg"
import telegram from "../../images/telegram.svg"
import compasssvg from "../../images/compasssvg.svg"
import move from "../../images/Move.svg"
import s from "../footer/footer.module.scss"
import { Link } from 'react-router-dom'

function Footer(){
    return(
    <>
        <div className={s.footer__otstup2}>
        <div className={s.footer}>
            <div className={s.footer__box}>
                <div className={s.footer__logo}><img src={move} alt="" />
                </div>
                <div className={s.footer__navigation}>
                    <Link to = "/" className = {s.footer__link}>Главная</Link>
                    <Link to = "/catalog" className = {s.footer__link}>Каталог</Link>
                    <Link to = "/artist" className = {s.footer__link}>Артисты</Link>
                    <p>@CopyrightAll right reversed</p>
                </div>
                <div className= {s.footer__media} >
                    <p>Наши соц сети</p>
                    <div className = {s.footer__mediaicons}>
                    <img src = {telegram} alt="" />
                    <img src = {whatsapp} alt="" />
                    <img src = {compasssvg} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>

    </>
)
}export default Footer