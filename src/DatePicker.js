import React, { useState } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TextField from '@material-ui/core/TextField';


function DateNav() {
  const current = new Date();
  var increment = current.getDate();
 
  const [date, setDate] = useState(increment);

  const [value, setValue] = React.useState(increment);

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <h2><ArrowBackIosIcon onClick={() => setDate(date - 1)} ></ArrowBackIosIcon>
     {current.setDate(date)&&current.toDateString()}
     <ArrowForwardIosIcon onClick={() => setDate(date + 1) } ></ArrowForwardIosIcon>
     <div>
     <TextField
        id="date"
        type="date"
        defaultValue={current}
        InputLabelProps={{
          shrink: true,
        }}
      />
     </div>
    </h2>
    
    

  );
}

export default DateNav