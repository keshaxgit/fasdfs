
import us from "../../images/us.png"
import it from "../../images/it.png"
import begin from "../../images/begin.png"
import s from "../main/main.module.scss"
//import { Link } from 'react-router-dom'
function Main(){
    return(
        <>
        <div className={s.films__h1}>
                        <h1>Лучшие этой недели </h1>
                    </div>
            <div className={s.films}>
            <div className={s.films__box}>
                <div className={s.films__info}>
                    <div className={s.films__popular}>
                        <img src={us} alt="" />
                        <div className={s.films__disc}>
                            <p>Мы</p>
                            <p>Перейти</p>
                        </div>
                    </div>
                    <div className={s.films__popular}>
                        <img src={it} alt="" />
                        <div className={s.films__disc}>
                            <p>Оно</p>
                            <p>Перейти</p>
                        </div>
                    </div>
                    <div className={s.films__popular}>
                        <img src={begin} alt="" />
                        <div className={s.films__disc}>
                            <p>Начало</p>
                            <p>Перейти</p>
                        </div>
                    </div>
                    </div>

                    </div>

                  
                </div>
        </>
    )
}

export default Main