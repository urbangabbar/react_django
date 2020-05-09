import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/Leads';

function Lead(props) {
    const { getLeads, leads, deleteLead } = props;
    useEffect(() => {
        getLeads();
    }, [])
    return (
        <>
            <h2>Current Leads</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map(lead => (
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td><button className="btn btn-danger" onClick={e => deleteLead(lead.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}


const mapStateToProps = state => ({
    leads: state.Leads.leads
})

export default connect(mapStateToProps, { getLeads, deleteLead })(Lead);