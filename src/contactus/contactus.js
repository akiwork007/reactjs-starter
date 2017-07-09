import React, { Component } from 'react';
import './contactus.css';



export default class ContactForm extends Component {
    constructor(props){
      super(props);
      this.state = {
          firstname: 'Ankit',
          middlename :'Kumar',
          lastname : 'Aggarwal',

      }
    }

    showValues(value){
        alert('Welcome '+value);
    }

    changeValue(val)
    {
        this.setState({value:val.target.value})
    }

    render(){
        return(
            <form className="disabled">
                <h5 className="alert-heading text-center p-2 font-weight-bold"> Customer Form</h5>
                <div className="p-2 font-weight-bold">Personal Information</div>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group row">
                            <label className="col-3 col-form-label">First Name</label>
                            <input type="text" className="form-control col-9" id="userFirstName" placeholder="First Name" onChange= {(value) => this.changeValue(value)} value={this.state.firstname}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Middle Name</label>
                            <input type="text" className="form-control col-9" id="userMiddleName" placeholder="Last Name" value={this.state.middlename}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Email address</label>
                            <input type="email" className="form-control col-9" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Sex</label>
                            <select className="form-control col-9" id="sexSelect">
                                <option>Male</option>
                                <option>Famale</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Last Name</label>
                            <input type="text" className="form-control col-9" id="userLastName" placeholder="Enter Last Name" value={this.state.lastname}/>
                        </div>
                        <div className="form-group row">
                            <label className="col-4 col-form-label">Contact Number</label>
                            <input type="text" className="form-control col-8" id="userLastName" placeholder="Enter Contact Number" />
                        </div>
                        <div className="form-group row">
                            <label className="col-3 col-form-label">Age</label>
                            <input type="text" className="form-control col-9" id="userAge" placeholder="Age" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary left float-right" onClick = {() => this.showValues(this.state.value)}>Submit</button>
            </form>            
        );
    }
}









