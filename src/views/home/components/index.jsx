import React, { Component } from 'react'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD';
import moment from 'moment';
class Shou extends Component {
    render() {
        
        return (
            <div>
                <div className='echartsbox'>
                    <h2>统计</h2>
                    <RangePicker
                    defaultValue={[moment('2015/01/01', dateFormat),
                    moment('2015/01/01', dateFormat)]}
                    format={dateFormat}
                    />mountNode,
                </div>
            </div>
        )
    }
}
export default Shou