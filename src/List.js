import React from "react";
import styled from 'styled-components/macro'
import Checkbox from '@material-ui/icons/CheckBox'
import DeleteIcon from '@material-ui/icons/Delete'
import Update from './Update'
import ArrowRightAltSharp from '@material-ui/icons/ArrowRightAltSharp'


const Component = styled.div`
padding: 1rem;
border-bottom: 1px solid #e2e8f0; 
`

const Item = styled.div`
display: flex;
align-items: center;

&:not(:last-of-type){
    margin-bottom:0.5rem;
}
`
const buttonStyles = `
background-color:#ed2f7;
width:20px;
height:20px;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
padding:0;
font-size: 0.9rem;

&:focus{
    outline: 0;
}

&:hover:{
    cursor: pointer;
    filter: brightness(105%);
}
`

const Complete = styled.button`
${buttonStyles}

border: ${props => props.completed ? 0: '1px solid #e2e8f0'};
`
const Label = styled.p`
margin: 0 0 0 0.5rem;
//flex: 1;

text-decoration:${props => props.completed ? 'line-through': 'none'};
color: ${props => props.completed ? '#4A5568':'#000'};

&:hover{
    cursor: pointer;
    color:#4a5568;

}
`
const Nextdate = styled.p`
margin: 0.5rem;
flex: 1;
`
const NoItems = styled.p`
margin: 0;
text-align: center;
color: #4a5568;
`


const List = ({items,onComplete,onMoveForward,onDelete,onUpdate}) => (
    <Component>
    {/* <div>{today}</div> */}
    {items.map(({id,completed,label,date}) => (
        <Item key={id}>
            <Complete completed={completed} 
            onClick={() => onComplete(id)}>{completed && (
            <Checkbox />)} 
            </Complete>
            <Label completed={completed}>{label}</Label>
            <Nextdate>{date}</Nextdate>
            <ArrowRightAltSharp onClick={() => onMoveForward(id)}></ArrowRightAltSharp>
            <DeleteIcon onClick={onDelete(id)} />
            <Update id={id} label={label} onUpdate={onUpdate}/>  
        </Item>
        )
    )
    }{items.length===0 && <NoItems> You have No items</NoItems>}
    </Component>
)

// const component = ( {onClick}) => {
//     const handleClick = () => {
//         onClick();
//         farida();
//     }
//     return <button onClick={() => {
//         onClick()
//     }}></button>
// }

// function farida(){
//     console.log('hello')
// }

// <component onClick={farida}/>



export default List