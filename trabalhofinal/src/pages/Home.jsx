import React, { useContext, useEffect } from 'react'
import { NewsContext } from '../contexts/NewsContext'

export default function Home() {
  const { getNews, dados } = useContext(NewsContext)

   useEffect(() => {
        getNews()
   },[])

   console.log(dados);
  return (
    <div>
        <p>aaa</p>
    </div>
  )
}
