import s from "../header/header.module.scss"
import { Link } from 'react-router-dom'
import move from "../../images/Move.svg"
function Header (){
    return(
        <>
            <div className={s.header}>
                <div className={s.header__box}>
                    <div className={s.header__logo}>
                        <img src={move} alt="" />
                    </div>
                    <div className={s.header__nav}>
                        <Link to="/" className={s.header__link}>Главная</Link>
                        <Link to="/poster" className={s.header__link}>Афиша</Link>
                        <Link to="/films" className={s.header__link}>Фильмы</Link>
                        <Link to="/event" className={s.header__link}>Мероприятия</Link>
                    </div>
                    <div className={s.header__button}>
                        <Link to = "/join">
                        <button className={s.header__join}>Войти</button>
                        </Link>
                    </div>
                </div>
            </div>
                <hr />

        </>
    )
}

export default Header