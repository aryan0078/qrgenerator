// import React, { Component } from 'react';
// import Header from '../components/header'
// import {Link, Redirect}  from 'react-router-dom'
// import ImageLoader from 'react-image-file';
// import './css/home.css'
// export default class Home extends Component {
//     constructor(props){
//         super(props)
//         this.getqr=this.getqr.bind(this)
//         this.state={logout:false,logout:false,url:'',qr:""}
//     }

//     async getqr(){
//       var res=await fetch('https://qrgenback.herokuapp.com/gen/',{
//         method:"POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",

//       },
//         body:"url="+this.state.url
//     })
//       var res=await res.blob()
//       console.log(res)
//       this.setState({qr: URL.createObjectURL(res)})
//     }
//   render() {
//       if(this.state.logout){
//           return <Redirect to="/login"/>
//       }
//     return (
//         <>
//         <Header right={<button class="btn btn-primary" id="submitbutton" onClick={()=>this.setState({logout:true})}>Logout</button>}/>
//       <div id="cardcontainer">

//       <div class="card" style={{width:"18rem"}} id="qrcard">
//       <img class="card-img-top" src={this.state.qr} alt=""/> 

//   <div class="card-body">
//   <input id="urlinput" placeholder="Enter your url here" value={this.state.url} onChange={(e)=>this.setState({url:e.target.value})}></input>
// <button type="button" class="btn btn-primary" onClick={this.getqr} id="genbtn">Generate</button>
//   </div>
// </div>
//       </div>
//     </>);
//   }
// }



import React, { Component, Fragment } from "react";
import "./css/home.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from '../components/header'
// import logo from "./assets/images/logo1.png";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header right={<button class="btn btn-primary" id="submitbutton" onClick={()=>this.setState({logout:true})}>Logout</button>}/>
        <div className="container1">


          <div className="row row1">
            <div className="col-md-8 border rounded" >
              <div className="row ">

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>
                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>
                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>
                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>

                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>
                <div className="col-md-2 col-sm-4 col-xs-6" >&#9775;Text
							</div>





              </div>
              <textarea class="form-control textarea" id="exampleFormControlTextarea1" rows="3" placeholder="text here"></textarea>
              {/* <button type="button" className="btn btn-success">&#x1f5d8; GENERATE QR CODE</button> */}


              <p className="upload">Upload File</p>
            </div>

            <div className="col-md-4 border rounded" >
              2322434
					</div>
          </div>
          <br /><br />
          <p className="newQr"><span>NEWQR Code creation built into your applicationUse our API</span></p>

          <h3 className="scrollDown">Scroll down to see QR COde use cases</h3>


          <br /><br />
          <div className="row">

            <div className="col-md-3 ">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />

            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
            <div className="col-md-3">
              <div className="card" >
                <img className="card-img-top" src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/qr_codes_on/overview/overview-business-cards.jpg" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Business Card</p>
                </div>
              </div><br />
            </div>
          </div>
          <br /><br />
          <h3 className="text-center">Sign up for these features</h3>
          <br /><br />
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/startpage/Illu_Creation.svg" />
            </div>
            <div className="col-md-5 offset-md-1 col-sm-12">
              <h5>QR CODES CREATION</h5>
              <p className="featureText">Choose from a variety of functions: from displaying an interactive Facebook Like button to encoding a price list in PDF format. These innovative functions will surprise users and motivate them to scan the Codes. In the next step, customize the generated QR Codes by selecting colors and shapes and inserting your company logo. Or simply by using one of our ready-made design templates.</p>
            </div>
          </div>
          <br /><br /><br /><br />
          <div className="row">

            <div className="col-md-5 col-sm-12">
              <h5>TRACK CAMPAIGN PERFORMANCE</h5>
              <p className="featureText"> After the campaign starts, you can track the scan statistics - how many times, when, where and with what devices the Codes have been scanned. So you can notice any changes in performance immediately. All information is presented in the form of easy-to-understand graphs and charts. The statistics also include raw data tables, downloadable in PDF or CSV format.</p>
            </div>

            <div className="col-md-6  offset-md-1 col-sm-12">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/startpage/Illu_TrackPerform.svg" />
            </div>
          </div>


          <div className="row startNow">
            <div className="col-md-5 offset-md-3 offset-xs-3">
              <h4>GET STARTED IN JUST 30 SECONDS</h4>

