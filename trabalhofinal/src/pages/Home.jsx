import React, { useContext, useEffect } from 'react'
import { NewsContext } from '../contexts/NewsContext'

export default function Home() {
  const { getNews } = useContext(NewsContext)

   useEffect(() => {
        getNews()
   },[])

  return (
    <div>
        <p>aaa</p>
    </div>
  )
}
