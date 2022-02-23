import React from "react";
import { Wrapper } from "./findServices.styled";

const ServicesList = () => {
  return (
    <Wrapper>
        <div class="services-list">
            <div class="service-card">
                <img src="/Images/service_govt.svg" alt="" />
                <span class="service_card_text">Govt</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_meals.svg" alt="" />
                <span class="service_card_text">MEALS</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_meds.svg" alt="" />
                <span class="service_card_text">HEALTH</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_spirtual.svg" alt="" />
                <span class="service_card_text">SPIRTUAL</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_cloth.svg" alt="" />
                <span class="service_card_text">CLOTHES</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_recovery.svg" alt="" />
                <span class="service_card_text">RECOVERY</span>
            </div>
            <div class="service-card">
                <img src="/Images/service_web.svg" alt="" />
                <span class="service_card_text">ALL</span>
            </div>
        </div>
    </Wrapper>
  )
}


export default ServicesList