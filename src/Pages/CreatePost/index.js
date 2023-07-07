import style from './style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function CreatePost(){

    const [people, setPeople] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    function SendPost(event){
        event.preventDefault()
        axios.post('http://192.168.0.104:3100/post', {
            people: people,
            message: message
        })
        
        navigate('/')
    }

    return(
        <form className={style.container} onSubmit={SendPost} method="POST">

            <input onChange={(e)=>setPeople(e.target.value)} value={people} placeholder='Digite seu nome (Opcional)'/>
            <input onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Digite sua mensagem'/>

            <button>Enviar</button>

        </form>
    )
}