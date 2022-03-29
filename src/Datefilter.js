import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class DatePicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    today=()=>{
        return this.state.date.toDateString();
    }

    movedayforward=()=>{
        let ndate = this.state.date.getDate() + 1;
        const newdate = {
            date: ndate
        };
        this.setState({date: newdate})
        console.log(newdate)
        return newdate;
    }

    movedaybackward=()=>{
        let ndate = this.state.date.getDate() - 1;
        const newdate = {
            date: ndate
        }
        this.setState({date: newdate})
        console.log(newdate)
        return newdate.toDateString();
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