import React,{Component} from 'react';
import styled from 'styled-components'

export class Footer extends Component {

    render(){
        return(
              <FooterContainer className="main-footer">
                  <div className="footer-middle">
                  <div className="container">
                      <div className="row">
                          {/* Column 1 */}
                          <div className="col-md-3 col-sm-6">
                              <h4>Web Developer</h4>
                              <ul className="list-unstyled">
                                  <li><a href="/">Laravel Developer</a></li>
                                  <li>Magento Developer</li>
                                  <li>Wordpress Developer</li>
                                  <li>Fullstack Developer</li>
                              </ul>
                          </div>
                          {/* Column 2 */}
                          <div className="col-md-3 col-sm-6">
                              <h4>Mobile Developer</h4>
                              <ul className="list-unstyled">
                                  <li>Android Developer</li>
                                  <li>ReactNative Developer</li>
                                  <li>IOS Developer</li>
                                  <li>eCommerce</li>
                              </ul>
                          </div>
                          {/* Column 3 */}
                          <div className="col-md-3 col-sm-6">
                              <h4>Front-end Developer</h4>
                              <ul className="list-unstyled">
                                  <li>HTML Developer</li>
                                  <li>Javascript Developer</li>
                                  <li>React Developer</li>
                                  <li>Ajax</li>
                              </ul>
                          </div>
                          {/* Column 4 */}
                          <div className="col-md-3 col-sm-6">
                              <h4>Back-end Developer</h4>
                              <ul className="list-unstyled">
                                  <li>SQL Developer</li>
                                  <li>Java Developer</li>
                                  <li>PHP Developer</li>
                                  <li>Python Developer</li>
                              </ul>
                          </div>

                      </div>
                      {/* Footer Bottom copyright */}
                      <div className="footer-bottom">
                          <p className="text-xs-center">
                              &copy;{new Date().getFullYear()}Athar - All Rights Reserved
                          </p>
                      </div>

                  </div>
                  </div>
              </FooterContainer>

        )

    }
}
const FooterContainer = styled.footer`
.footer-middle {
    background:var(--mainDark);
    padding-top:3rem;
    color:var(--mainWhite);
}

.footer-bottom {
    padding-top:3rem;
    padding-bottom:2rem;
}

`;
