import React from 'react'
import './Ngo1.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Ngo1() {
    return (
        <div className='navbar'>
            <aside>
                <p> NGO </p>
                <a href="javascript:void(0)">
                    <i class="fa fa-user-o" aria-hidden="true"></i>
                    Maatram Foundation
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-laptop" aria-hidden="true"></i>
                    Agaram Foundation
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-clone" aria-hidden="true"></i>
                    Anbu Foundation
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    Demo 1 Foundation
                </a>
                <a href="javascript:void(0)">
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                    Demo 2 Foundation
                </a>
            </aside>
        </div>
    )
}

