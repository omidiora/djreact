import React, { useState  , Component} from 'react';
import { Form, Input, Button, Radio } from 'antd';
import axios from 'axios';


class CustomLayout extends Component {
    handleFormSubmit=(event , requestType , articleID)=>{

const title =event.target.elements.title.value;
const content=event.target.elements.content.value;

switch  (requestType){
        case 'post':
           return axios.post('http://127.0.0.1:8000/api/' ,{
                title:title,
                content:content
            })
            .then(res=>console.log(res))
            // .catch(err=>console.err(error));

        case 'put':
    return axios.put(`http://127.0.0.1:8000/api/${articleID}/` ,{
                title:title,
                content:content
            })
            .then(res=>console.log(res))
            // .catch(err=>console.err(error));



}

}

    render() {
        return (
    <Form onSubmitCapture={(event)=>this.handleFormSubmit(event,
    this.props.requestType ,this.props.articleID )} >


            <Form.Item label="title">
    <Input  name='title' placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="content">
                <Input name='content' placeholder="input placeholder" />
            </Form.Item>
            <Form.Item >
    <Button  htmlType="submit">{this.props.btnText}</Button>
            </Form.Item>
            </Form>


)
    }
}


export default  CustomLayout
