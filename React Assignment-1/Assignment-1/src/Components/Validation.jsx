import React, { Component } from "react";

class Validation extends Component {
    constructor() {
        super()
    }
    state = {
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Firsterr: "",
        Lasterr: "",
        Emailerr: "",
        Phoneerr: ""
    }
    handlerstate = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    Validation = (event) => {
        let Firsterr = ""
        let Lasterr = ""
        let Emailerr = ""
        let Phoneerr = ""
        event.preventDefault()
        if (!this.state.FirstName.match(/^[A-Za-z]{3,}$/)){
            Firsterr = "should have minimum 3 characters"
        }
        if (!this.state.LastName.match(/^[A-Za-z]{1,}$/)) {
            Lasterr = "Should have minimum 1 characters"
        }
        if (!this.state.Email.match(/^[a-z0-9._+%]+@gmail\.com$/)) {
            Emailerr = "Invalid email Id"
        }
        if (!this.state.PhoneNumber.match(/^[0-9]{10}$/)) {
            Phoneerr = "Minimum 10 numbers"
        }
        if (Firsterr || Lasterr || Emailerr || Phoneerr) {
            this.setState({ Firsterr, Lasterr, Emailerr, Phoneerr })
        } else {
            this.setState({ Firsterr, Lasterr, Emailerr, Phoneerr })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <form action="" className="text-center" onSubmit={this.Validation}>
                                <h2>Form Validation</h2>
                                <label htmlFor="FirstName">FirstName</label>
                                <input type="text" className="form-control" onChange={this.handlerstate} name="FirstName" value={this.state.FirstName} />
                                {this.state.Firsterr && <p className="text-danger">{this.state.Firsterr}</p>}

                                <label htmlFor="LastName">LastName</label>
                                <input type="text" className="form-control" onChange={this.handlerstate} name="LastName" value={this.state.LastName} />
                                {this.state.Lasterr && <p className="text-danger">{this.state.Lasterr}</p>}
                                <label htmlFor="Email">Email</label>
                                <input type="text" className="form-control" onChange={this.handlerstate} name="Email" value={this.state.Email} />
                                {this.state.Emailerr && <p className="text-danger">{this.state.Emailerr}</p>}
                                <label htmlFor="PhoneNumber">PhoneNumber</label>
                                <input type="text" className="form-control" onChange={this.handlerstate} name="PhoneNumber" value={this.state.PhoneNumber} />
                                {this.state.Phoneerr && <p className="text-danger">{this.state.Phoneerr}</p>}
                                <button className="btn btn-primary mt-2" type="submit">Submit</button>

                            </form>
                        </div>
                        <div className="col-lg-4"></div>
                    </div>
                </div>

            </>
        )
    }
}
export default Validation