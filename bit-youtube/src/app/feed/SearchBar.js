import React from 'react';
import { debounce } from 'lodash';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ""
        }
        this.collectValue = debounce(this.collectValue, 2000);

    }
    collectValue = (value) => {
        this.props.collectValue(value);
    }

    handleInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }

    handleValue = (event) => {
        if (event.keyCode === 13) {
            this.collectValue(event.target.value)
            this.setState({
                inputText: ""
            })
        }
    }

    render() {
        return (
            <div className='search col-12'>
                <i className="fa fa-search"></i><input type='text' value={this.state.inputText} onChange={this.handleInput} onKeyUp={this.handleValue} placeholder="Search for some videos" />
            </div>
        )
    }
}

export default Search;