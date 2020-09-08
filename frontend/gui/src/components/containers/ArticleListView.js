import React, { Component } from 'react'
import Article from '../Article';
import axios from 'axios';
import CustomLayout from '../Form';



 class ArticleListView extends Component {

    state={
        articles:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/')
        .then(res=>{
            this.setState({
                articles:res.data
            })

        })

    }


















    render() {
        return (
            <div>
            <Article data={this.state.articles} />
            <h2>Create Article</h2>
          <CustomLayout requestType='post' articleID={null}  btnText='Create' />
          </div>
        )
    }
}

export default ArticleListView;