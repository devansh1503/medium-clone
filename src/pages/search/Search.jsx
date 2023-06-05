import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from '../../components/blog/Card'

function Search() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        async function fetchData(){
            await axios.post('/posts/search',{searchItem:localStorage.getItem('txt')}).then((res)=>{
                setPosts(res.data)
            })
        }
        fetchData()
    },[])
  return (
    <div style={{padding:'30px'}}>
        <h1 style={{fontFamily:'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif'}}>
            Search Results For {localStorage.getItem('txt')}-
        </h1>
        <div>
            <Card posts={posts} />
        </div>
    </div>
  )
}

export default Search