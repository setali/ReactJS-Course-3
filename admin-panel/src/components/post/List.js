import React from 'react'
import {connect} from 'react-redux'
import {DataGrid} from "@material-ui/data-grid";
import {setPosts, getPosts} from '../../redux/actions/post'
import {Link} from "react-router-dom";

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'title', headerName: 'Title', width: 130},
    {
        field: '', headerName: 'Action', width: 130,
        renderCell: params => <Link to={`/post/${params.row.id}`}>View</Link>
    },
];

class Posts extends React.Component {

    componentDidMount() {
        this.props.getItems()
    }

    render() {
        return (
            <div style={{height: 400, width: '100%'}}>
                <DataGrid rows={this.props.data} columns={columns} pageSize={10} checkboxSelection/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        data: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setItems: data => dispatch(setPosts(data)),
        getItems: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)












