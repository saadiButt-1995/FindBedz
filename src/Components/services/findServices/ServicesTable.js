import React from "react";
import { Wrapper } from "./findServices.styled";
const ServicesTable = () => {
  return (
    <Wrapper>
        
        <table class="services-table table table-striped table-inverse ">
            <thead class="thead-inverse table-head" style={{borderRadius: '10px'}}>
                <tr>
                    <th>TYPE</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>TELEPHONE NO.</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>GOVT.</td>
                        <td>CA DMV</td>
                        <td>22335 Colorado Ave, Santa Monica, CA 90403 </td>
                        <td>800-777-0133</td>
                    </tr>
                    <tr>
                        <td>GOVT.</td>
                        <td>LOS ANGELES COUNTY SERVICES</td>
                        <td>wahdat colony 51259 gujranwala , Pakistan </td>
                        <td>+92333 - 8108284</td>
                    </tr>
                    <tr>
                        <td>GOVT.</td>
                        <td>SOCIAL SECURITY ADMIN</td>
                        <td>11500 W Olympic Blvd, Los Angeles, CA  </td>
                        <td>800-876-6543</td>
                    </tr>
                    <tr>
                        <td>HEALTH.</td>
                        <td>ST. JOSEPH’S CENTER</td>
                        <td>404 Lincoln Blvd, Santa Monica, CA 90402 </td>
                        <td>+92333 - 8108284</td>
                    </tr>
                    <tr>
                        <td>CLOTHES.</td>
                        <td>SALVATION ARMY</td>
                        <td>116 10th St. Santa Monica, CA 90405 </td>
                        <td>+92333 - 8108284</td>
                    </tr>
                    <tr>
                        <td>HEALTH.</td>
                        <td>VENICE FAMILY CLINIC</td>
                        <td>604 Rose Ave, Venice, CA 91110 </td>
                        <td>+92333 - 8108284</td>
                    </tr>
                </tbody>
        </table>            
    </Wrapper>
  )
}


export default ServicesTable

