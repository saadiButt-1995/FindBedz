import React from 'react'
import { Wrapper } from '../Admin/Layout/AdminLayouts.styled'
import Base from '../Admin/Layout/Base'

export default function Shelters() {

    const data = [
        {
            userName: 'PirateBob', organization: 'Confiz Agency',
            address: '604 Rose Ave', city: 'Venice', state: 'CA', zip_code: 91110, phone: '(321)-656-7962',
            date: '12/09/2019 (12:39 AM)' 
        },
        {
            userName: 'josepill', organization: 'Nobel Agency',
            address: '167 Main st', city: 'Houston', state: 'TX', zip_code: 21176, phone: '(351)-980-5511',
            date: '12/09/2019 (12:39 AM)' 
        }
    ]

    const renderData = () => {
        return data.map((item)=> {
            return (
                <tr>
                    <td>{item.userName}</td>
                    <td>{item.organization}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.zip_code}</td>
                    <td>{item.phone}</td>
                    <td>{item.date}</td>
                    <td>
                        <div className="reserve-action-btns">
                            <button className="text-primary">MODIFY</button>
                            <button className="text-danger">DELETE</button>
                            <button className="text-success login-btn">LOGIN</button>
                        </div>
                    </td>
                </tr>
            )
        }) 
    }
    return (
    <Wrapper>
        <Base header="Shelters">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <div class="row">
                            <div class="col-md-5 m-0 p-0">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    </div>
                                    <input type="text" class="form-control login_field" id="validationCustomUsername" placeholder="Search By Username" aria-describedby="inputGroupPrepend" required />
                                    <span class="input-group-text login_field" id="inputGroupPrepend">
                                        <img src="/images/search_icon.svg" width={'30px'}  alt='search_icon' />
                                    </span>
                                </div>
                            </div>
                            <div class="col-md-2"></div>
                            <div class="col-md-5 m-0 p-0">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    </div>
                                    <input type="text" class="form-control login_field" id="validationCustomUsername" placeholder="Search By Fullname" aria-describedby="inputGroupPrepend" required />
                                    <span class="input-group-text login_field" id="inputGroupPrepend">
                                        <img src="/images/search_icon.svg" width={'30px'} alt='search_icon' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                    <table class="reservation-table table">
                        <thead class="thead-inverse table-head" style={{borderRadius: '10px'}}>
                            <tr>
                                <th>Username</th>
                                <th>Agency Name</th>
                                <th>Street Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Phone</th>
                                <th>Last Modified</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {renderData()}
                            </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </Base>
    </Wrapper>
  )
}
