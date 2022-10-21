import './App.css';
import LoadingBar from 'react-top-loading-bar'
import { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress:0
  }

  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <NavBar />
            <Routes>
                <Route exact path="/" element = {<News setProgress= {this.setProgress}key= "Home" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='general'/>} />  
                <Route exact path="/business" element = {<News setProgress= {this.setProgress}key= "business" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='business'/>} />
                <Route exact path="/entertainment" element = {<News setProgress= {this.setProgress}key= "entertainment" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='entertainment'/>} />
                <Route exact path="/general" element = {<News setProgress= {this.setProgress}key= "general" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='general'/>} />
                <Route exact path="/health" element = {<News setProgress= {this.setProgress}key= "health" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='health'/>} />
                <Route exact path="/science" element = {<News setProgress= {this.setProgress}key= "science" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='science'/>} />
                <Route exact path="/sports" element = {<News setProgress= {this.setProgress}key= "sports" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='sports'/>} />
                <Route exact path="/technology" element = {<News setProgress= {this.setProgress}key= "technology" pageSize={'18'} country='in' apiKey='1bb6100bb90a457c891823e8e3716fed' category='technology'/>} />
            </Routes>
        </Router>
      </div>
    )
  }
}
