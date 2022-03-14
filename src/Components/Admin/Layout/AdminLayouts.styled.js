import styled from "styled-components";


export const Wrapper = styled.div`

  .sidebar_link {
    color: #fffff;
    font-weight: 500;
  }
  .sidebar_link:hover {
    color: #DDC114;
  }
  .input-group-text {
    background: #101B79;
    color: #ffff;
  }

  .login_field {
    font-size: 16px;
  }
  .reservation-table {
    text-align: center; 
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 12px;
    .table-head {
        background: #101B79;
        color: white;
        letter-spacing: 0.5px;
    }
    .reserve-action-btns {
        display: flex;
        justify-content: space-between;

        button {
            border: none;
            background: transparent;
            text-decoration: underline;
            font-weight: bold;
        }
    }
  }

  .dash_cards {
    display: flex;
    justify-content: center;
    text-align: center;

    .dash-card {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 230px;
      width: 230px;
      border-radius: 50%;
      background: #AB92E0;
      padding: 10px;
      
      .dash-title {
        text-align: center;
        margin-top: 55%;
        font-size: 18px;
        font-weight: bold;
        font-family: popbold;
        
      }
      .dash-count {
        padding: 0px;
        margin: 0px;
        vertical-align: middle;
        line-height: 3.5;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        font-weight: bold;
        font-size: 40px;
        font-family: popbold;
        color: #ffff;
        
      }
    }
  }


 .body {
    background: #f5f5f5;
    margin: 0;
    font-size: 14px;
  }
  
  html {
    overflow-x: hidden;
    position: relative;
    min-height: 100%;
    background: #f5f5f5;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0;
  }
  
  h1 {
    line-height: 43px;
  }
  
  h2 {
    line-height: 35px;
  }
  
  h3 {
    line-height: 30px;
  }
  
  h3 small {
    color: #444444;
  }
  
  h4 {
    line-height: 22px;
  }
  
  h4 small {
    color: #444444;
  }
  
  h5 small {
    color: #444444;
  }
  
  * {
    outline: none !important;
  }
  
  a:hover {
    outline: 0;
    text-decoration: none;
  }
  
  a:active {
    outline: 0;
    text-decoration: none;
  }
  
  a:focus {
    outline: 0;
    text-decoration: none;
  }
  
  code {
    color: #4bbbce;
  }
  
  .container-alt {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
  
  .footer {
    background-color: #f9f9f9;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    bottom: 0;
    color: #0a1832;
    text-align: center;
    padding: 20px 30px;
    position: absolute;
    right: 0;
    left: 240px;
  }
  
  #wrapper {
    height: 100%;
    overflow: hidden;
    width: 100%;
  }
  
  .page {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  
  /* Social */
  .social-links li a {
    -webkit-border-radius: 50%;
    background: #eff3f6;
    border-radius: 50%;
    color: #9f9f9f;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px;
  }
  
  /* ==============
    Loader
  ===================*/
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f5f5f5;
    z-index: 9999999;
  }
  
  #status {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -20px 0 0 -20px;
  }
  
  .spinner {
    position: absolute;
    width: 78px;
    height: 78px;
    left: 50%;
    margin-left: -39px;
    margin-top: -39px;
  }
  
  .spinner:before {
    content: '';
    position: absolute;
    width: 45px;
    height: 45px;
    top: 50%;
    margin-top: -23px;
    left: 50%;
    margin-left: -23px;
    border-width: 2px 1px;
    border-style: solid;
    border-color: #4bbbce rgba(75, 187, 206, 0.3);
    border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    animation: spin 3.45s infinite;
    -o-animation: spin 3.45s infinite;
    -ms-animation: spin 3.45s infinite;
    -webkit-animation: spin 3.45s infinite;
    -moz-animation: spin 3.45s infinite;
  }
  
  .spinner:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 50%;
    margin-top: -6px;
    left: 50%;
    margin-left: -6px;
    background-color: #4bbbce;
    border-radius: 50%;
    -o-border-radius: 50%;
    -ms-border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    animation: pulse 6.9s infinite, borderPulse 6.9s infinite;
    -o-animation: pulse 6.9s infinite, borderPulse 6.9s infinite;
    -ms-animation: pulse 6.9s infinite, borderPulse 6.9s infinite;
    -webkit-animation: pulse 6.9s infinite, borderPulse 6.9s infinite;
    -moz-animation: pulse 6.9s infinite, borderPulse 6.9s infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(1080deg);
    }
  }
  
  @-o-keyframes spin {
    0% {
      -o-transform: rotate(0deg);
    }
    50% {
      -o-transform: rotate(360deg);
    }
    100% {
      -o-transform: rotate(1080deg);
    }
  }
  
  @-ms-keyframes spin {
    0% {
      -ms-transform: rotate(0deg);
    }
    50% {
      -ms-transform: rotate(360deg);
    }
    100% {
      -ms-transform: rotate(1080deg);
    }
  }
  
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(1080deg);
    }
  }
  
  @-moz-keyframes spin {
    0% {
      -moz-transform: rotate(0deg);
    }
    50% {
      -moz-transform: rotate(360deg);
    }
    100% {
      -moz-transform: rotate(1080deg);
    }
  }
  
  @keyframes pulse {
    0% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    13% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    15% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    28% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    30% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    43% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    45% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    70% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    74% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    100% {
      background-color: rgba(75, 187, 206, 0.9);
    }
  }
  
  @-o-keyframes pulse {
    0% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    13% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    15% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    28% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    30% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    43% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    45% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    70% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    74% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    100% {
      background-color: rgba(75, 187, 206, 0.9);
    }
  }
  
  @-ms-keyframes pulse {
    0% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    13% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    15% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    28% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    30% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    43% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    45% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    70% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    74% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    100% {
      background-color: rgba(75, 187, 206, 0.9);
    }
  }
  
  @-webkit-keyframes pulse {
    0% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    13% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    15% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    28% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    30% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    43% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    45% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    70% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    74% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    100% {
      background-color: rgba(75, 187, 206, 0.9);
    }
  }
  
  @-moz-keyframes pulse {
    0% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    13% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    15% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    28% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    30% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    43% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    45% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    70% {
      background-color: rgba(75, 187, 206, 0.9);
    }
    74% {
      background-color: rgba(75, 187, 206, 0.2);
    }
    100% {
      background-color: rgba(75, 187, 206, 0.9);
    }
  }
  
  @keyframes borderPulse {
    0% {
      box-shadow: 0 0 0 0 white, 0 0 0 1px rgba(75, 187, 206, 0.8);
    }
    40% {
      box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(75, 187, 206, 0.8);
    }
    80% {
      box-shadow: 0 0 0 3px #ffffff, 0 0 1px 3px rgba(75, 187, 206, 0.8);
    }
  }
  
  @-o-keyframes borderPulse {
    0% {
      box-shadow: 0 0 0 0 white, 0 0 0 1px rgba(75, 187, 206, 0.8);
    }
    40% {
      box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(75, 187, 206, 0.8);
    }
    80% {
      box-shadow: 0 0 0 3px #ffffff, 0 0 1px 3px rgba(75, 187, 206, 0.8);
    }
  }
  
  @-ms-keyframes borderPulse {
    0% {
      box-shadow: 0 0 0 0 white, 0 0 0 1px rgba(75, 187, 206, 0.8);
    }
    40% {
      box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(75, 187, 206, 0.8);
    }
    80% {
      box-shadow: 0 0 0 3px #ffffff, 0 0 1px 3px rgba(75, 187, 206, 0.8);
    }
  }
  
  @-webkit-keyframes borderPulse {
    0% {
      box-shadow: 0 0 0 0 white, 0 0 0 1px rgba(75, 187, 206, 0.8);
    }
    40% {
      box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(75, 187, 206, 0.8);
    }
    80% {
      box-shadow: 0 0 0 3px #ffffff, 0 0 1px 3px rgba(75, 187, 206, 0.8);
    }
  }
  
  @-moz-keyframes borderPulse {
    0% {
      box-shadow: 0 0 0 0 white, 0 0 0 1px rgba(75, 187, 206, 0.8);
    }
    40% {
      box-shadow: 0 0 0 1px white, 0 0 0 2px rgba(75, 187, 206, 0.8);
    }
    80% {
      box-shadow: 0 0 0 3px #ffffff, 0 0 1px 3px rgba(75, 187, 206, 0.8);
    }
  }
  
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  
  /* ==============
    Bootstrap-custom
  ===================*/
  .breadcrumb {
    background-color: transparent;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  
  .dropdown-menu {
    padding: 4px 0;
    font-size: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-color: #eff3f6;
  }
  
  .dropdown-item.active, .dropdown-item:active {
    color: #0a1832;
    text-decoration: none;
    background-color: #eff3f6;
  }
  
  .dropdown-item {
    padding: 6px 1.5rem;
  }
  
  .dropdown-menu-lg {
    width: 270px;
  }
  
  .bg-primary {
    background-color: #2f8ee0 !important;
  }
  
  .bg-success {
    background-color: #6fd088 !important;
  }
  
  .bg-info {
    background-color: #4bbbce !important;
  }
  
  .bg-warning {
    background-color: #ffbb44 !important;
  }
  
  .bg-danger {
    background-color: #f24734 !important;
  }
  
  .bg-muted {
    background-color: #707070 !important;
  }
  
  .bg-white {
    background-color: #ffffff !important;
  }
  
  .text-white {
    color: #ffffff !important;
  }
  
  .text-danger {
    color: #f24734 !important;
  }
  
  .text-muted {
    color: #707070 !important;
  }
  
  .text-primary {
    color: #2f8ee0 !important;
  }
  
  .text-warning {
    color: #ffbb44 !important;
  }
  
  .text-success {
    color: #6fd088 !important;
  }
  
  .text-purple {
    color: #8862e0 !important;
  }
  
  .text-info {
    color: #4bbbce !important;
  }
  
  .text-dark {
    color: #0a1832 !important;
  }
  
  .badge:empty {
    padding: 0;
    display: none;
  }
  
  .badge-default {
    background-color: #eff3f6;
    color: #0a1832;
  }
  
  .badge-primary {
    background-color: #2f8ee0;
  }
  
  .badge-success {
    background-color: #6fd088;
  }
  
  .badge-info {
    background-color: #4bbbce;
  }
  
  .badge-warning {
    background-color: #ffbb44;
  }
  
  .badge-danger {
    background-color: #f24734;
  }
  
  .badge-dark {
    background-color: #0a1832;
  }
  
  .badge-pink {
    background-color: #e6487e;
    color: #ffffff;
  }
  
  .badge-purple {
    background-color: #8862e0;
    color: #ffffff;
  }
  
  /* Navs & Tabs */
  .nav-pills .nav-item.show .nav-link, .nav-pills .nav-link.active {
    background-color: #2f8ee0;
  }
  
  .nav-pills > .active > a > .badge {
    color: #2f8ee0;
  }
  
  /* List Group */
  .list-group-item.active {
    background-color: #dddddd;
    border-color: #dddddd;
    color: #444444;
    z-index: 2;
  }
  
  .list-group-item.active:hover {
    background-color: #dddddd;
    border-color: #dddddd;
    color: #444444;
    z-index: 2;
  }
  
  .list-group-item.active:hover .list-group-item-text {
    color: #2f8ee0;
  }
  
  .list-group-item.active:focus {
    background-color: #dddddd;
    border-color: #dddddd;
    color: #444444;
    z-index: 2;
  }
  
  .list-group-item.active:focus .list-group-item-text {
    color: #2f8ee0;
  }
  
  .list-group-item.active .list-group-item-text {
    color: #2f8ee0;
  }
  
  .list-group-item {
    border-radius: 0;
    padding: 12px 20px;
    border: 1px solid fade(#0a1832, 6%);
  }
  
  .list-group-item:first-child {
    border-radius: 0;
    padding: 12px 20px;
  }
  
  .list-group-item:last-child {
    border-radius: 0;
    padding: 12px 20px;
  }
  
  .list-group-item-heading {
    font-weight: 300;
  }
  
  .list-group-item.active > .badge {
    color: #2f8ee0;
  }
  
  .popover-header {
    margin-top: 0;
  }
  
  .blockquote {
    font-size: 1.05rem;
  }
  
  /* =============
     Alerts
  ============= */
  .alert {
    position: relative;
    border: 0;
  }
  
  .alert .alert-link {
    font-weight: 600;
  }
  
  .alert-success {
    color: #6fd088;
    background-color: #e2f6e7;
  }
  
  .alert-success .alert-link {
    color: #49c368;
  }
  
  .alert-success hr {
    border-top-color: #49c368;
  }
  
  .alert-info {
    color: #4bbbce;
    background-color: #d7f0f4;
  }
  
  .alert-info .alert-link {
    color: #31a2b5;
  }
  
  .alert-info hr {
    border-top-color: #31a2b5;
  }
  
  .alert-warning {
    color: #ffbb44;
    background-color: #fff6e7;
  }
  
  .alert-warning .alert-link {
    color: #ffa811;
  }
  
  .alert-warning hr {
    border-top-color: #ffa811;
  }
  
  .alert-danger {
    color: #f24734;
    background-color: #fef5f4;
  }
  
  .alert-danger .alert-link {
    color: #e4240f;
  }
  
  .alert-danger hr {
    border-top-color: #e4240f;
  }
  
  /* ==============
    Helper Classes
  ===================*/
  .p-0 {
    padding: 0;
  }
  
  .p-t-10 {
    padding-top: 10px;
  }
  
  .p-b-10 {
    padding-bottom: 10px;
  }
  
  .m-0 {
    margin: 0;
  }
  
  .m-r-5 {
    margin-right: 5px;
  }
  
  .m-r-10 {
    margin-right: 10px;
  }
  
  .m-r-15 {
    margin-right: 15px;
  }
  
  .m-l-10 {
    margin-left: 10px;
  }
  
  .m-l-15 {
    margin-left: 15px;
  }
  
  .m-t-5 {
    margin-top: 5px;
  }
  
  .m-t-10 {
    margin-top: 10px;
  }
  
  .m-t-15 {
    margin-top: 15px;
  }
  
  .m-t-20 {
    margin-top: 20px;
  }
  
  .m-t-30 {
    margin-top: 30px;
  }
  
  .m-t-40 {
    margin-top: 40px;
  }
  
  .m-b-5 {
    margin-bottom: 5px;
  }
  
  .m-b-10 {
    margin-bottom: 10px;
  }
  
  .m-b-15 {
    margin-bottom: 15px;
  }
  
  .m-b-20 {
    margin-bottom: 20px;
  }
  
  .m-b-30 {
    margin-bottom: 30px;
  }
  
  .w-xs {
    min-width: 80px;
  }
  
  .w-sm {
    min-width: 95px;
  }
  
  .w-md {
    min-width: 110px;
  }
  
  .w-lg {
    min-width: 140px;
  }
  
  .m-h-50 {
    min-height: 50px;
  }
  
  .l-h-34 {
    line-height: 34px;
  }
  
  .font-14 {
    font-size: 14px;
  }
  
  .font-16 {
    font-size: 16px;
  }
  
  .font-18 {
    font-size: 18px;
  }
  
  .font-20 {
    font-size: 20px;
  }
  
  .font-32 {
    font-size: 32px;
  }
  
  .font-40 {
    font-size: 40px;
  }
  
  .no-border {
    border: none;
  }
  
  .bx-shadow {
    -moz-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }
  
  .thumb-sm {
    height: 32px;
    width: 32px;
  }
  
  .thumb-md {
    height: 48px;
    width: 48px;
  }
  
  .thumb-lg {
    height: 88px;
    width: 88px;
  }
  
  .grid-structure .grid-container {
    background-color: #f5f5f5;
    margin-bottom: 10px;
    padding: 10px 20px;
  }
  
  .font-500 {
    font-weight: 500;
  }
  
  .header-title {
    font-size: 16px;
  }
  
  /* ==============
    Waves Effect
  ===================*/
  /*!
   * Waves v0.6.0
   * http://fian.my.id/Waves
   *
   * Copyright 2014 Alfiana E. Sibuea and other contributors
   * Released under the MIT license
   * https://github.com/fians/Waves/blob/master/LICENSE
   */
  .waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    will-change: opacity, transform;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  
  .waves-effect .waves-ripple {
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    opacity: 0;
    background: rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.7s ease-out;
    -moz-transition: all 0.7s ease-out;
    -o-transition: all 0.7s ease-out;
    -ms-transition: all 0.7s ease-out;
    transition: all 0.7s ease-out;
    -webkit-transition-property: -webkit-transform, opacity;
    -moz-transition-property: -moz-transform, opacity;
    -o-transition-property: -o-transform, opacity;
    transition-property: transform, opacity;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    pointer-events: none;
  }
  
  .waves-effect.waves-light .waves-ripple {
    background-color: rgba(255, 255, 255, 0.25);
  }
  
  .waves-effect.waves-red .waves-ripple {
    background-color: rgba(244, 67, 54, 0.7);
  }
  
  .waves-effect.waves-yellow .waves-ripple {
    background-color: rgba(255, 235, 59, 0.7);
  }
  
  .waves-effect.waves-orange .waves-ripple {
    background-color: rgba(255, 152, 0, 0.7);
  }
  
  .waves-effect.waves-purple .waves-ripple {
    background-color: rgba(156, 39, 176, 0.7);
  }
  
  .waves-effect.waves-green .waves-ripple {
    background-color: rgba(76, 175, 80, 0.7);
  }
  
  .waves-effect.waves-teal .waves-ripple {
    background-color: rgba(0, 150, 136, 0.7);
  }
  
  .waves-notransition {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    -ms-transition: none;
    transition: none;
  }
  
  .waves-circle {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    text-align: center;
    width: 2.5em;
    height: 2.5em;
    line-height: 2.5em;
    border-radius: 50%;
    -webkit-mask-image: none;
  }
  
  .waves-input-wrapper {
    border-radius: 0.2em;
    vertical-align: bottom;
  }
  
  .waves-input-wrapper .waves-button-input {
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .waves-block {
    display: block;
  }
  
  /* ==============
    Print css
  ===================*/
  @media print {
    .logo, .page-title, .breadcrumb, .footer, #topnav, .page-title-box {
      display: none;
      margin: 0;
      padding: 10;
    }
    .left {
      display: none;
    }
    .content, .page-content-wrapper, .wrapper {
      margin-top: 0;
      padding-top: 0;
    }
    .content-page {
      margin-left: 0;
      margin-top: 0;
    }
    .topbar, .footer, .side-menu {
      display: none;
      margin: 0;
      padding: 0;
    }
    .content-page > .content {
      margin: 0;
    }
  }
  
  /* ==============
   Demo Only css
  ===================*/
  .button-items {
    margin-bottom: -8px;
  }
  
  .button-items .btn {
    margin-bottom: 8px;
    margin-right: 5px;
  }
  
  .bs-example-modal {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
  }
  
  .icon-demo-content {
    text-align: center;
    color: #707070;
  }
  
  .icon-demo-content i {
    display: block;
    font-size: 28px;
    margin-bottom: 5px;
  }
  
  .icon-demo-content .col-sm-6 {
    margin-bottom: 30px;
  }
  
  .icon-demo-content .col-sm-6:hover i {
    color: #2f8ee0;
  }
  
  /* ==============
    Buttons
  ===================*/
  .btn {
    border-radius: 3px;
  }
  
  .btn-primary, .btn-success, .btn-info, .btn-warning,
  .btn-danger, .btn-dark, .btn-pink, .btn-purple, .btn-indigo, .btn-teal,
  .btn-lime, .btn-orange, .btn-brown, .btn-blue-grey {
    color: #ffffff;
  }
  
  .btn-primary {
    background-color: #2f8ee0;
    border: 1px solid #2f8ee0;
  }
  
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active,
  .btn-primary.focus, .btn-primary:active, .btn-primary:focus, .btn-primary:hover,
  .open > .dropdown-toggle.btn-primary, .btn-outline-primary.active, .btn-outline-primary:active,
  .show > .btn-outline-primary.dropdown-toggle, .btn-outline-primary:hover, .btn-primary.active,
  .btn-primary:active, .show > .btn-primary.dropdown-toggle,
  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show > .btn-primary.dropdown-toggle {
    background-color: #2081d6;
    border: 1px solid #2081d6;
  }
  
  .btn-primary.focus, .btn-primary:focus, .btn-outline-primary.focus, .btn-outline-primary:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show > .btn-primary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(47, 142, 224, 0.3);
    box-shadow: 0 0 0 2px rgba(47, 142, 224, 0.3);
  }
  
  .btn-secondary.focus, .btn-secondary:focus, .btn-outline-secondary.focus, .btn-outline-secondary:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus, .btn-secondary:not(:disabled):not(.disabled):active:focus, .show > .btn-secondary.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(10, 24, 50, 0.3);
    box-shadow: 0 0 0 2px rgba(10, 24, 50, 0.3);
  }
  
  .btn-success {
    background-color: #6fd088;
    border: 1px solid #6fd088;
  }
  
  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active,
  .btn-success.focus, .btn-success:active, .btn-success:focus, .btn-success:hover,
  .open > .dropdown-toggle.btn-success, .btn-outline-success.active, .btn-outline-success:active,
  .show > .btn-outline-success.dropdown-toggle, .btn-outline-success:hover, .btn-success.active,
  .btn-success:active, .show > .btn-success.dropdown-toggle,
  .btn-success:not(:disabled):not(.disabled).active:focus, .btn-success:not(:disabled):not(.disabled):active:focus, .show > .btn-success.dropdown-toggle:focus {
    background-color: #5cca78;
    border: 1px solid #5cca78;
  }
  
  .btn-success.focus, .btn-success:focus, .btn-outline-success.focus, .btn-outline-success:focus,
  .btn-success:not(:disabled):not(.disabled).active:focus, .btn-success:not(:disabled):not(.disabled):active:focus, .show > .btn-success.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(111, 208, 136, 0.3);
    box-shadow: 0 0 0 2px rgba(111, 208, 136, 0.3);
  }
  
  .btn-info {
    background-color: #4bbbce;
    border: 1px solid #4bbbce;
  }
  
  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .btn-info.focus,
  .btn-info:active, .btn-info:focus, .btn-info:hover, .open > .dropdown-toggle.btn-info,
  .btn-outline-info.active, .btn-outline-info:active,
  .show > .btn-outline-info.dropdown-toggle, .btn-outline-info:hover, .btn-info.active, .btn-info:active,
  .show > .btn-info.dropdown-toggle, .btn-info:not(:disabled):not(.disabled).active, .btn-info:not(:disabled):not(.disabled):active, .show > .btn-info.dropdown-toggle {
    background-color: #37b3c9;
    border: 1px solid #37b3c9;
  }
  
  .btn-info.focus, .btn-info:focus, .btn-outline-info.focus, .btn-outline-info:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus, .btn-info:not(:disabled):not(.disabled):active:focus, .show > .btn-info.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(75, 187, 206, 0.3);
    box-shadow: 0 0 0 2px rgba(75, 187, 206, 0.3);
  }
  
  .btn-warning {
    background-color: #ffbb44;
    border: 1px solid #ffbb44;
  }
  
  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active,
  .btn-warning.focus, .btn-warning:active, .btn-warning:focus, .btn-warning:hover,
  .open > .dropdown-toggle.btn-warning, .btn-outline-warning.active, .btn-outline-warning:active,
  .show > .btn-outline-warning.dropdown-toggle, .btn-outline-warning:hover, .btn-warning.active,
  .btn-warning:active, .show > .btn-warning.dropdown-toggle,
  .btn-warning:not(:disabled):not(.disabled).active, .btn-warning:not(:disabled):not(.disabled):active, .show > .btn-warning.dropdown-toggle {
    background-color: #ffb22b;
    border: 1px solid #ffb22b;
    color: #ffffff;
  }
  
  .btn-warning.focus, .btn-warning:focus, .btn-outline-warning.focus, .btn-outline-warning:focus,
  .btn-warning:not(:disabled):not(.disabled).active:focus, .btn-warning:not(:disabled):not(.disabled):active:focus, .show > .btn-warning.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(255, 187, 68, 0.3);
    box-shadow: 0 0 0 2px rgba(255, 187, 68, 0.3);
  }
  
  .btn-danger {
    background-color: #f24734;
    border: 1px solid #f24734;
  }
  
  .btn-danger:active, .btn-danger:focus, .btn-danger:hover, .btn-danger.active,
  .btn-danger.focus, .btn-danger:active, .btn-danger:focus, .btn-danger:hover,
  .open > .dropdown-toggle.btn-danger, .btn-outline-danger.active, .btn-outline-danger:active,
  .show > .btn-outline-danger.dropdown-toggle, .btn-outline-danger:hover, .btn-danger.active,
  .btn-danger:active, .show > .btn-danger.dropdown-toggle,
  .btn-danger:not(:disabled):not(.disabled).active, .btn-danger:not(:disabled):not(.disabled):active, .show > .btn-danger.dropdown-toggle {
    background-color: #f0311c;
    border: 1px solid #f0311c;
  }
  
  .btn-danger.focus, .btn-danger:focus, .btn-outline-danger.focus, .btn-outline-danger:focus,
  .btn-danger:not(:disabled):not(.disabled).active:focus, .btn-danger:not(:disabled):not(.disabled):active:focus, .show > .btn-danger.dropdown-toggle:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(242, 71, 52, 0.3);
    box-shadow: 0 0 0 2px rgba(242, 71, 52, 0.3);
  }
  
  .btn-dark {
    background-color: #0a1832;
    border: 1px solid #0a1832;
    color: #ffffff;
  }
  
  .btn-dark:hover, .btn-dark:focus, .btn-dark:active, .btn-dark.active, .btn-dark.focus,
  .btn-dark:active, .btn-dark:focus, .btn-dark:hover, .open > .dropdown-toggle.btn-dark,
  .btn-outline-dark.active, .btn-outline-dark:active,
  .show > .btn-outline-dark.dropdown-toggle, .btn-outline-dark:hover {
    background-color: #060e1d;
    border: 1px solid #060e1d;
    color: #ffffff;
  }
  
  .btn-dark.focus, .btn-dark:focus, .btn-outline-dark.focus, .btn-outline-dark:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(10, 24, 50, 0.3);
    box-shadow: 0 0 0 2px rgba(10, 24, 50, 0.3);
  }
  
  .btn-link {
    color: #0a1832;
  }
  
  .btn-link:hover {
    color: #2f8ee0;
  }
  
  .btn-pink {
    background-color: #e6487e;
    border: 1px solid #e6487e;
    color: #ffffff;
  }
  
  .btn-pink:hover, .btn-pink:focus, .btn-pink:active, .btn-pink.active, .btn-pink.focus,
  .btn-pink:active, .btn-pink:focus, .btn-pink:hover, .open > .dropdown-toggle.btn-pink,
  .btn-outline-pink.active, .btn-outline-pink:active,
  .show > .btn-outline-pink.dropdown-toggle, .btn-outline-pink:hover {
    background-color: #e3326e;
    border: 1px solid #e3326e;
    color: #ffffff;
  }
  
  .btn-pink.focus, .btn-pink:focus, .btn-outline-pink.focus, .btn-outline-pink:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(230, 72, 126, 0.3);
    box-shadow: 0 0 0 2px rgba(230, 72, 126, 0.3);
  }
  
  .btn-purple {
    background-color: #8862e0;
    border: 1px solid #8862e0;
    color: #ffffff;
  }
  
  .btn-purple:hover, .btn-purple:focus, .btn-purple:active, .btn-purple.active, .btn-purple.focus,
  .btn-purple:active, .btn-purple:focus, .btn-purple:hover, .open > .dropdown-toggle.btn-purple,
  .btn-outline-purple.active, .btn-outline-purple:active,
  .show > .btn-outline-purple.dropdown-toggle, .btn-outline-purple:hover {
    background-color: #784ddc;
    border: 1px solid #784ddc;
    color: #ffffff;
  }
  
  .btn-purple.focus, .btn-purple:focus, .btn-outline-purple.focus, .btn-outline-purple:focus {
    -webkit-box-shadow: 0 0 0 2px rgba(136, 98, 224, 0.3);
    box-shadow: 0 0 0 2px rgba(136, 98, 224, 0.3);
  }
  
  /* button Outline */
  .btn-outline-primary {
    color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .btn-outline-success {
    color: #6fd088;
    border-color: #6fd088;
  }
  
  .btn-outline-info {
    color: #4bbbce;
    border-color: #4bbbce;
  }
  
  .btn-outline-warning {
    color: #ffbb44;
    border-color: #ffbb44;
  }
  
  .btn-outline-danger {
    color: #f24734;
    border-color: #f24734;
  }
  
  .btn-outline-dark {
    color: #0a1832;
    background-image: none;
    background-color: transparent;
    border-color: #0a1832;
  }
  
  .btn-outline-pink {
    color: #e6487e;
    background-image: none;
    background-color: transparent;
    border-color: #e6487e;
  }
  
  .btn-outline-purple {
    color: #8862e0;
    background-image: none;
    background-color: transparent;
    border-color: #8862e0;
  }
  
  /* ==============
    Card
  ===================*/
  .card {
    border: none;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  }
  
  .card-primary {
    background-color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .card-success {
    background-color: #6fd088;
    border-color: #6fd088;
  }
  
  .card-info {
    background-color: #4bbbce;
    border-color: #4bbbce;
  }
  
  .card-warning {
    background-color: #ffbb44;
    border-color: #ffbb44;
  }
  
  .card-danger {
    background-color: #f24734;
    border-color: #f24734;
  }
  
  .card-header {
    border-bottom: 1px solid rgba(10, 24, 50, 0.05);
  }
  
  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-gap: 30px;
      -moz-column-gap: 30px;
      column-gap: 30px;
    }
  }
  
  .card-columns .card {
    margin-bottom: 30px;
  }
  
  /* =============
     Tabs & Accordions
  ============= */
  .nav-tabs .nav-link, .nav-pills .nav-link {
    color: #0a1832;
    font-weight: 600;
  }
  
  .nav-tabs-custom {
    border-bottom: 2px solid #DDD;
  }
  
  .nav-tabs-custom .nav-item {
    position: relative;
  }
  
  .nav-tabs-custom .nav-item .nav-link {
    border: none !important;
    font-weight: 600;
  }
  
  .nav-tabs-custom > li > a {
    color: #0a1832;
  }
  
  .nav-tabs-custom > li > a::after {
    content: "";
    background: #2f8ee0;
    height: 2px;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -1px;
    transition: all 250ms ease 0s;
    transform: scale(0);
  }
  
  .nav-tabs-custom > li > a.active::after, .nav-tabs-custom > li:hover > a::after {
    transform: scale(1);
  }
  
  .nav-tabs-custom > li > a.active {
    color: #2f8ee0 !important;
  }
  
  /* ==============
    Pagination
  ===================*/
  .page-link {
    color: #2f8ee0;
  }
  
  .page-item.active .page-link {
    background-color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .page-link:focus, .page-link:hover {
    color: #0a1832;
    background-color: #eff3f6;
  }
  
  /* ==============
    Progressbar
  ===================*/
  .progress-bar {
    background-color: #2f8ee0;
  }
  
  /* ==============
    Popover & Tooltips
  ===================*/
  .popover-title {
    margin-top: 0;
  }
  
  .tooltip .tooltip-inner {
    padding: 4px 10px;
  }
  
  /* =========== */
  /* Sweet Alert */
  /* =========== */
  .swal2-modal {
    font-family: inherit;
  }
  
  .swal2-modal .swal2-title {
    font-size: 28px;
  }
  
  .swal2-modal .swal2-content {
    font-size: 16px;
  }
  
  .swal2-modal .swal2-spacer {
    margin: 10px 0;
  }
  
  .swal2-modal .swal2-file, .swal2-modal .swal2-input, .swal2-modal .swal2-textarea {
    border: 2px solid #707070;
    font-size: 16px;
    box-shadow: none !important;
  }
  
  .swal2-modal .swal2-styled {
    border: inherit;
  }
  
  .swal2-icon.swal2-question {
    color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .swal2-icon.swal2-success {
    border-color: #6fd088;
  }
  
  .swal2-icon.swal2-success .line {
    background-color: #6fd088;
  }
  
  .swal2-icon.swal2-success .placeholder {
    border-color: #6fd088;
  }
  
  .swal2-icon.swal2-warning {
    color: #ffbb44;
    border-color: #ffbb44;
  }
  
  .swal2-icon.swal2-error {
    border-color: #f24734;
  }
  
  .swal2-icon.swal2-error .line {
    background-color: #f24734;
  }
  
  .swal2-modal .swal2-file:focus, .swal2-modal .swal2-input:focus, .swal2-modal .swal2-textarea:focus {
    outline: 0;
    border: 2px solid #2f8ee0;
  }
  
  /* ==============
    Email
  ===================*/
  .email-leftbar {
    width: 200px;
    float: left;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
  }
  
  .email-rightbar {
    margin-left: 230px;
  }
  
  .chat-user-box p.user-title {
    font-size: 14px;
    color: #0a1832;
    font-weight: 600;
  }
  
  .chat-user-box p {
    font-size: 12px;
  }
  
  @media (max-width: 767px) {
    .email-leftbar {
      float: none;
      width: 100%;
    }
    .email-rightbar {
      margin: 0;
    }
  }
  
  .mail-list a {
    display: block;
    color: #0e2247;
    font-size: 14px;
    line-height: 24px;
    padding: 5px;
  }
  
  .mail-list a.active {
    color: #f24734;
    font-weight: 500;
  }
  
  .message-list {
    display: block;
    padding-left: 0;
  }
  
  .message-list li {
    position: relative;
    display: block;
    height: 50px;
    line-height: 50px;
    cursor: default;
    transition-duration: .3s;
  }
  
  .message-list li a {
    color: #707070;
  }
  
  .message-list li:hover {
    background: rgba(112, 112, 112, 0.08);
    transition-duration: .05s;
  }
  
  .message-list li .col-mail {
    float: left;
    position: relative;
  }
  
  .message-list li .col-mail-1 {
    width: 320px;
  }
  
  .message-list li .col-mail-1 .star-toggle,
  .message-list li .col-mail-1 .checkbox-wrapper-mail,
  .message-list li .col-mail-1 .dot {
    display: block;
    float: left;
  }
  
  .message-list li .col-mail-1 .dot {
    border: 4px solid transparent;
    border-radius: 100px;
    margin: 22px 26px 0;
    height: 0;
    width: 0;
    line-height: 0;
    font-size: 0;
  }
  
  .message-list li .col-mail-1 .checkbox-wrapper-mail {
    margin: 15px 10px 0 20px;
  }
  
  .message-list li .col-mail-1 .star-toggle {
    margin-top: 18px;
    font-size: 16px;
    margin-left: 5px;
  }
  
  .message-list li .col-mail-1 .title {
    position: absolute;
    top: 0;
    left: 110px;
    right: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 0;
  }
  
  .message-list li .col-mail-2 {
    position: absolute;
    top: 0;
    left: 320px;
    right: 0;
    bottom: 0;
  }
  
  .message-list li .col-mail-2 .subject,
  .message-list li .col-mail-2 .date {
    position: absolute;
    top: 0;
  }
  
  .message-list li .col-mail-2 .subject {
    left: 0;
    right: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  
  .message-list li .col-mail-2 .date {
    right: 0;
    width: 170px;
    padding-left: 80px;
  }
  
  .message-list li.active,
  .message-list li.active:hover {
    box-shadow: inset 3px 0 0 #2f8ee0;
  }
  
  .message-list li.unread {
    background-color: #f7f7f7;
  }
  
  .message-list li.unread a {
    color: #060e1d;
    font-weight: 500;
  }
  
  .message-list .checkbox-wrapper-mail {
    cursor: pointer;
    height: 20px;
    width: 20px;
    position: relative;
    display: inline-block;
    box-shadow: inset 0 0 0 1px #dddddd;
    border-radius: 1px;
  }
  
  .message-list .checkbox-wrapper-mail input {
    opacity: 0;
    cursor: pointer;
  }
  
  .message-list .checkbox-wrapper-mail input:checked ~ label {
    opacity: 1;
  }
  
  .message-list .checkbox-wrapper-mail label {
    position: absolute;
    height: 20px;
    width: 20px;
    left: 0;
    cursor: pointer;
    opacity: 0;
    margin-bottom: 0;
    transition-duration: .05s;
    top: 0;
  }
  
  .message-list .checkbox-wrapper-mail label:before {
    content: "\F12C";
    font-family: "Material Design Icons";
    top: 0;
    height: 20px;
    color: #060e1d;
    width: 20px;
    position: absolute;
    margin-top: -16px;
    left: 4px;
    font-size: 13px;
  }
  
  /* =============
     Nestable
  ============= */
  .custom-dd .dd-list .dd-item .dd-handle {
    background: #eff3f6;
    border: 1px solid #eff3f6;
    padding: 10px 16px;
    height: auto;
    font-size: 15px;
    font-weight: normal;
    border-radius: 3px;
  }
  
  .custom-dd .dd-list .dd-item .dd-handle:hover {
    color: #2f8ee0;
  }
  
  .custom-dd .dd-list .dd-item button {
    height: auto;
    font-size: 25px;
    margin: 8px auto;
    color: #707070;
    width: 35px;
  }
  
  .custom-dd-empty .dd-list .dd3-handle {
    border: none;
    background: #f3f3f3;
    height: 36px !important;
    width: 36px !important;
  }
  
  .custom-dd-empty .dd-list .dd3-handle:before {
    color: inherit;
    top: 7px;
  }
  
  .custom-dd-empty .dd-list .dd3-handle:hover {
    color: #2f8ee0;
  }
  
  .custom-dd-empty .dd-list .dd3-content {
    height: auto;
    border: none;
    padding: 8px 16px 8px 46px;
    background: #f3f3f3;
  }
  
  .custom-dd-empty .dd-list .dd3-content:hover {
    color: #2f8ee0;
  }
  
  .custom-dd-empty .dd-list button {
    width: 26px;
    height: 26px;
    font-size: 16px;
    font-weight: 600;
  }
  
  .dd-dragel > .dd-item .dd-handle {
    padding: 8px 16px !important;
    background: #f3f3f3;
    height: auto;
  }
  
  .dd-placeholder, .dd-empty {
    background: #f3f3f3;
    border: 1px dashed #707070;
  }
  
  .dd-dragel > .dd3-item > .dd3-handle {
    border: none;
    background: #f3f3f3;
    height: 36px !important;
    width: 36px !important;
  }
  
  .dd-dragel > .dd3-item > .dd3-handle:before {
    color: inherit;
    top: 7px;
  }
  
  .dd-dragel > .dd3-item > .dd3-content {
    padding: 8px 16px 8px 46px;
    background: #f3f3f3;
    height: auto;
  }
  
  /* ==============
    Alertify
  ===================*/
  .alertify, .alertify-logs {
    z-index: 999;
  }
  
  .alertify input {
    border: 2px solid #707070;
  }
  
  .alertify-logs > .success {
    background-color: #6fd088;
    color: #ffffff;
  }
  
  .alertify-logs > .error {
    background-color: #f24734;
    color: #ffffff;
  }
  
  .alertify-logs > *, .alertify-logs > .default {
    background-color: #0a1832;
  }
  
  /* ==============
    Charts
  ===================*/
  .jqstooltip {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  
  .chart {
    position: relative;
    display: inline-block;
    width: 110px;
    height: 110px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .chart canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .chart.chart-widget-pie {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  .percent {
    display: inline-block;
    line-height: 110px;
    z-index: 2;
  }
  
  .percent:after {
    content: '%';
    margin-left: 0.1em;
    font-size: .8em;
  }
  
  /* Morris chart */
  .morris-chart-height {
    height: 300px;
  }
  
  .morris-hover.morris-default-style {
    border-radius: 5px;
    padding: 10px 12px;
    background: #ffffff;
    border: none;
    box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.14);
  }
  
  .morris-hover.morris-default-style .morris-hover-point {
    font-weight: 500;
    font-size: 14px;
    color: #0a1832 !important;
  }
  
  .morris-hover.morris-default-style .morris-hover-row-label {
    background-color: #0a1832;
    color: #ffffff;
    padding: 4px;
    border-radius: 5px 5px 0 0;
    margin: -10px -12px 10px;
  }
  
  /* Flot chart */
  .flot-chart-height {
    height: 320px;
  }
  
  #flotTip {
    padding: 8px 12px;
    background-color: #ffffff;
    z-index: 100;
    color: #0a1832;
    box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.14);
    border-radius: 1px;
  }
  
  /* Chartist chart */
  .ct-golden-section:before {
    float: none;
  }
  
  .ct-chart {
    height: 300px;
  }
  
  .ct-grid {
    stroke: rgba(0, 0, 0, 0.09);
    stroke-width: 2px;
    stroke-dasharray: 3px;
  }
  
  .ct-chart .ct-label {
    fill: #707070;
    color: #707070;
    font-size: 14px;
    line-height: 1;
  }
  
  .ct-chart.simple-pie-chart-chartist .ct-label {
    color: #ffffff;
    fill: #ffffff;
    font-size: 16px;
  }
  
  .ct-chart .ct-series.ct-series-a .ct-bar,
  .ct-chart .ct-series.ct-series-a .ct-line,
  .ct-chart .ct-series.ct-series-a .ct-point,
  .ct-chart .ct-series.ct-series-a .ct-slice-donut {
    stroke: #2f8ee0;
  }
  
  .ct-chart .ct-series.ct-series-b .ct-bar,
  .ct-chart .ct-series.ct-series-b .ct-line,
  .ct-chart .ct-series.ct-series-b .ct-point,
  .ct-chart .ct-series.ct-series-b .ct-slice-donut {
    stroke: #4bbbce;
  }
  
  .ct-chart .ct-series.ct-series-c .ct-bar,
  .ct-chart .ct-series.ct-series-c .ct-line,
  .ct-chart .ct-series.ct-series-c .ct-point,
  .ct-chart .ct-series.ct-series-c .ct-slice-donut {
    stroke: #ffbb44;
  }
  
  .ct-chart .ct-series.ct-series-d .ct-bar,
  .ct-chart .ct-series.ct-series-d .ct-line,
  .ct-chart .ct-series.ct-series-d .ct-point,
  .ct-chart .ct-series.ct-series-d .ct-slice-donut {
    stroke: #0a1832;
  }
  
  .ct-chart .ct-series.ct-series-e .ct-bar,
  .ct-chart .ct-series.ct-series-e .ct-line,
  .ct-chart .ct-series.ct-series-e .ct-point,
  .ct-chart .ct-series.ct-series-e .ct-slice-donut {
    stroke: #6fd088;
  }
  
  .ct-chart .ct-series.ct-series-f .ct-bar,
  .ct-chart .ct-series.ct-series-f .ct-line,
  .ct-chart .ct-series.ct-series-f .ct-point,
  .ct-chart .ct-series.ct-series-f .ct-slice-donut {
    stroke: #f24734;
  }
  
  .ct-chart .ct-series.ct-series-g .ct-bar,
  .ct-chart .ct-series.ct-series-g .ct-line,
  .ct-chart .ct-series.ct-series-g .ct-point,
  .ct-chart .ct-series.ct-series-g .ct-slice-donut {
    stroke: #eff3f6;
  }
  
  .ct-series-a .ct-area,
  .ct-series-a .ct-slice-pie {
    fill: #2f8ee0;
  }
  
  .ct-series-b .ct-area,
  .ct-series-b .ct-slice-pie {
    fill: #ffbb44;
  }
  
  .ct-series-c .ct-area,
  .ct-series-c .ct-slice-pie {
    fill: #0a1832;
  }
  
  .chartist-tooltip {
    position: absolute;
    display: inline-block;
    opacity: 0;
    min-width: 10px;
    padding: 2px 10px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    background-clip: padding-box;
    background: #0a1832;
    color: #ffffff;
    text-align: center;
    pointer-events: none;
    z-index: 1;
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    -o-transition: opacity .2s linear;
    transition: opacity .2s linear;
  }
  
  .chartist-tooltip.tooltip-show {
    opacity: 1;
  }
  
  /* C3 chart */
  .c3 svg {
    max-width: 100%;
  }
  
  .c3-tooltip td > span {
    background: #0a1832;
  }
  
  .c3-tooltip td {
    border-left: none;
  }
  
  .c3-tooltip {
    box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.12);
    opacity: 1;
  }
  
  .c3-chart-arcs-title {
    font-size: 18px;
    font-weight: 600;
  }
  
  .c3-tooltip tr {
    border: none !important;
  }
  
  .c3-tooltip th {
    background-color: #0a1832;
  }
  
  .c3-tooltip .value {
    font-weight: 600;
  }
  
  .c3-line {
    stroke-width: 2px;
  }
  
  .c3-legend-item {
    font-size: 13px;
  }
  
  /* ==============
    Tables
  ===================*/
  .table {
    margin-bottom: 10px;
  }
  
  th {
    font-weight: 500;
  }
  
  .table > tbody > tr > td, .table > tfoot > tr > td, .table > thead > tr > td {
    padding: 15px 12px;
  }
  
  .table-hover tbody tr:hover, .table-striped tbody tr:nth-of-type(odd),
  .thead-default th {
    background-color: #eff3f6;
  }
  
  .table-vertical td {
    vertical-align: middle;
  }
  
  /* == Responsive Table ==*/
  table.focus-on tbody tr.focused th {
    background-color: #2f8ee0;
    color: #ffffff;
  }
  
  table.focus-on tbody tr.focused td {
    background-color: #2f8ee0;
    color: #ffffff;
  }
  
  .table-rep-plugin .btn-toolbar {
    display: block;
  }
  
  .table-rep-plugin .btn-default {
    background-color: white;
    border-color: #dddddd;
    margin-right: 5px;
  }
  
  .table-rep-plugin .btn-default.btn-primary {
    background-color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .table-rep-plugin .table-responsive {
    border: none !important;
  }
  
  .table-rep-plugin .btn-group.pull-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  
  .table-rep-plugin tbody th {
    font-size: 14px;
    font-weight: normal;
  }
  
  .table-rep-plugin .checkbox-row {
    padding-left: 40px;
  }
  
  .table-rep-plugin .checkbox-row label {
    display: inline-block;
    padding-left: 5px;
    position: relative;
  }
  
  .table-rep-plugin .checkbox-row label::before {
    -o-transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid #cccccc;
    content: "";
    display: inline-block;
    height: 17px;
    left: 0;
    margin-left: -20px;
    position: absolute;
    transition: 0.3s ease-in-out;
    width: 17px;
    outline: none !important;
  }
  
  .table-rep-plugin .checkbox-row label::after {
    color: #555555;
    display: inline-block;
    font-size: 11px;
    height: 16px;
    left: 0;
    margin-left: -20px;
    padding-left: 3px;
    padding-top: 1px;
    position: absolute;
    top: -1px;
    width: 16px;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"] {
    cursor: pointer;
    opacity: 0;
    z-index: 1;
    outline: none !important;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:disabled + label {
    opacity: 0.65;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:focus + label::before {
    outline-offset: -2px;
    outline: none;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:checked + label::after {
    content: "\f00c";
    font-family: 'FontAwesome';
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:disabled + label::before {
    background-color: #eff3f6;
    cursor: not-allowed;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:checked + label::before {
    background-color: #2f8ee0;
    border-color: #2f8ee0;
  }
  
  .table-rep-plugin .checkbox-row input[type="checkbox"]:checked + label::after {
    color: #ffffff;
  }
  
  /* ==============
    Range slider
  ===================*/
  .irs-from, .irs-to, .irs-single {
    background: #2f8ee0;
  }
  
  .irs-from:after, .irs-to:after, .irs-single:after {
    border-top-color: #2f8ee0;
  }
  
  /* ==============
    Session Timeout
  ===================*/
  #session-timeout-dialog .modal-title {
    margin-top: 0;
  }
  
  #session-timeout-dialog .close {
    display: none;
  }
  
  #session-timeout-dialog .btn-default {
    background-color: #ffffff;
    color: #f24734;
  }
  
  #session-timeout-dialog .countdown-holder {
    color: #f24734;
    font-weight: 700;
  }
  
  /* ==============
    Form-elements
  ===================*/
  label {
    font-weight: 500;
  }
  
  .form-control {
    font-size: 15px;
  }
  
  .form-control:focus {
    border-color: #2f8ee0;
    box-shadow: none;
  }
  
  .custom-control-input:checked ~ .custom-control-indicator {
    background-color: #2f8ee0;
  }
  
  .custom-control-input:focus ~ .custom-control-indicator {
    -webkit-box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #2f8ee0;
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #2f8ee0;
  }
  
  .has-success .form-control {
    border-color: #6fd088;
    box-shadow: none;
  }
  
  .has-warning .form-control {
    border-color: #ffbb44;
    box-shadow: none;
  }
  
  .has-error .form-control {
    border-color: #f24734;
    box-shadow: none;
  }
  
  .input-group-addon {
    border-radius: 2px;
    border: 1px solid #eff3f6;
  }
  
  /* ==============
    Form-Validation
  ===================*/
  .error {
    color: #ff0000;
  }
  
  .parsley-error {
    border-color: #f24734;
  }
  
  .parsley-errors-list {
    display: none;
    margin: 0;
    padding: 0;
  }
  
  .parsley-errors-list.filled {
    display: block;
  }
  
  .parsley-errors-list > li {
    font-size: 12px;
    list-style: none;
    color: #f24734;
    margin-top: 5px;
  }
  
  /* ==============
    Form-Upload
  ===================*/
  /* Dropzone */
  .dropzone {
    min-height: 230px;
    border: 2px dashed rgba(0, 0, 0, 0.3);
    background: white;
    border-radius: 6px;
  }
  
  .dropzone .dz-message {
    font-size: 30px;
  }
  
  /* ==============
    Form-Advanced
  ===================*/
  /* Datepicker */
  .datepicker {
    border: 1px solid #dddddd;
    padding: 8px;
  }
  
  .datepicker table tr td.active, .datepicker table tr td.active:hover, .datepicker table tr td.active.disabled,
  .datepicker table tr td.active.disabled:hover, .datepicker table tr td.today, .datepicker table tr td.today.disabled,
  .datepicker table tr td.today.disabled:hover, .datepicker table tr td.today:hover, .datepicker table tr td.selected,
  .datepicker table tr td.selected.disabled, .datepicker table tr td.selected.disabled:hover,
  .datepicker table tr td.selected:hover {
    background-color: #2f8ee0 !important;
    background-image: none;
    box-shadow: none;
    color: #ffffff;
  }
  
  /* Bootstrap-touchSpin */
  .bootstrap-touchspin .input-group-btn-vertical .btn {
    padding: 9px 12px;
  }
  
  .bootstrap-touchspin .input-group-btn-vertical i {
    top: 4px;
    left: 8px;
  }
  
  /* Color Picker */
  .colorpicker-visible {
    visibility: visible;
    opacity: 1;
    display: block;
    margin-top: 0;
  }
  
  .datepicker-dropdown.dropdown-menu {
    visibility: visible;
    opacity: 1;
    margin-top: 0;
  }
  
  .colorpicker-selectors i {
    margin-top: 5px;
    margin-left: 5px;
  }
  
  .colorpicker-2x .colorpicker-saturation {
    width: 200px;
    height: 200px;
  }
  
  .colorpicker-2x .colorpicker-hue,
  .colorpicker-2x .colorpicker-alpha {
    width: 30px;
    height: 200px;
  }
  
  .colorpicker-2x .colorpicker-color,
  .colorpicker-2x .colorpicker-color div {
    height: 30px;
  }
  
  /* Select 2 */
  .select2-container {
    width: 100% !important;
  }
  
  .select2-container .select2-selection--single {
    border: 1px solid #E3E3E3;
    height: 38px;
  }
  
  .select2-container .select2-selection--single .select2-selection__rendered {
    line-height: 36px;
    padding-left: 12px;
  }
  
  .select2-container .select2-selection--single .select2-selection__arrow {
    height: 34px;
    width: 34px;
    right: 3px;
  }
  
  .select2-container .select2-selection--single .select2-selection__arrow b {
    border-color: #999 transparent transparent transparent;
    border-width: 6px 6px 0 6px;
  }
  
  .select2-container--open .select2-selection--single .select2-selection__arrow b {
    border-color: transparent transparent #999 transparent;
    border-width: 0 6px 6px 6px;
  }
  
  .select2-container--default .select2-results__option--highlighted[aria-selected] {
    background-color: #2f8ee0;
  }
  
  .select2-results__option {
    padding: 6px 12px;
  }
  
  .select2-dropdown {
    border: 1px solid #e3e3e3;
    padding-top: 5px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }
  
  .select2-search input {
    border: 1px solid #e3e3e3;
  }
  
  .select2-container .select2-selection--multiple {
    min-height: 38px;
    border: 1px solid #e3e3e3;
  }
  
  .select2-container .select2-selection--multiple .select2-selection__rendered {
    padding: 2px 10px;
  }
  
  .select2-container .select2-selection--multiple .select2-search__field {
    margin-top: 7px;
    border: 0;
  }
  
  .select2-container .select2-selection--multiple .select2-selection__choice {
    background-color: #f5f5f5;
    border: 1px solid #e3e3e3;
    border-radius: 1px;
    padding: 0 7px;
  }
  
  /* CSS Switch */
  input[switch] {
    display: none;
  }
  
  input[switch] + label {
    font-size: 1em;
    line-height: 1;
    width: 56px;
    height: 24px;
    background-color: #dddddd;
    background-image: none;
    border-radius: 2rem;
    padding: 0.16667rem;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    position: relative;
    font-weight: 500;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  input[switch] + label:before {
    color: #0a1832;
    content: attr(data-off-label);
    display: block;
    font-family: inherit;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    position: absolute;
    right: 1px;
    margin: 3px;
    top: 0;
    text-align: center;
    min-width: 1.66667rem;
    overflow: hidden;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  input[switch] + label:after {
    content: '';
    position: absolute;
    left: 3px;
    background-color: #f5f5f5;
    box-shadow: none;
    border-radius: 2rem;
    height: 20px;
    width: 20px;
    top: 2px;
    -webkit-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  input[switch]:checked + label {
    background-color: #2f8ee0;
  }
  
  input[switch]:checked + label:before {
    color: #ffffff;
    content: attr(data-on-label);
    right: auto;
    left: 3px;
  }
  
  input[switch]:checked + label:after {
    left: 33px;
    background-color: #f5f5f5;
  }
  
  input[switch="bool"] + label {
    background-color: #f24734;
  }
  
  input[switch="bool"] + label:before, input[switch="bool"]:checked + label:before,
  input[switch="default"]:checked + label:before {
    color: #ffffff;
  }
  
  input[switch="bool"]:checked + label {
    background-color: #6fd088;
  }
  
  input[switch="default"]:checked + label {
    background-color: #a2a2a2;
  }
  
  input[switch="primary"]:checked + label {
    background-color: #2f8ee0;
  }
  
  input[switch="success"]:checked + label {
    background-color: #6fd088;
  }
  
  input[switch="info"]:checked + label {
    background-color: #4bbbce;
  }
  
  input[switch="warning"]:checked + label {
    background-color: #ffbb44;
  }
  
  input[switch="danger"]:checked + label {
    background-color: #f24734;
  }
  
  input[switch="dark"]:checked + label {
    background-color: #0a1832;
  }
  
  input[switch="pink"]:checked + label {
    background-color: #e6487e;
  }
  
  input[switch="purple"]:checked + label {
    background-color: #8862e0;
  }
  
  /* Bootstrap filestyle */
  .icon-span-filestyle {
    padding-right: 5px;
  }
  
  .bootstrap-filestyle label {
    margin-bottom: 0;
  }
  
  .group-span-filestyle .badge {
    background-color: #0a1832;
  }
  
  /* Bootstrap Touchspin */
  .bootstrap-touchspin .input-group-addon {
    padding: .5rem .75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    color: #0a1832;
    text-align: center;
    background-color: #eff3f6;
    border: 1px solid rgba(10, 24, 50, 0.15);
  }
  
  .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn, .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn-group {
    z-index: 2;
    margin-left: -1px;
  }
  
  .bootstrap-touchspin .input-group .form-control:not(:first-child), .bootstrap-touchspin .input-group-addon:not(:first-child), .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn, .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn-group > .btn, .bootstrap-touchspin .input-group-btn:not(:first-child) > .dropdown-toggle, .bootstrap-touchspin .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn, .bootstrap-touchspin .input-group-btn:not(:last-child) > .btn:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  .bootstrap-touchspin .input-group .form-control:not(:last-child), .bootstrap-touchspin .input-group-addon:not(:last-child), .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn, .bootstrap-touchspin .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle), .bootstrap-touchspin .input-group-btn:not(:last-child) > .btn, .bootstrap-touchspin .input-group-btn:not(:last-child) > .btn-group > .btn, .bootstrap-touchspin .input-group-btn:not(:last-child) > .dropdown-toggle {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  /* Prism editor */
  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: #eff3f6;
  }
  
  /* ==============
    Form Editor
  ===================*/
  .mce-panel {
    border-color: #dfe7ed !important;
    background-color: #eff3f6 !important;
  }
  
  .mce-menu-item:hover, .mce-menu-item.mce-selected, .mce-menu-item:focus {
    background-color: #2f8ee0 !important;
  }
  
  .mce-menu {
    background-color: #ffffff !important;
  }
  
  /* ==============
    Summernote
  ===================*/
  .note-btn-group .dropdown-menu > li > a {
    display: block;
    padding: 5px 20px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
  }
  
  .note-btn-group .dropdown-menu > li > a:hover {
    background-color: #f6f8fa;
  }
  
  .note-image-popover, .note-air-popover, .note-link-popover {
    display: none;
  }
  
  .note-image-popover .dropdown-toggle::after, .note-air-popover .dropdown-toggle::after, .note-link-popover .dropdown-toggle::after {
    margin-left: 0;
  }
  
  .note-icon-caret {
    display: none;
  }
  
  .note-editor {
    position: relative;
  }
  
  .note-editor .btn-default {
    background-color: transparent;
    border-color: transparent;
  }
  
  .note-editor .btn-group-sm > .btn, .note-editor .btn-sm {
    padding: 8px 12px;
  }
  
  .note-editor .note-toolbar {
    background-color: #f3f3f3;
    border-bottom: 1px solid #eff3f6;
    margin: 0;
  }
  
  .note-editor .note-statusbar {
    background-color: #ffffff;
  }
  
  .note-editor .note-statusbar .note-resizebar {
    border-top: none;
    height: 15px;
    padding-top: 3px;
  }
  
  .note-editor.note-frame {
    border: 1px solid #eff3f6;
  }
  
  .note-popover .popover .popover-content {
    padding: 5px 0 10px 5px;
  }
  
  .note-popover .btn-default {
    background-color: transparent;
    border-color: transparent;
  }
  
  .note-popover .btn-group-sm > .btn, .note-popover .btn-sm {
    padding: 8px 12px;
  }
  
  .note-toolbar {
    padding: 5px 0 10px 5px;
  }
  
  /* ==============
    Calendar
  ===================*/
  .calendar {
    float: left;
    margin-bottom: 0;
  }
  
  .none-border .modal-footer {
    border-top: none;
  }
  
  .fc-toolbar {
    margin-bottom: 5px;
  }
  
  .fc-toolbar h2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    text-transform: uppercase;
  }
  
  .fc-day {
    background: #ffffff;
  }
  
  .fc-toolbar .fc-state-active, .fc-toolbar .ui-state-active,
  .fc-toolbar button:focus, .fc-toolbar button:hover,
  .fc-toolbar .ui-state-hover {
    z-index: 0;
  }
  
  .fc-widget-header {
    border: 1px solid #d5d5d5;
    background-color: #eff3f6;
  }
  
  .fc-widget-content {
    border: 1px solid #d5d5d5;
  }
  
  .fc th.fc-widget-header {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 0;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .fc-button {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    color: #555555;
    text-transform: capitalize;
  }
  
  .fc-text-arrow {
    font-family: arial;
    font-size: 16px;
  }
  
  .fc-state-hover {
    background: #f5f5f5;
  }
  
  .fc-state-highlight {
    background: #f0f0f0;
  }
  
  .fc-cell-overlay {
    background: #f0f0f0;
  }
  
  .fc-unthemed .fc-today {
    background: #ffffff;
  }
  
  .fc-event {
    border-radius: 2px;
    border: none;
    cursor: move;
    font-size: 13px;
    margin: 5px 0;
    padding: 5px 5px;
    text-align: center;
    background-color: #2f8ee0;
    color: #ffffff !important;
  }
  
  .external-event {
    color: #ffffff;
    cursor: move;
    margin: 10px 0;
    padding: 6px 10px;
  }
  
  .fc-basic-view td.fc-week-number span {
    padding-right: 5px;
  }
  
  .fc-basic-view td.fc-day-number {
    padding-right: 5px;
  }
  
  /* ==============
    Widgets
  ===================*/
  .widget-chart li {
    width: 31.5%;
    display: inline-block;
    padding: 0;
  }
  
  .widget-chart li i {
    font-size: 22px;
  }
  
  .mini-stat {
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    padding: 20px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    margin-bottom: 30px;
  }
  
  .mini-stat-icon {
    width: 60px;
    height: 60px;
    display: inline-block;
    line-height: 60px;
    text-align: center;
    font-size: 30px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    float: left;
    margin-right: 10px;
  }
  
  .mini-stat-info {
    font-size: 14px;
    padding-top: 2px;
  }
  
  .mini-stat-info span {
    display: block;
    font-size: 24px;
  }
  
  .dash-chart {
    height: 300px;
  }
  
  /* ==============
    Timeline
  ===================*/
  /* Activity */
  .activity-feed {
    padding: 15px 15px 0 15px;
    list-style: none;
  }
  
  .activity-feed .feed-item {
    position: relative;
    padding-bottom: 20px;
    padding-left: 30px;
    border-left: 2px solid #e4e8eb;
  }
  
  .activity-feed .feed-item:last-child {
    border-color: transparent;
  }
  
  .activity-feed .feed-item::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -6px;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    background: #ffffff;
    border: 1px solid #2f8ee0;
  }
  
  .activity-feed .feed-item .date {
    display: block;
    position: relative;
    top: -5px;
    color: #8c96a3;
    text-transform: uppercase;
    font-size: 13px;
  }
  
  .activity-feed .feed-item .activity-text {
    position: relative;
    top: -3px;
  }
  
  /* Timeline */
  .cd-container {
    width: 90%;
    max-width: 1170px;
    margin: 0 auto;
  }
  
  .cd-container::after {
    content: '';
    display: table;
    clear: both;
  }
  
  #cd-timeline {
    margin-bottom: 2em;
    margin-top: 2em;
    padding: 2em 0;
    position: relative;
  }
  
  #cd-timeline::before {
    border-left: 3px solid #eff3f6;
    content: '';
    height: 100%;
    left: 18px;
    position: absolute;
    top: 0;
    width: 3px;
  }
  
  @media only screen and (min-width: 1170px) {
    #cd-timeline {
      margin-bottom: 3em;
      margin-top: 3em;
    }
    #cd-timeline::before {
      left: 50%;
      margin-left: -2px;
    }
  }
  
  .cd-timeline-block {
    margin: 2em 0;
    position: relative;
  }
  
  .cd-timeline-block:after {
    clear: both;
    content: "";
    display: table;
  }
  
  .cd-timeline-block:first-child {
    margin-top: 0;
  }
  
  .cd-timeline-block:last-child {
    margin-bottom: 0;
  }
  
  @media only screen and (min-width: 1170px) {
    .cd-timeline-block {
      margin: 4em 0;
    }
    .cd-timeline-block:first-child {
      margin-top: 0;
    }
    .cd-timeline-block:last-child {
      margin-bottom: 0;
    }
  }
  
  .cd-timeline-img {
    position: absolute;
    top: 20px;
    left: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    color: #ffffff;
    background-color: #2f8ee0;
    border: 5px solid #ffffff;
  }
  
  .cd-timeline-img i {
    margin-left: 1px;
  }
  
  @media only screen and (min-width: 1170px) {
    .cd-timeline-img {
      width: 40px;
      height: 40px;
      line-height: 30px;
      left: 50%;
      margin-left: -20px;
      -webkit-transform: translateZ(0);
      -webkit-backface-visibility: hidden;
    }
    .cssanimations .cd-timeline-img.is-hidden {
      visibility: hidden;
    }
    .cssanimations .cd-timeline-img.bounce-in {
      visibility: visible;
      -webkit-animation: cd-bounce-1 0.6s;
      -moz-animation: cd-bounce-1 0.6s;
      animation: cd-bounce-1 0.6s;
    }
  }
  
  .cd-timeline-content {
    border-radius: 5px;
    border: 1px solid #eff3f6;
    margin-left: 60px;
    padding: 1em;
    position: relative;
  }
  
  .cd-timeline-content:after {
    clear: both;
    content: "";
    display: table;
  }
  
  .cd-timeline-content h2 {
    margin-top: 0;
  }
  
  .cd-timeline-content .cd-read-more {
    background: #2f8ee0;
    border-radius: 0.25em;
    color: white;
    display: inline-block;
    float: right;
    font-size: 14px;
    padding: .8em 1em;
  }
  
  .cd-timeline-content .cd-date {
    display: inline-block;
    font-size: 14px;
  }
  
  .cd-timeline-content h3 {
    font-size: 18px;
    margin: 0 0 15px 0;
  }
  
  .no-touch .cd-timeline-content .cd-read-more:hover {
    background-color: #bac4cb;
  }
  
  .cd-timeline-content .cd-date {
    float: left;
    padding: .8em 0;
    opacity: .7;
  }
  
  .cd-timeline-content::before {
    content: '';
    position: absolute;
    top: 16px;
    right: 100%;
    height: 0;
    width: 0;
    border: 12px solid transparent;
    border-right: 12px solid #fafafa;
  }
  
  @media only screen and (min-width: 1170px) {
    .cd-timeline-content {
      margin-left: 0;
      padding: 1.6em;
      width: 45%;
    }
    .cd-timeline-content::before {
      top: 24px;
      left: 100%;
      border-color: transparent;
      border-left-color: #eff3f6;
    }
    .cd-timeline-content .cd-read-more {
      float: left;
    }
    .cd-timeline-content .cd-date {
      position: absolute;
      width: 100%;
      left: 122%;
      top: 20px;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
      top: 24px;
      left: auto;
      right: 100%;
      border-color: transparent;
      border-right-color: #eff3f6;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
      float: right;
    }
    .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
      left: auto;
      right: 122%;
      text-align: right;
    }
    .cssanimations .cd-timeline-content.is-hidden {
      visibility: hidden;
    }
    .cssanimations .cd-timeline-content.bounce-in {
      visibility: visible;
      -webkit-animation: cd-bounce-2 0.6s;
      -moz-animation: cd-bounce-2 0.6s;
      animation: cd-bounce-2 0.6s;
    }
  }
  
  @media only screen and (min-width: 1170px) {
    .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
      -webkit-animation: cd-bounce-2-inverse 0.6s;
      -moz-animation: cd-bounce-2-inverse 0.6s;
      animation: cd-bounce-2-inverse 0.6s;
    }
  }
  
  /* ==== =====
  Invoice
  ============= */
  .table > thead > tr > .no-line {
    border-bottom: none;
  }
  
  .table > tbody > tr > .no-line {
    border-top: none;
  }
  
  .table > tbody > tr > .thick-line {
    border-top: 2px solid #eff3f6;
  }
  
  /* ==============
    Maps
  ===================*/
  .gmaps, .gmaps-panaroma {
    height: 300px;
    background: #eff3f6;
    border-radius: 3px;
  }
  
  .gmaps-overlay {
    display: block;
    text-align: center;
    color: #ffffff;
    font-size: 16px;
    line-height: 40px;
    background: #2f8ee0;
    border-radius: 4px;
    padding: 10px 20px;
  }
  
  .gmaps-overlay_arrow {
    left: 50%;
    margin-left: -16px;
    width: 0;
    height: 0;
    position: absolute;
  }
  
  .gmaps-overlay_arrow.above {
    bottom: -15px;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-top: 16px solid #2f8ee0;
  }
  
  .gmaps-overlay_arrow.below {
    top: -15px;
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 16px solid #2f8ee0;
  }
  
  .vector-map-height {
    height: 400px;
  }
  
  /* ==============
    Account Pages
  ===================*/
  .accountbg {
    background: url("../images/tic-tac-toe.png");
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
  }
  
  .wrapper-page {
    margin: 5.5% auto;
    max-width: 460px;
    position: relative;
  }
  
  .wrapper-page .logo-admin {
    font-size: 28px;
    line-height: 70px;
  }
  
  .wrapper-page .card {
    box-shadow: 1px 4px 45px 0 rgba(0, 0, 0, 0.1);
  }
  
  .user-thumb {
    position: relative;
    z-index: 999;
  }
  
  .user-thumb img {
    height: 88px;
    margin: 0 auto;
    width: 88px;
  }
  
  .ex-page-content h1 {
    font-size: 98px;
    font-weight: 700;
    line-height: 150px;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;
  }
  
  /* ==============
    Menu
  ===================*/
  .topbar {
    position: fixed;
    left: 240px;
    right: 0;
    top: 0;
    z-index: 999;
  }
  
  .logo {
    color: #ffffff !important;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 3px;
    line-height: 80px;
    text-transform: uppercase;
    padding: 10px;
  }
  
  .navbar-custom {
    background-color: #ffffff;
    border: none;
    margin-bottom: 20px;
    box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15);
  }
  
  .navbar-custom .dropdown.show .nav-link {
    background-color: #f3f3f3;
  }
  
  .navbar-custom .language-switch a img {
    float: right;
    margin-top: 5px;
  }
  
  /* Notification */
  .notification-list {
    margin-left: 0;
  }
  
  .notification-list .noti-title {
    border-radius: 0.25rem 0.25rem 0 0;
    margin: -4px 0px 0px 0px;
    width: auto;
    padding: 12px 20px;
  }
  
  .notification-list .noti-title h5 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
  }
  
  .notification-list .noti-title .label {
    float: right;
  }
  
  .notification-list .noti-icon {
    font-size: 28px;
    vertical-align: middle;
    color: #707070;
  }
  
  .notification-list .noti-icon-badge {
    display: inline-block;
    position: absolute;
    top: 9px;
    right: 3px;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
  
  .notification-list .notify-item {
    padding: 10px 20px;
  }
  
  .notification-list .notify-item .notify-icon {
    float: left;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    border-radius: 50%;
    color: #ffffff;
  }
  
  .notification-list .notify-item .notify-icon img {
    margin-top: 4px;
  }
  
  .notification-list .notify-item .notify-details {
    margin-bottom: 0;
    overflow: hidden;
    margin-left: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .notification-list .notify-item .notify-details b {
    font-weight: 500;
  }
  
  .notification-list .notify-item .notify-details small {
    display: block;
    white-space: normal;
  }
  
  .notification-list .notify-item .notify-details span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
  }
  
  .notification-list .notify-all {
    border-radius: 0 0 0.25rem 0.25rem;
    margin: 0 0 -5px 0;
    background-color: #eff3f6;
  }
  
  .notification-list .profile-dropdown .notify-item {
    padding: 4px 20px;
  }
  
  .notification-list .nav-link {
    padding: 0 12px;
    line-height: 70px;
  }
  
  .profile-dropdown {
    width: 170px;
  }
  
  .profile-dropdown i {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .nav-user {
    margin-right: 10px;
  }
  
  .nav-user img {
    height: 36px;
    width: 36px;
  }
  
  .arrow-none:after {
    border: none;
    margin: 0;
    display: none;
  }
  
  .menu-title {
    padding: 12px 25px !important;
    letter-spacing: .035em;
    pointer-events: none;
    cursor: default;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 10px !important;
  }
  
  .profile {
    padding: 17px 15px;
  }
  
  .profile img {
    border: 2px solid #edf0f0;
    height: 36px;
    width: 36px;
    float: left;
  }
  
  .profile .profile-username {
    margin-left: 45px;
    display: block;
    line-height: 36px;
  }
  
  .navbar-nav {
    margin: 0;
  }
  
  .side-menu {
    bottom: 0;
    top: 0;
    width: 240px;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background: radial-gradient(at 50% -20%, #1967a9, #0a1832) fixed;
    box-shadow: 1px 0 14px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 99;
  }
  
  .side-menu .waves-ripple {
    background-color: rgba(255, 255, 255, 0.25);
  }
  
  .side-menu .topbar-left {
    padding-left: 30px;
  }
  
  body.fixed-left .side-menu.left {
    bottom: 50px;
    height: 100%;
    margin-bottom: -70px;
    margin-top: 0;
    padding-bottom: 70px;
    position: fixed;
  }
  
  .content-page {
    margin-left: 240px;
    overflow: hidden;
  }
  
  .content-page > .content {
    margin-bottom: 60px;
    padding: 20px 30px 5px 30px;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  
  .page-content-wrapper {
    margin: 0 -10px;
    padding-top: 80px;
  }
  
  .button-menu-mobile {
    background-color: #ffffff;
    font-size: 28px;
    width: 42px;
    border-radius: 3px;
    border: none;
    line-height: 70px;
    display: none !important;
  }
  
  .sidebar-inner {
    height: 100%;
  }
  
  .search-wrap {
    background-color: #ffffff;
    color: #0a1832;
    z-index: 9997;
    position: absolute;
    top: 0;
    display: flex;
    width: 100%;
    height: 70px;
    padding: 0 15px;
    transform: translate3d(0, -100%, 0);
    transition: .3s;
  }
  
  .search-wrap form {
    display: flex;
    width: 100%;
  }
  
  .search-wrap .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .search-wrap .search-input {
    flex: 1 1;
    border: none;
    outline: none;
    box-shadow: none;
    background-color: transparent;
  }
  
  .search-wrap .close-search {
    width: 36px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    color: inherit;
    font-size: 24px;
  }
  
  .search-wrap .close-search:hover {
    color: #f24734;
  }
  
  .search-wrap.open {
    transform: translate3d(0, 0, 0);
  }
  
  #sidebar-menu, #sidebar-menu ul, #sidebar-menu li, #sidebar-menu a {
    border: 0;
    font-weight: normal;
    line-height: 1;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    text-decoration: none;
  }
  
  .navbar-nav > li > a.notification-icon-box {
    line-height: 70px;
  }
  
  .navbar-nav > li > a.notification-icon-box i {
    font-size: 26px;
    vertical-align: middle;
  }
  
  #sidebar-menu {
    padding-bottom: 50px;
    width: 100%;
  }
  
  #sidebar-menu ul ul {
    display: none;
  }
  
  #sidebar-menu ul ul li {
    border-top: 0;
  }
  
  #sidebar-menu ul ul li.active a {
    color: rgba(255, 255, 255, 0.8);
  }
  
  #sidebar-menu ul ul a {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    padding: 12px 20px 12px 55px;
    font-size: 14px;
  }
  
  #sidebar-menu ul ul a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  
  #sidebar-menu ul ul a i {
    margin-right: 5px;
  }
  
  #sidebar-menu ul ul ul a {
    padding-left: 75px;
  }
  
  #sidebar-menu > ul > li > a {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    padding: 14px 20px;
    font-size: 16px;
  }
  
  #sidebar-menu > ul > li > a:hover {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
  }
  
  #sidebar-menu > ul > li > a span i {
    font-size: 18px;
    line-height: 22px;
  }
  
  .has_sub.nav-active i.mdi-chevron-right:before {
    content: "\F140";
  }
  
  #sidebar-menu > ul > li.nav-active > a {
    background-color: rgba(10, 24, 50, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }
  
  #sidebar-menu > ul > li > a > span {
    vertical-align: middle;
  }
  
  #sidebar-menu > ul > li > a > i {
    display: inline-block;
    line-height: 17px;
    margin-left: 3px;
    margin-right: 10px;
    text-align: center;
    vertical-align: middle;
    width: 20px;
  }
  
  #sidebar-menu > ul > li > a > i.i-right {
    float: right;
    margin: 3px 0 0 0;
  }
  
  #sidebar-menu > ul > li > a.active {
    color: rgba(255, 255, 255, 0.8);
  }
  
  #sidebar-menu > ul > li > a.active i {
    color: rgba(255, 255, 255, 0.8);
  }
  
  #sidebar-menu > ul > li.nav-active > ul {
    display: block;
  }
  
  #wrapper.enlarged .left.side-menu {
    padding-top: 0;
    z-index: 5;
    margin-left: -100%;
  }
  
  #wrapper.enlarged .content-page {
    margin-left: 0;
  }
  
  #wrapper.enlarged .footer {
    left: 0;
  }
  
  .user-details {
    min-height: 80px;
    padding: 20px;
    position: relative;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .user-details img {
    position: relative;
    z-index: 9999;
    height: 64px;
    width: 64px;
  }
  
  .user-details .user-info {
    text-align: center;
  }
  
  .user-details .user-info .user-status {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    font-size: 12px;
  }
  
  .page-title {
    margin: 0;
    line-height: 70px;
    padding-left: 15px;
    font-size: 20px;
  }
  
  .header-bg {
    background: #eff3f6 fixed;
    padding-bottom: 60px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
    margin: -40px -20px;
  }
  
  /* ==============
    Responsive
  ===================*/
  @media (max-width: 1024px) {
    .side-menu.left {
      margin-left: -100%;
    }
    .button-menu-mobile {
      display: inline-block !important;
    }
    .topbar, .footer {
      left: 0;
    }
    .content-page {
      margin-left: 0;
    }
    .navbar-custom {
      padding-left: 10px;
    }
    .enlarged .side-menu.left {
      margin-left: 0 !important;
    }
    .content-page > .content {
      padding: 20px;
    }
  }
  
  @media (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
    .content-page {
      margin-left: 0 !important;
    }
    .enlarged .left.side-menu {
      margin-left: -75px;
    }
    .mobile-sidebar {
      left: 0;
    }
    .mobile-content {
      left: 250px;
      right: -250px;
    }
    .wrapper-page {
      width: 90%;
    }
    .account-page-full.wrapper-page {
      width: 100%;
      position: relative;
    }
    .navbar-nav .open .dropdown-menu {
      background-color: #ffffff;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
      left: auto;
      position: absolute;
      right: 0;
    }
    #wrapper.enlarged .footer, .footer {
      left: 0;
    }
  }
  
  @media (max-width: 620px) {
    .page-header-title {
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .side-menu {
      z-index: 10;
    }
    .page-title {
      display: none;
    }
  }
  
  @media (max-width: 420px) {
    .hide-phone, .notify-icon {
      display: none;
    }
    .dropdown-menu-lg {
      width: 200px;
    }
    .notify-details {
      margin-left: 0 !important;
    }
  }
  /*# sourceMappingURL=style.css.map */
`