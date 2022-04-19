import React, { Component } from 'react'
import Input from './input';
import './Todolist.css'
import {  v4 as uuidv4 } from 'uuid'
import  List  from './List';
//import DatePicker from './DatePicker'



class Todolist extends Component{
    constructor(props){
        super(props);
        this.handleComplete = this.handleComplete.bind(this);
        this.handleMoveForward = this.handleMoveForward.bind(this)
        this.state = {
            items : [
                {   
                    id:uuidv4(),
                    label:"Finish Assignment",
                    completed:false,
                    date: new Date().toDateString()
                }  
            ]  
        }
        
    }
    handleTaskAdd = (newvalue,newdate) => {
        const task = {
            id:uuidv4(),
            label:newvalue,
            completed: false,
            date: newdate

        }
        const newItems = [task, ...this.state.items]
        this.setState({items : newItems})
       
    }

    handleUpdate = (newvalue,id)=>{
        const newtask={
            id:id,
            label:newvalue,
            completed:false,
            date:new Date().toDateString()
        }
        
        const updatedItems = this.state.items.map((item)=>{
            if(item.id===newtask.id){
                item.label=newtask.label
                
            }return item

        })

        this.setState({items:updatedItems})
    }

    handleDelete = (id) =>()=>{
        const filteredItems = this.state.items.filter(item =>
        item.id !== id)

        this.setState({
            items:filteredItems
        })
    }

    handleComplete = (id) => {

        const filteredItems = this.state.items.map((item) => {
            if(item.id === id){
                item.completed = !item.completed
                return item;
            }
            return item;
        })

        this.setState({items: filteredItems})
    }

    handleMoveForward = (id) => {
        const currentdate =new Date()
    
        currentdate.setDate(currentdate.getDate()+1);
        let nextdate = currentdate.toDateString();
        
        const newdatetasks = {
            id:id,
            label:this.props.label,
            completed:false,
            date: nextdate
        }
        
        const updatedDateItems = this.state.items.map((item)=>{
            if(item.id === newdatetasks.id){
                item.date = newdatetasks.date;
            }
            return item
           
        }) 

         this.setState({items: updatedDateItems});
        
    }
    
    render(){
        const{ mode, items } = this.state
        let filteredItems = []
        if(mode==='completed'){
            filteredItems = items.filter(item =>item.completed===true)
        }
        else{
            filteredItems = items
        }
        return (
            
            <div className='Wrapper'>
                <h1 className='header'>To-Do List Application</h1>
                {/* <DatePicker />  */}
                <Input onTaskAdd={this.handleTaskAdd}/>
                {/* <p>{this.state.date.toDateString()}</p> */}
                <List  items={filteredItems} 
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
                onComplete={this.handleComplete}
                onMoveForward={this.handleMoveForward}
                />
            </div>  
            
            
        );
    }
}
export default Todolist