import style from './style.module.css'

export default function Post({message, people, date}){
    return(
        <article className={style.container}>
            <section className={style.header}>
                <span>{people}</span>
            </section>
            <section className={style.main}>
                <span className={style.message}>{message}</span>
                <span className={style.date}>{date}</span>
            </section>
        </article>
    )
}