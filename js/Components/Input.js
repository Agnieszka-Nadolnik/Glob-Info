 import React, {Component} from 'react';
import HolidaysInformation from './data/countrydata';

class HolidaysData extends Component {
    render() {
        const {data} = this.props;

        return (
            <div>
                 <SampleHolidays prod={data} id={data.id} />
            </div>

        )
    }
}

class SampleHolidays extends Component {
    render() {
        const {prod} = this.props;
        return (
             <ul>{prod.activities.map( item => <li>{item}</li>)}</ul>
         )
    }
}

class AllInformation extends Component {
    render() {
        const{data} = this.props;
        return (
            <HolidaysData data = {data} />
        )
    }
}

export default AllInformation;