Try out all features right now
</div>
            <div className="col-md-3 offset-xs-3">
              <button className="btn btn-primary">START NOW</button>
            </div>
          </div>

          <br />
          <h3 className="text-center">Companies that already got their QR Code marketing right</h3>


          <div className="row">
            <div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div>
            <div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div><div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div><div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div><div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div>
            <div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div>
            <div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div>
            <div className="col-md-2 company">
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/logos/customers/Logo_Engel.png" />
            </div>

          </div>


          <br /><br /><br />

          <h3 className="text-center">Customer Reviews</h3>

          <div className="row">
            <div className="col-md-5 review">
              <h4>VERY GOOD SOFTWARE AND CONSULTATION</h4><br />
              <p>In addition to excellent software, QR Suite also offers great advice. There are always friendly staff members available to explain the features and help with the creation of the Codes.</p>
              <h6>- Robert Aumer, Seal Systems AG</h6>
            </div>
            <div className="col-md-5 offset-2 review">
              <h4>BEATING THE COMPETITION</h4><br />
              <p>After extensive research, we decided on qrsuite from QRCode-Generator.de The ease of use and an informative backend were what sealed the deal for us. The Generator is well ahead of the competition in these areas, and the personalised service rounds off their positive image.</p>

              <h6>- Jan Albers, European Coastal Airlines</h6>
            </div>
          </div>



          <br /><br /><br /><br />
          <h3 className="text-center">What you need to know about QR Codes</h3>
          <h5 className="text-center">Receive up to 173% more scans with four simple tricks</h5>
          <br /><br /><br />
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h5>&#10102;NCOURAGE YOUR CUSTOMERS</h5><br />
              <p>
                Invite users to interact with your Code by placing a short call to action like “Scan me” next to it.
</p>
            </div>
            <div className="col-md-5 offset-md-2 col-sm-12">
              <h5>&#10103;COMMUNICATE THE ADDED VALUE</h5><br />
              <p>
                Explain how your customers benefit from scanning your Code, for example by adding a hint like “Get your 10% discount now”.
					</p>
            </div>
          </div>


          <br /><br /><br />
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <h5> &#10104;NCOURAGE YOUR CUSTOMERS</h5><br />
              <p>
                Invite users to interact with your Code by placing a short call to action like “Scan me” next to it.
</p>
            </div>
            <div className="col-md-5 offset-md-2 col-sm-12">
              <h5>&#10105;COMMUNICATE THE ADDED VALUE</h5><br />
              <p>
                Explain how your customers benefit from scanning your Code, for example by adding a hint like “Get your 10% discount now”.
					</p>
            </div>
          </div>

          <div className="row scancode">
            <div className="col-12 " >
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/startpage/aboutQR.png" />
            </div>
          </div>

          <br /><br />
          <div className="row ">
            <div className="col-md-6 offset-md-2 offset-xs-2">
              <h4>CREATE YOUR OWN QR CODE WITH LOGO</h4>

	In less than 5 minutes
</div>
            <div className="col-md-3 offset-xs-3">
              <button className="btn btn-primary">START NOW</button>
            </div>
          </div>



          <br /><br /><br /><br />
          <h3 className="text-center">The key to a successful QR Code campaign</h3>
          <br /><br /><br /><br /><br />
          <div className="row">
            <div className="col-md-5">
              <h4>... IS TO ANALYZE YOUR QR CODES</h4>
              <br />

              <p>
                QR Codes are measurable - Get to know how often, where and when your customers scan your Codes. Print several dynamic QR Codes on different marketing media and see where your target audience is reached most effectively. Dynamic Codes are a great tool for receiving quantitative statements for your general advertising success.
				</p>
              <a href="#"><h4> &#10140; What are Dynamic QR Codes?</h4></a>
              <a href="#"><h4> &#10140; How can I use QR Codes successfully?</h4></a>
              <a href="#"><h4> &#10140; What do I have to consider before printing?</h4></a>
              <a href="#"><h4> &#10140; What other aspects are important in connection with printing QR Codes?</h4></a>
              <a href="#"><h4> &#10140; How can QR Codes be scanned?</h4></a>
              <a href="#"><h4> &#10140; What are Static and Dynamic QR Codes?</h4></a>
            </div>
            <div className="col-md-6 offset-md-1" >
              <img src="https://cdn-web.qr-code-generator.com/wp-content/themes/qr/new_structure/assets/media/images/startpage/Visual-BrowserStats.png" />
            </div>

          </div>
          <br /><br /><br />

          <div className="row startNow">
            <div className="col-md-5 offset-md-3 offset-xs-3">
              <h4>GET STARTED IN JUST 30 SECONDS</h4>

