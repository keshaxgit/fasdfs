import sinister from "../../images/sinister.png"
import scarymove from "../../images/scarymove.png"
import kitchen from "../../images/kitchen.png"
import seven from "../../images/seven.png"
import duna from "../../images/duna.png"
import avengers from "../../images/avengers.png"
import s from "../soon/soon.module.scss"

const Soon = () => {
  return (
    <>
    <div className={s.soon__h1}>
                        <h1>Скоро выйдут  </h1>
                    </div>
    <div className={s.soon}>
        
        <div className={s.soon__box}>
             <div className={s.soon__popular}>
            <img src={sinister} alt="" />
             <div className={s.soon__disc}>
                 <p>Синистер</p>
                 <p>Перейти</p>
                </div>
             </div>
             <div className={s.soon__popular}>
            <img src={scarymove} alt="" />
             <div className={s.soon__disc}>
                 <p> Страшное кино</p>
                 <p>Перейти</p>
                </div>
             </div>
             <div className={s.soon__popular}>
            <img src={kitchen} alt="" />
             <div className={s.soon__disc}>
                 <p>Кухня</p>
                 <p>Перейти</p>
                </div>
             </div>
             <div className={s.soon__popular}>
            <img src={seven} alt="" />
             <div className={s.soon__disc}>
                 <p>Семь</p>
                 <p>Перейти</p>
                </div>
             </div>
             <div className={s.soon__popular}>
            <img src={duna} alt="" />
             <div className={s.soon__disc}>
                 <p>Дюна</p>
                 <p>Перейти</p>
                </div>
             </div>
             <div className={s.soon__popular}>
            <img src={avengers} alt="" />
             <div className={s.soon__disc}>
                 <p>Мстители</p>
                 <p>Перейти</p>
                </div>
             </div>
        </div>

    </div>
    </>
  )
}

export default Soon