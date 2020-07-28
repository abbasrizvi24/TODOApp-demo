import React, { Component, Fragment } from "react";
import Posts from './Component/Post';
import './App.css';

class MyFirstApp extends Component
{
    constructor()
    {
        super();
        this.postID = 0;
        this.Body = "";

        this.state = 
        {
            postAray: [
                
            ]
         }
     }

    // for Delete Task
    deleteEvent = (index) =>
    {
        const copyPostAray = Object.assign([], this.state.postAray);
        copyPostAray.splice(index, 1);
        this.setState({
            postAray : copyPostAray
        })
     }

    // for value from textbox
    setPost = (element) =>
    {
       this.Body = element.target.value
     }
    
    // for dynamic generate Task Number
    addPost = () =>
    {
        this.postID = this.postID + 1;
        const copyPostAray = Object.assign([], this.state.postAray);
        copyPostAray.push({
            id: this.postID,
            body: this.Body
        })
        this.setState({
            postAray: copyPostAray
        })
     }
    
    render()
    {
        return (
            <Fragment>
                     <div class="custome-container">
                    <div class="sub-container">
                        <h1 class="heading" >To-Do App!</h1>
                        <p class="custome-label">Add New To-Do</p>
                        <form>
                            <input type="text" placeholder="Enter New Task" class="form-control" onBlur={this.setPost}></input>
                            <br></br>
                            <button type="button" class="btn btn-primary" onClick={this.addPost}>ADD</button>
                        </form>
                    </div>
                </div>
                {/* For content checking */}
                <div class="custome-box">
                    <ul>
                        {
                            this.state.postAray.map((post, index) => {
                                return (
                                    <Posts
                                        key={post.id}
                                        id={post.id}
                                        body={post.body}
                                        delete={this.deleteEvent.bind(this, index)}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>

            </Fragment>   
            );
    }

}

export default MyFirstApp;