Try out all features right now
</div>
            <div className="col-md-3 offset-xs-3">
              <button className="btn btn-primary">START NOW</button>
            </div>
          </div>



          <br /><br /><br /><br />
          <h3 className="text-center">Frequently asked questions</h3>
          <h5 className="text-center">What you need to know about QR codes</h5>

          <br /><br /><br /><br />

          <div className="row">
            <div className="col-md-5">
              <h4>WHAT IS A QR CODE?</h4>
              <p>A QR Code is a two-dimensional barcode consisting of a black and white pixel pattern which allows to encode up to a few hundred characters. Today’s smartphones and tablets are able to recognize and decode them exceptionally fast - it’s not surprising that QR stands for Quick Response.</p>
            </div>
            <div className="col-md-5 offset-md-2">
              <h4>HOW ARE QR CODES USED?</h4>
              <p>Due to the widespread use of smartphones, QR Codes are mosly used for mobile marketing purposes these days. Marketers benefit from QR Codes by being able to add digital content like websites, videos, PDFs, image galleries or contact details to printed media such as flyers, posters, catalogues and business cards.</p>
            </div>
          </div>
          <br /><br /><br />
          <div className="row">
            <div className="col-md-5">
              <h4>HOW CAN I CREATE A QR CODE?</h4>
              <p>With a QR Code Generator a QR Code can be created within seconds and in three simple steps. At first, choose the function for your Code. Secondly, enter the content that you want to provide your customers and optionally give it a unique look by adjusting the colors and uploading a logo into it. Finished with that? Then your Code is ready for downloading and printing.</p>
            </div>
            <div className="col-md-5 offset-md-2">
              <h4>IS IT POSSIBLE TO CUSTOMIZE QR CODES?</h4>
              <p>Yes. Thanks to a high error tolerance level, it is possible to modify QR Codes to a certain degree without influencing its legibility at all. For example, you can choose new fore- and background colours, place your company logo right in the middle of the Code and change the design of the three distinctive corner points. Remember to make sure that your Code actually works by testing it practically with several smartphones and QR Code readers.</p>
            </div>
          </div>
        </div>

        <br /><br />
        <div className="row trail">
          <div className="col-md-6 offset-md-2 offset-xs-2">
            <h4>GET YOUR 14-DAY TRIAL OF QR CODE GENERATOR PRO</h4>

	est all features for free and without obligation
</div>
          <div className="col-md-3 offset-xs-2">
            <button className="btn btn-primary">START NOW</button>
          </div>
        </div>


        <br />
        <div className="row footer">
          <div className="col-md-3">
            by Egoditor

	<h5>QR Code Generator lets you create memorable marketing campaigns with trackable QR Codes—designed by you.</h5>
          </div>
          <div className="col-md-2">
            <h4>PRODUCT</h4>
            <h5>PRO Features</h5>

            <h5>QR Code Types</h5>

          </div>
          <div className="col-md-2">
            <h4>RESOURCES</h4>

            <h5>Solutions</h5>
            <h5>QR Codes in Marketing</h5>
          </div>
          <div className="col-md-2">
            <h4>SUPPORT</h4>
            <h5>Help Center</h5>
            <h5>Contact Us</h5>

          </div>
          <div className="col-md-3">
            <h4>FROM OUR BLOG</h4>
            <h5>How China is Using QR Codes to Detect and Stop Coronavirus</h5>
          </div>
        </div>
        <hr />

        <div class="row footer2">
          <div className="col-md-6 col-sm-12 ">
            <p>© qr-code-generator.com 2020, ‘QR Code’ is a registered trademark of DENSO WAVE </p>
            <h6>INCORPORATED</h6>
          </div>
          <div className="col-md-6 col-sm-12 ">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Legal Notice</a>


          </div>
        </div>
      </Fragment>
    );
  }
}