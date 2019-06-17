import React, {Component} from 'react';
import Picker from './Picker.js';
import HolidayData from './data/countrydata';
import AllInformation from './Input.js';
import HotDeals from './HotDeal';




class Form extends Component {

    state = {
        country: '',
        data: null
    }


    handleChangePrice = (e) => {
       this.setState({
            country: e.target.value
        })
    }


    handleSubmit = (e) => {
        document.querySelector('.error').style.display = 'none';
        // let showError = true;

        e.preventDefault();
        const data = HolidayData.filter((item) => {
            if( this.state.country == item.country) {
            console.log('działa',item.airplaneprice);
             const sectionForm = document.querySelector('.about-holidays');
             sectionForm.style.display = 'block';
             document.querySelector('.holiday-banner h2').innerText = `Welcome in ... ${item.country}`;
             document.querySelector('.description p').innerText=item.info;
             document.querySelector('.holiday-banner').style.backgroundImage = item.image;
            //  showError = false;
             return true;

                 } 
                }
            )
            if(data.length == 0) {
            document.querySelector('.error').style.display = 'flex';
            const sectionForm = document.querySelector('.about-holidays');
             sectionForm.style.display = 'none';
            this.setState({
                data: null
            })
        } else {
            this.setState({
                data: data[0],
            })
        }
        }

        
           
 
      

    render() {
        return(
            <>
            <section className="form size">
                <form className="form-holiday" onSubmit={this.handleSubmit}>
                    <input className="country" type="text" value={this.state.price} onChange={this.handleChangePrice} placeholder="Select Country"></input>
                    <input className="submit-change" type="submit" value="Submit" onClick = {this.handleClick}></input>
                    <button style={{display:'none'}}></button>
                </form>
        </section>
        <section className="about-holidays"> 
        <div className="holiday-banner">
            <h2></h2>
        </div>
        <div className="description">
            <p></p>
        </div>
        <div className="hotel">
            <h3>The Best Hotels...</h3>
            <div className="hotel-reservation">
                <div className='style-picker'>
                    <Picker className="date"/>
                    <Picker className="date"/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
        <div className="place">
            <h3> The Best Places to Visit </h3>
            <div className="place-images">
                <div><p>opis</p></div>
                <div><p>opis</p></div>
                <div><p>opis</p></div>
                <div><p>opis</p></div>
            </div>
        </div>
        <div className='activities'>
            <h3>Top experiences</h3>
            <ul>
        { this.state.data == null ? null : <AllInformation data = {this.state.data} /> }
            </ul>
        </div>
        </section>
        <section className="error">
            <p>niestety wybrany kraj nie istnieje w naszej bazie danych</p>
        </section>
        </>
        )
    }
}


export default Form;

{/* <FormPrice.Control  className="price" type="text" placeholder="Select Price" value={this.state.price} onChange={this.handleChangePrice}/>
<div className="date">
    <Picker/>
    <Picker/>
</div>
<Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>;
<Button variant="contained" color="primary" type="submit">
    Hello World
</Button>
<input type="submit" onSubmit={this.handleSubmit}>cokolwiek</input>
<div></div> */}