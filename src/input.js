import React, { Component } from 'react'
import './input.css'

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            edit:false   
        }
    }
    handleChange = (event)=>{
        const inputValue = event.target.value 

        this.setState({ value: inputValue})

        if(inputValue === ''){
            this.setState({edit: false}) 
        } else{
            this.setState({edit:true})
        }
    }

    handleKeyPress = (event) =>{
        //if we hit enter while typing inside our input
        if(event.key==='Enter'){
            this.handleSubmit()
        }
    }

    handleSubmit = () =>{
        this.props.onTaskAdd(this.state.value)

        //clean the input
        this.setState({value: '', edit:false})
    }

    render(){
        return (
            <div className='Wrapper'>
                <span className='taskadd' >
                <input className='inputbox'  placeholder='Add a task' type="text" 
                value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                <button className='allbuttons' onClick={this.handleSubmit} >Add</button>
                </span>
                
            </div>
              
        
        );
    }
}
export default Input
