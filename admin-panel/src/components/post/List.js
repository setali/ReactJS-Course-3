import React from 'react'
import {connect} from 'react-redux'
import {DataGrid} from "@material-ui/data-grid";
import {setPosts} from '../../redux/actions/post'

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'title', headerName: 'Title', width: 130},
];

class Posts extends React.Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.props.setItems(data))
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
        setItems: data => dispatch(setPosts(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)












