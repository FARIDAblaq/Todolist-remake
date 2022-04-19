import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date().toDateString()
        };
    }

    today=()=>{
        return this.state.date;
    }

    movedayforward=()=>{
        const currentdate = new Date()
        currentdate.setDate(currentdate.getDate()+1);
        let nextdate = currentdate.toDateString();
        this.setState({date: nextdate})
        console.log(currentdate.toDateString());
    
        return nextdate;
    
    }

    movedaybackward=()=>{
        const currentdate = new Date()
        currentdate.setDate(currentdate.getDate() - 1);
        let prevdate = currentdate.toDateString();
        this.setState({date: prevdate})
        console.log(currentdate.toDateString());
    
        return prevdate;
    }



    render(){
        return(
            <h2><ArrowBackIosIcon onClick={this.movedaybackward} ></ArrowBackIosIcon>
            {this.today()}
            <ArrowForwardIosIcon onClick={this.movedayforward} ></ArrowForwardIosIcon>
            </h2>
        )
    }
}
export default DatePicker