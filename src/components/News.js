import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  //document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`
  const capitalizeFirstLetter = (title) => (title.slice(0,1).toUpperCase()+title.slice(1,title.length))

  const updateNews = async() =>
  {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])
  


  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
    setTotalResults(parsedData.totalResults)
 
  };

    return (
      <>
        <h2 className='text-center' style={{margin :'35px 0px' , marginTop: '90px'}}>News - {capitalizeFirstLetter(props.category) } Headlines</h2>
        <div>
          {loading && <Spinner />}
        </div>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
          {articles.map((element)=>{
            return <div className="col-md-4" key ={element.url}>
              <NewsItem  title = {!element.title? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor justo vitae lectus finibus dapibus. Etiam id nibh ipsum. Fusce facilisis interdum volutpat. Vivamus dapibus ornare tristique. Sed ":element.title} description = {!element.description?"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor justo vitae lectus finibus dapibus. Etiam id nibh ipsum. Fusce facilisis interdum volutpat. Vivamus dapibus ornare tristique":element.description} imageUrl={!element.urlToImage?"":element.urlToImage} newsUrl ={!element.url?"":element.url} author ={element.author?element.author:'Unkown'} date ={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    )
  }

News.defaultProps = {
  country: 'in',
  apiKey : '3bcc857bc8c64fd5b493ef899787a539',
  pageSize : '18',
  category: 'general'

}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string,
  category: PropTypes.string
}

export default News

