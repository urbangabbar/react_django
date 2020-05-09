import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addLead } from "../../actions/Leads"
function Form(props) {
    const { addLead, error } = props;
    const [formState, setFormState] = useState({ name: "", email: "", message: "" })
    const { name, email, message } = formState;
    const onFormChange = e => {
        const newState = { ...formState };
        newState[e.target.id] = e.target.value;
        setFormState(newState);
    }
    const formSubmit = e => {
        e.preventDefault();
        addLead(formState);
    }
    return (
        <>
            <h2>Add lead</h2>
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" value={name} id="name" onChange={e => onFormChange(e)} placeholder="Please enter your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Email</label>
                    <input type="text" className="form-control" value={email} id="email" value={email} onChange={e => onFormChange(e)} placeholder="Please enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Message</label>
                    <input type="text" className="form-control" value={message} id="message" value={message} onChange={e => onFormChange(e)} placeholder="Please enter message" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {error?.statusText && <div className="alert alert-danger mt-3" role="alert">
                {error.statusText + " " + error.data?.email[0]}
            </div>}
        </>
    )
}
const mapStateToProps = state => ({
    error: state.Leads.error
});

export default connect(mapStateToProps, { addLead })(Form);