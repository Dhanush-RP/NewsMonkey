import React from 'react'

const NewsItem = (props) => {

    let {title, description ,imageUrl ,newsUrl ,author ,date ,source} = props
    return (
      <div className='my-4'>
        <div className="card" >
        <div style = {{display:"flex", justifyContent:'flex-end', position:'absolute', right:'0'}}><span className="badge rounded-pill bg-danger"> {source} </span></div>
        <img src={!imageUrl? "https://guwahatiplus.com/public/web/images/default-news.png": imageUrl} width='100px' height='250px' className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title.slice(0,30)}{title.length>30? '...': ''}</h5>
        <p className="card-text">{description.slice(0,80)}{description.length>30? '...': ''}</p> 
        <p className = "card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()} </small></p>
        <a href={newsUrl?newsUrl:'/'} target="blank" className="btn btn-sm btn-primary">Read More</a>  
  </div>
</div>
      </div>
    )
}

export default NewsItem