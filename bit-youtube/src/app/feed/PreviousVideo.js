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
                    <img src="https://i.ytimg.com/vi/VNL5rrsz8MY/mqdefault.jpg" alt="image" />
                </div>
                <div className='col-6'>
                    <p>Dejan Atanackovic</p>
                </div>
            </div>
        )
    }
}

export default PreviousVideo;