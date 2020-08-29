import React, { Component } from 'react';


class NoteTake extends Component{

    constructor(props){
        super(props);

        this.state={
            items:[]
        }
        this.addNote=this.addNote.bind(this);
    }

    addNote(event){
        console.log("success");

        if(this.theTitle !==""){
            var newItem={
                title:this.theTitle.value,
                note:this.theNote.value
            };
        }

        this.setState((prevState)=>{
            return{
                items:prevState.items.concat(newItem)
            }
        });

        this.theNote.value="";
        this.theTitle.value="";

      event.preventDefault();
    }

    render(){
        return(
            
            
            <>
              <header>
              <h1>
              Smarterp Task
              </h1>
              </header>
              <section className="outer">


              <div className="inputdata-inner">
                <form onSubmit={this.addNote} className="form-box">
                  <span className="text">
                    Create A Post
                  </span>
                  <div className="wrap-input">
                    <input ref={(title)=>this.theTitle=title} className="input100" type="text" name="name" placeholder="Post Title" required />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input">
                    <textarea ref={(note)=>this.theNote=note} className="input100" name="message" placeholder="Post Text" defaultValue={""} required />
                    <span className="focus-input100" />
                  </div>
                  <div>
                    <button type="submit" className="contactbtn">
                      Post
                    </button>
                  </div>
                </form>
              </div>


              <div className="main-content">
              <span className="text">
                    All Posts
                  </span>
              <ul>
              {this.state.items.map( (val)=>
                <li>{val.title}-{val.note}</li>
                )}
              </ul>
              </div>

              


              
              </section>

              <footer>
             ©️Satish kumar
              </footer>

            </>
            
           
        )
    }
}

export default NoteTake;