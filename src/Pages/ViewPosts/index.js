import Post from '../../Components/Post'
import style from './style.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ViewPosts(){

    const navigate = useNavigate()
    
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get('http://192.168.0.104:3100/messages')
        .then(res => setPosts(res.data))
    },[])

    return(
        <main className={style.container}>
            <section className={style.campButton}>
                <button onClick={()=>navigate('/send')}>+</button>
            </section>
            {posts.map(item => (
                <Post key={item.id} message={item.message} people={item.people} date={item.date_public}/>
            ))}        
        </main>
    )
}