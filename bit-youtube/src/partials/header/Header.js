import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Link to='/feed'><h1>Bit<span id='tube'>Tube</span></h1></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;