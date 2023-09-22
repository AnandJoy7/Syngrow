

// UserInfoForm.js



import React, { Component } from 'react';



class UserInfoForm extends Component {

    constructor(props) {

        super(props);

        this.state = {

            name: '',

            id: '',

            email: '',

            password: '',

            dob: '',

            gender: 'male', // Default gender

            phoneNo: '',

            address: '',

            accountCreated: ''

        };

    }



    handleInputChange = (e) => {

        const { name, value } = e.target;

        this.setState({ [name]: value });

    };



    handleSubmit = (e) => {

        e.preventDefault();

        // You can handle form submission here, e.g., send data to the server or perform validation.

        console.log(this.state);

    };



    render() {

        return (

            <form onSubmit={this.handleSubmit}>

                <div className="form-group">

                    <label htmlFor="name">Name:</label>

                    <input

                        type="text"

                        id="name"

                        name="name"

                        value={this.state.name}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>



                <div className="form-group">

                    <label htmlFor="id">ID:</label>

                    <input

                        type="text"

                        id="id"

                        name="id"

                        value={this.state.id}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>



                <div className="form-group">

                    <label htmlFor="email">Email:</label>

                    <input

                        type="email"

                        id="email"

                        name="email"

                        value={this.state.email}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>



                <div className="form-group">

                    <label htmlFor="password">Password:</label>

                    <input

                        type="password"

                        id="password"

                        name="password"

                        value={this.state.password}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>



                <div className="form-group">

                    <label htmlFor="dob">Date of Birth:</label>

                    <input

                        type="date"

                        id="dob"

                        name="dob"

                        value={this.state.dob}

                        onChange={this.handleInputChange}

                        required

                    />

                </div>



                <div className="form-group">

                    <label htmlFor="gender">Gender:</label>

                    <select

                        id="gender"

                        name="gender"

                        value={this.state.gender}

                        onChange={this.handleInputChange}

                    >

                        <option value="male">Male</option>

                        <option value="female">Female</option>

                        <option value="other">Other</option>

                    </select>

                </div>



                <button type="submit">Sign Up</button>

            </form>

        );

    }

}



export default UserInfoForm;