import style from './Menu.module.css'

export default function Menu(){
    return(
        <div className={style.wrapmenu}>
            <p>
                <a href={'/'}>CARDS</a>
            </p>
            <p>
                <a href={'/contact'}>CONTATO</a>
            </p>
        </div>
    )
}