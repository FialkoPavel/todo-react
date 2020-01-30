import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        temp: ''
    };

    onSearchChange = (e) => {
        const temp = e.target.value;
        this.setState({temp});
        this.props.onSearchChange(temp);
    };


    render(){
        const searchText = 'Write here...';
        const searchStyle = {
            fontSize: '22px'
        };

        return (
            < input className="input_search"
                    style={ searchStyle }
                    placeholder= { searchText }
                    value={this.state.temp}
                    onChange={this.onSearchChange}
            />
        );
    }

};
