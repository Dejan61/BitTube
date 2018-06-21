import React from 'react';
import { Link } from 'react-router-dom'

class SuggestedVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    handler = (event) => {
        this.props.collectId(event.target.id);
    }

    render() {
        return (
            <div className="row suggestedVideo">
                <div className='col-6'>
                    <img src={this.props.image} alt="image" id={this.props.id} onClick={this.handler} />
                </div>
                <div className='col-6'>
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

export default SuggestedVideo;