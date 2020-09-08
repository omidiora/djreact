import React, { Component } from 'react'
import Article from '../Article';
import axios from 'axios';
import {Card, Button} from 'antd';
import CustomLayout from '../Form';


 class ArticleDetailView extends Component {

    state={
        articles:{}
    }

    componentDidMount(){
        const articleID=this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
        .then(res=>{
            this.setState({
                articles:res.data
            })


        })
    }

        handleDelete=(event)=>{
            const articleID=this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`)
        this.props.history.push('/')






    }





    render() {
        return (
            <Card title={this.state.articles.title}>
                <p>{this.state.articles.content}</p>
                <CustomLayout requestType='post' articleID={this.props.match.params.articleID}
                btnText='Update'/>
                <form onSubmit={this.handleDelete}>
                <Button type='danger' htmlType='submit' >Delete</Button>
                </form>

            </Card>

        )
    }
}

export default ArticleDetailView;