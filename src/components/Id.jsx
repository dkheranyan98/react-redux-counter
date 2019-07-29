import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchIdData } from "../store/counter/actions";
import { Table } from 'reactstrap';
import { Spinner } from 'reactstrap';

class Id extends React.Component {
    componentDidMount() {
        this.props.onFetchIdData(this.props.match.params.id)
    }
    render() {
        return this.props.loading ? (
            <div> <Spinner color="danger" /> </div>
        ) : (
                <Table>
                    <thead>
                        <tr>
                            <th>{this.props.post.id}</th>
                            <th>{this.props.post.title}</th>
                            <th>{this.props.post.body}</th>
                        </tr>
                    </thead>
                </Table>
            )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchIdData: (id) => dispatch(fetchIdData(id)),
    }
}

const mapStateToProps = state => {
    return {
        post: state.counter.post,
        loading: state.ui.loading,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Id));