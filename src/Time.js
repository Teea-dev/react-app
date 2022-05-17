import React from 'react';
import  Moment from 'react-moment';
import moment from 'moment';

const Time = () =>  {
    // const moment = require('moment');
    const dateToFormat = moment().format('lll');
  
    
        return (
            <div className="Time">
            <Moment  data={dateToFormat} />
            </div>
        );
    
}
 
export default Time;