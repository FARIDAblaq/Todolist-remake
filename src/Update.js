import * as React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
padding: 1rem;
border-bottom: 1px solid #e2e8f0; 
`

const deletebuttonStyles = `
border:0;
    border-left:1px solid #e2e8f0;
    background-color:#6c757d;
    color: #fff;
    padding: 1rem 2rem;
    width:100px;
    height:60px;
    text-align: center;
    padding:0;
    font-weight: 400;
    transition: all 0.25s ease-in-out;
flex:1;

&:focus{
    outline: 0;
}

&:hover:{
    cursor: pointer;
    filter: brightness(105%);
}
`

const Button = styled.button`
${deletebuttonStyles}

border;0;
border-radius:0%;
`

const Wrapper = styled.div`
border-bottom: 1px solid #e2e8f0;
display;flex;
min-width:400px;
`

const StyledInput = styled.input`
width:80%;
padding: 1rem;
border:0;`

export class Update extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            value : '',
            edit : false

        }
    }

    handleUpdateTask= (event)=>{
        const inputValue = event.target.value 

        this.setState({ value: inputValue})

        if(inputValue === ''){
            this.setState({edit: false}) 
        } else{
            this.handleEditmode()
        }
    }

    handleEditmode = ()=>{
        this.setState({edit:true})
    }

    handleKeyPress = (event) =>{
        if(event.key==='Enter'){
            this.handleSubmit()
        }
    }

    handleSubmit = () =>{
        this.props.onUpdate(this.state.value,this.props.id) 
        this.setState({value: '', edit:false})
    }

    render(){   
        return (
            <Component> 
                {this.state.edit&&<Wrapper>
                <StyledInput 
                    placeholder='Update item'
                    value= {this.state.value}
                    onChange={this.handleUpdateTask}
                    onKeyPress={this.handleKeyPress}
                    />
                    <Button onClick={this.handleSubmit}>Update</Button>
                </Wrapper>}
                <Button onClick={this.handleEditmode}>  Edit</Button>
            </Component>
            
        )
    }
}

export default Update

