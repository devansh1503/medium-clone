import React, { useEffect, useState } from "react"
import { Card } from "../../components/blog/Card"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Middiv from "../../components/middiv/Middiv"

export const Home = () => {
  const [posts, setPosts] = useState([])

  // setp 2
  const { search } = useLocation()
  // const location = useLocation()
  //console.log(location)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("https://medium-backend-topaz.vercel.app/posts" + search)
      setPosts(res.data)
    }
    fetchPost()
  }, [search])
  return (
    <>
      <Middiv />
      <Card posts={posts} />
    </>
  )
}
