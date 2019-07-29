import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchIdDataUsers } from "../store/counter/actions";
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';

class Users extends React.Component {
    componentDidMount() {
        this.props.onFetchIdDataUsers(this.props.match.params.id)
    }
    render() {
        return this.props.loading ? (
            <div> <Spinner color="danger" /> </div>
        ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>{this.props.post.name}</th>
                            <th>{this.props.post.username}</th>
                            <th>{this.props.post.email}</th>
                        </tr>
                    </thead>
                </Table>
            )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchIdDataUsers: (id) => dispatch(fetchIdDataUsers(id)),
    }
}

const mapStateToProps = state => {
    return {
        post: state.counter.post,
        loading: state.ui.loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Users));