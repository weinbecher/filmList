import React,{ Component } from "react";
import CommentList from "../components/CommentList";
import CommentBox from "../containers/CommentBox";

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            author : '',
            text : ''
        };
        this.handleAuthorChange = this.handleAuthorChange.bind(this); 
        // just like total += 1
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAuthorChange(e){
        this.setState({author:e.target.value})
    }

    handleTextChange(e){
        this.setState({text:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const author = this.state.author.trim(); //clean white space
        const text = this.state.text.trim();
        if (!text || !author){
            return 
        }
        //TODO: UPDATE this list comments

        this.props.onCommentSubmit({author: author, text:text})
        this.setState({author:'', text: ''})
    }

    render(){
        return(
            <form className = "comment-form" onSubmit = {this.handleSubmit}>
            <input type = "text" placeholder = "Author name" value = {this.state.author} onChange = {this.handleAuthorChange}></input>
            <input type = "text" placeholder = "comment" value = {this.state.text} onChange = {this.handleTextChange}></input>
            <input type = "submit" value = "Add comment "></input>
            </form>
        )
    }
}

export default CommentForm;