import React, { Component } from 'react'
import Input from './input';
import './Todolist.css'
import {  v4 as uuidv4 } from 'uuid'
import  List  from './List';


class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [
                {   
                    id:uuidv4(),
                    label:"Finish Assignment",
                    completed:false
                }
            ]
            
        }
    }
    handleTaskAdd = (newvalue) => {
        const task = {
            id:uuidv4(),
            label:newvalue,
            completed: false

        }
        const newItems = [task, ...this.state.items]
        this.setState({items : newItems})
       
    }

    handleUpdate = (newvalue,id)=>{
        const newtask={
            id:id,
            label:newvalue,
            completed:false
        }
        
        const updatedItem = this.state.items.map((item)=>{
            if(item.id===newtask.id){
                item.label=newtask.label
                
            }return item

        })

        this.setState({items:updatedItem})
    }

    handleDelete = (id) =>()=>{
        const filteredItems = this.state.items.filter(item =>
        item.id !== id)

        this.setState({
            items:filteredItems
        })
    }

    handleComplete = (id) => () => {
        const filteredItem =  this.state.items.filter((item) => item.id === id)[0]

        filteredItem.completed = !filteredItem.completed

        this.setState({item: filteredItem})
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
                <Input onTaskAdd={this.handleTaskAdd}/>
                <List  items={filteredItems}
                onDelete={this.handleDelete}
                onUpdate={this.handleUpdate}
                onComplete={this.handleComplete}/>
            </div>  
        );
    }
}
export default Todolist