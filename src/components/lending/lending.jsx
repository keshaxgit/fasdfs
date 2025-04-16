import people from "../../images/people.png"
import s from "../lending/lending.module.scss"
const Lending = () => {
  return (
    <div className={s.lending}>
        <div className={s.lending__box}>
            <div className={s.landing__h1}>
                <h1>Заказать Билеты</h1>
            </div>
            <div className={s.lending__disc}>
                <p>вы можете выбрать,какой билет вам нужен</p>
                <div className={s.lending__button}>
                    <button className={s.lending__buy}>Купить билеты сейчас</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Lending