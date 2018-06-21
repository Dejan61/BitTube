import React from 'react';

class PreviousVideo extends React.Component {
    constructor(props) {
        super(props)
    }

    handler = (event) => {
        this.props.collectId(event.target.id);
    }

    render() {
        return (
            <div className="row previousVideo">
                <div className='col-6'>
                    <img src={this.props.image} id={this.props.id} onClick={this.handler} alt="image" />
                </div>
                <div className='col-6'>
                    <p>{this.props.title}</p>
                </div>
            </div>
        )
    }
}

export default PreviousVideo;