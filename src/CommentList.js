import React, {Component} from "react";
import Comment from "./Comment";

class CommentList extends Component{

 
    render(){
        const commentNodes = this.props.data.map(comment => {
            return(
                 // {/* passing props */}
                <Comment author = {comment.author} key= {Comment.id}> 
                    {comment.text}
                </Comment>
            )
        })

        return(
            <div className = "comment-list">
            {commentNodes} 
            {/* array of comment Components */}
            </div>
        )
    }
}

export default CommentList