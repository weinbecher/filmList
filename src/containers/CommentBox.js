import React, {Component} from "react"
import CommentList from "../components/CommentList"

class CommentBox extends Component {
    constructor(pros){
        super(pros);//pass pros to super class
        this.state = {
            data:[
                { id: 1,
                  author: "John",
                  text: "I love JS more each day."
                },
                { id: 2,
                  author: "Juan",
                  text: "Just wait until we add the form. It's gonna be so good."
                }
           ]
        }
    }


    render(){
        return (
            <div className="comment-box">
                <h2>comments</h2>
                <CommentList data={this.state.data}> </CommentList>
            </div>
        )
    }

}


export default CommentBox;