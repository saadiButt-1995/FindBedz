import React from 'react'
import { Wrapper } from './Layout/AdminLayouts.styled'
import Base from './Layout/Base'

export default function Dashboard() {
  return (
    <Wrapper>
      <Base header="Administrator">
        <div class="container">
          <div class="row dash_cards">
              <div class="col-md-4">
                <div class="dash-card">
                  <p className="dash-count">14</p>
                  <p className="dash-title">TOTAL SHELTERS</p>

                </div>
              </div>
              <div class="col-md-4">
                <div class="dash-card">
                  <p className="dash-count">12</p>
                  <p className="dash-title">TOTAL INDIVIDUALS</p>
                  </div>                  
              </div>
              <div class="col-md-4">
                <div class="dash-card">
                  <p className="dash-count">20</p>
                  <p className="dash-title">TOTAL AGENCIES</p>
                </div>                  
              </div>
          </div>
      </div>
      </Base>
    </Wrapper>
  )
}
