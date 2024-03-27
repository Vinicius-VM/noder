import Menu from "./components/Menu"
import style from './Calc.module.css'


export const Calc = () => {
    return(
        <>
            <Menu/>
                <div className={style.sectionCalc}>
                    <h1>calculos</h1>
                </div>

        </>

    )
}