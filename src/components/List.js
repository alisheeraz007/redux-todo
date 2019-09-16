import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store';
import { goBack } from '../common/index'
import Edit from './Edit'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            edit: false,
            index: ""
        }
    }

    componentWillMount() {
        if (this.props.state) {
            if (this.props.state.users.length) {
                this.setState({
                    users: this.props.state.users
                })
            } else {
                this.props.history.push('/')
            }
        } else {
            this.props.history.push('/')
        }
    }

    delete = (payload) => {
        store.dispatch({
            type: "del",
            payload
        })
    }

    edit = (index) => {
        this.setState({
            index: index,
            edit: true
        })
    }

    editFalse = () => {
        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div className="mainContainer">
                {this.state.edit ? <Edit editFalse={this.editFalse} index={this.state.index} /> :
                    <div>
                        <div>
                            <button className="back" onClick={(ev) => { goBack(this.props, ev) }}>
                                back
                    </button>
                        </div>
                        {this.state.users.length ?
                            <table>
                                <tbody>
                                    <tr>
                                        <th>S.no</th>
                                        <th>User Name</th>
                                        <th>User Password</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    {this.state.users.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.userName}</td>
                                                <td>{user.password}</td>
                                                <td>
                                                    <button
                                                        onClick={() => this.edit(index)}
                                                    >
                                                        Edit
                                            </button>
                                                </td>
                                                <td>
                                                    <button onClick={(ev) => this.delete(index)}>
                                                        Delete
                                            </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            : null}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        state
    }
}


export default connect(mapStateToProps)(withRouter(List));