import * as React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {DataGrid} from '@material-ui/data-grid';
import {setPersons} from '../../redux/actions/person'

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'name', headerName: 'Name', width: 130},
    {field: 'username', headerName: 'Username', width: 130},
    {
        field: '', headerName: 'Action', width: 130,
        renderCell: params => <Link to={`/person/${params.row.id}`}>View</Link>
    },
];

class List extends React.Component {

    // state = {
    //     data: []
    // }

    componentDidMount() {
        !this.props.data.length && fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.props.setItems(data))
        // .then(data => this.props.dispatch({ type: 'PERSONS', payload: data}))
    }


    render() {
        console.log('Props', this.props);

        return (
            <div style={{height: 400, width: '100%'}}>
                <DataGrid rows={this.props.data} columns={columns} pageSize={10}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItems: (data) => dispatch(setPersons(data)),
        // dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)

// const mapStatesToProps = ({root, pages}) => ({
//     ...root,
//     currentPage: pages.page,
// });
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadMasterPage: () => dispatch(loadMasterPage()),
//         loadPages: () => dispatch(loadPages()),
//         loadConfig: () => dispatch(loadConfig()),
//         loadTenant: () => dispatch(loadTenant()),
//         loadThemes: () => dispatch(loadThemes()),
//         selectPage: (page) => dispatch(selectPage(page)),
//         setBaseURL: (baseURL) => dispatch(setBaseURL(baseURL)),
//     }
// }
//
//
// export default connect(mapStatesToProps,mapDispatchToProps())(SpeedDialTooltipOpen);
//
//
//
//
//










