import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Posts from './components/post'
import Pagination from './components/pagination'
import { Container, Heading } from '@chakra-ui/react'



function App() {
  //for the post
  const[posts, setPosts]= useState([])
  // for the loading
  const[loading, setLoading] = useState(false)
  //for the pagination
  const[currentPage, setCurentPage] = useState(1)
  // for the post per-page
  const[postPerPage]= useState(10)

  useEffect(()=>{
    const fetchData = async function(){
      setLoading(true)
      const responds = await axios.get('http://api.github.com/users/samueluchee/repos')
      setPosts(responds.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  //get current page

  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost -postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

  function paginate(pageNumbers){
    setCurentPage(pageNumbers)
  }

  return (
    <Container>
      <Heading m="30px" color="blue.400">
        My Repositories
      </Heading>
        
        <Posts posts={currentPost} loading={loading}/>
        <Pagination postPerPage={postPerPage} totalPost={posts.length} paginate={paginate}/>
    </Container>
      
  
  )
}

export default App
