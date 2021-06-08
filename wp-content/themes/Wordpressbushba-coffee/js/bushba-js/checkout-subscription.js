let contentArr = [
  `<h3>shipping details</h3>
  <input type="text" placeholder="Full name" class="input">
  <div class="phone-input input">
      
      <input type="tel"  id="phone" name="phone">
  </div>
  <input type="text" placeholder="Address" class="input">
  <div class="city">
      <input type="text" placeholder="City">
      <input type="text" placeholder="Zip Code">
  </div>
  <div class="country">
      <input type="text" placeholder="Country">
      <img src="../img/drop-gray.png" alt="">
      <div class="country-container">
          <ul id="country" name="country">
            <li value="Afganistan">Afghanistan</li>
            <li value="Albania">Albania</li>
            <li value="Algeria">Algeria</li>
            <li value="American Samoa">American Samoa</li>
            <li value="Andorra">Andorra</li>
            <li value="Angola">Angola</li>
            <li value="Anguilla">Anguilla</li>
            <li value="Antigua & Barbuda">Antigua & Barbuda</li>
            <li value="Argentina">Argentina</li>
            <li value="Armenia">Armenia</li>
            <li value="Aruba">Aruba</li>
            <li value="Australia">Australia</li>
            <li value="Austria">Austria</li>
            <li value="Azerbaijan">Azerbaijan</li>
            <li value="Bahamas">Bahamas</li>
            <li value="Bahrain">Bahrain</li>
            <li value="Bangladesh">Bangladesh</li>
            <li value="Barbados">Barbados</li>
            <li value="Belarus">Belarus</li>
            <li value="Belgium">Belgium</li>
            <li value="Belize">Belize</li>
            <li value="Benin">Benin</li>
            <li value="Bermuda">Bermuda</li>
            <li value="Bhutan">Bhutan</li>
            <li value="Bolivia">Bolivia</li>
            <li value="Bonaire">Bonaire</li>
            <li value="Bosnia & Herzegovina">Bosnia & Herzegovina</li>
            <li value="Botswana">Botswana</li>
            <li value="Brazil">Brazil</li>
            <li value="British Indian Ocean Ter">British Indian Ocean Ter</li>
            <li value="Brunei">Brunei</li>
            <li value="Bulgaria">Bulgaria</li>
            <li value="Burkina Faso">Burkina Faso</li>
            <li value="Burundi">Burundi</li>
            <li value="Cambodia">Cambodia</li>
            <li value="Cameroon">Cameroon</li>
            <li value="Canada">Canada</li>
            <li value="Canary Islands">Canary Islands</li>
            <li value="Cape Verde">Cape Verde</li>
            <li value="Cayman Islands">Cayman Islands</li>
            <li value="Central African Republic">Central African Republic</li>
            <li value="Chad">Chad</li>
            <li value="Channel Islands">Channel Islands</li>
            <li value="Chile">Chile</li>
            <li value="China">China</li>
            <li value="Christmas Island">Christmas Island</li>
            <li value="Cocos Island">Cocos Island</li>
            <li value="Colombia">Colombia</li>
            <li value="Comoros">Comoros</li>
            <li value="Congo">Congo</li>
            <li value="Cook Islands">Cook Islands</li>
            <li value="Costa Rica">Costa Rica</li>
            <li value="Cote DIvoire">Cote DIvoire</li>
            <li value="Croatia">Croatia</li>
            <li value="Cuba">Cuba</li>
            <li value="Curaco">Curacao</li>
            <li value="Cyprus">Cyprus</li>
            <li value="Czech Republic">Czech Republic</li>
            <li value="Denmark">Denmark</li>
            <li value="Djibouti">Djibouti</li>
            <li value="Dominica">Dominica</li>
            <li value="Dominican Republic">Dominican Republic</li>
            <li value="East Timor">East Timor</li>
            <li value="Ecuador">Ecuador</li>
            <li value="Egypt">Egypt</li>
            <li value="El Salvador">El Salvador</li>
            <li value="Equatorial Guinea">Equatorial Guinea</li>
            <li value="Eritrea">Eritrea</li>
            <li value="Estonia">Estonia</li>
            <li value="Ethiopia">Ethiopia</li>
            <li value="Falkland Islands">Falkland Islands</li>
            <li value="Faroe Islands">Faroe Islands</li>
            <li value="Fiji">Fiji</li>
            <li value="Finland">Finland</li>
            <li value="France">France</li>
            <li value="French Guiana">French Guiana</li>
            <li value="French Polynesia">French Polynesia</li>
            <li value="French Southern Ter">French Southern Ter</li>
            <li value="Gabon">Gabon</li>
            <li value="Gambia">Gambia</li>
            <li value="Georgia">Georgia</li>
            <li value="Germany">Germany</li>
            <li value="Ghana">Ghana</li>
            <li value="Gibraltar">Gibraltar</li>
            <li value="Great Britain">Great Britain</li>
            <li value="Greece">Greece</li>
            <li value="Greenland">Greenland</li>
            <li value="Grenada">Grenada</li>
            <li value="Guadeloupe">Guadeloupe</li>
            <li value="Guam">Guam</li>
            <li value="Guatemala">Guatemala</li>
            <li value="Guinea">Guinea</li>
            <li value="Guyana">Guyana</li>
            <li value="Haiti">Haiti</li>
            <li value="Hawaii">Hawaii</li>
            <li value="Honduras">Honduras</li>
            <li value="Hong Kong">Hong Kong</li>
            <li value="Hungary">Hungary</li>
            <li value="Iceland">Iceland</li>
            <li value="Indonesia">Indonesia</li>
            <li value="India">India</li>
            <li value="Iran">Iran</li>
            <li value="Iraq">Iraq</li>
            <li value="Ireland">Ireland</li>
            <li value="Isle of Man">Isle of Man</li>
            <li value="Israel">Israel</li>
            <li value="Italy">Italy</li>
            <li value="Jamaica">Jamaica</li>
            <li value="Japan">Japan</li>
            <li value="Jordan">Jordan</li>
            <li value="Kazakhstan">Kazakhstan</li>
            <li value="Kenya">Kenya</li>
            <li value="Kiribati">Kiribati</li>
            <li value="Korea North">Korea North</li>
            <li value="Korea Sout">Korea South</li>
            <li value="Kuwait">Kuwait</li>
            <li value="Kyrgyzstan">Kyrgyzstan</li>
            <li value="Laos">Laos</li>
            <li value="Latvia">Latvia</li>
            <li value="Lebanon">Lebanon</li>
            <li value="Lesotho">Lesotho</li>
            <li value="Liberia">Liberia</li>
            <li value="Libya">Libya</li>
            <li value="Liechtenstein">Liechtenstein</li>
            <li value="Lithuania">Lithuania</li>
            <li value="Luxembourg">Luxembourg</li>
            <li value="Macau">Macau</li>
            <li value="Macedonia">Macedonia</li>
            <li value="Madagascar">Madagascar</li>
            <li value="Malaysia">Malaysia</li>
            <li value="Malawi">Malawi</li>
            <li value="Maldives">Maldives</li>
            <li value="Mali">Mali</li>
            <li value="Malta">Malta</li>
            <li value="Marshall Islands">Marshall Islands</li>
            <li value="Martinique">Martinique</li>
            <li value="Mauritania">Mauritania</li>
            <li value="Mauritius">Mauritius</li>
            <li value="Mayotte">Mayotte</li>
            <li value="Mexico">Mexico</li>
            <li value="Midway Islands">Midway Islands</li>
            <li value="Moldova">Moldova</li>
            <li value="Monaco">Monaco</li>
            <li value="Mongolia">Mongolia</li>
            <li value="Montserrat">Montserrat</li>
            <li value="Morocco">Morocco</li>
            <li value="Mozambique">Mozambique</li>
            <li value="Myanmar">Myanmar</li>
            <li value="Nambia">Nambia</li>
            <li value="Nauru">Nauru</li>
            <li value="Nepal">Nepal</li>
            <li value="Netherland Antilles">Netherland Antilles</li>
            <li value="Netherlands">Netherlands (Holland, Europe)</li>
            <li value="Nevis">Nevis</li>
            <li value="New Caledonia">New Caledonia</li>
            <li value="New Zealand">New Zealand</li>
            <li value="Nicaragua">Nicaragua</li>
            <li value="Niger">Niger</li>
            <li value="Nigeria">Nigeria</li>
            <li value="Niue">Niue</li>
            <li value="Norfolk Island">Norfolk Island</li>
            <li value="Norway">Norway</li>
            <li value="Oman">Oman</li>
            <li value="Pakistan">Pakistan</li>
            <li value="Palau Island">Palau Island</li>
            <li value="Palestine">Palestine</li>
            <li value="Panama">Panama</li>
            <li value="Papua New Guinea">Papua New Guinea</li>
            <li value="Paraguay">Paraguay</li>
            <li value="Peru">Peru</li>
            <li value="Phillipines">Philippines</li>
            <li value="Pitcairn Island">Pitcairn Island</li>
            <li value="Poland">Poland</li>
            <li value="Portugal">Portugal</li>
            <li value="Puerto Rico">Puerto Rico</li>
            <li value="Qatar">Qatar</li>
            <li value="Republic of Montenegro">Republic of Montenegro</li>
            <li value="Republic of Serbia">Republic of Serbia</li>
            <li value="Reunion">Reunion</li>
            <li value="Romania">Romania</li>
            <li value="Russia">Russia</li>
            <li value="Rwanda">Rwanda</li>
            <li value="St Barthelemy">St Barthelemy</li>
            <li value="St Eustatius">St Eustatius</li>
            <li value="St Helena">St Helena</li>
            <li value="St Kitts-Nevis">St Kitts-Nevis</li>
            <li value="St Lucia">St Lucia</li>
            <li value="St Maarten">St Maarten</li>
            <li value="St Pierre & Miquelon">St Pierre & Miquelon</li>
            <li value="St Vincent & Grenadines">St Vincent & Grenadines</li>
            <li value="Saipan">Saipan</li>
            <li value="Samoa">Samoa</li>
            <li value="Samoa American">Samoa American</li>
            <li value="San Marino">San Marino</li>
            <li value="Sao Tome & Principe">Sao Tome & Principe</li>
            <li value="Saudi Arabia">Saudi Arabia</li>
            <li value="Senegal">Senegal</li>
            <li value="Seychelles">Seychelles</li>
            <li value="Sierra Leone">Sierra Leone</li>
            <li value="Singapore">Singapore</li>
            <li value="Slovakia">Slovakia</li>
            <li value="Slovenia">Slovenia</li>
            <li value="Solomon Islands">Solomon Islands</li>
            <li value="Somalia">Somalia</li>
            <li value="South Africa">South Africa</li>
            <li value="Spain">Spain</li>
            <li value="Sri Lanka">Sri Lanka</li>
            <li value="Sudan">Sudan</li>
            <li value="Suriname">Suriname</li>
            <li value="Swaziland">Swaziland</li>
            <li value="Sweden">Sweden</li>
            <li value="Switzerland">Switzerland</li>
            <li value="Syria">Syria</li>
            <li value="Tahiti">Tahiti</li>
            <li value="Taiwan">Taiwan</li>
            <li value="Tajikistan">Tajikistan</li>
            <li value="Tanzania">Tanzania</li>
            <li value="Thailand">Thailand</li>
            <li value="Togo">Togo</li>
            <li value="Tokelau">Tokelau</li>
            <li value="Tonga">Tonga</li>
            <li value="Trinidad & Tobago">Trinidad & Tobago</li>
            <li value="Tunisia">Tunisia</li>
            <li value="Turkey">Turkey</li>
            <li value="Turkmenistan">Turkmenistan</li>
            <li value="Turks & Caicos Is">Turks & Caicos Is</li>
            <li value="Tuvalu">Tuvalu</li>
            <li value="Uganda">Uganda</li>
            <li value="United Kingdom">United Kingdom</li>
            <li value="Ukraine">Ukraine</li>
            <li value="United Arab Erimates">United Arab Emirates</li>
            <li value="United States of America">United States of America</li>
            <li value="Uraguay">Uruguay</li>
            <li value="Uzbekistan">Uzbekistan</li>
            <li value="Vanuatu">Vanuatu</li>
            <li value="Vatican City State">Vatican City State</li>
            <li value="Venezuela">Venezuela</li>
            <li value="Vietnam">Vietnam</li>
            <li value="Virgin Islands (Brit)">Virgin Islands (Brit)</li>
            <li value="Virgin Islands (USA)">Virgin Islands (USA)</li>
            <li value="Wake Island">Wake Island</li>
            <li value="Wallis & Futana Is">Wallis & Futana Is</li>
            <li value="Yemen">Yemen</li>
            <li value="Zaire">Zaire</li>
            <li value="Zambia">Zambia</li>
            <li value="Zimbabwe">Zimbabwe</li>
          </ul>
        </div>
  </div>
  `,

  `<h3>billing details</h3>
  <label class="radio radio-before rad">
      <span class="radio__input rad">
      <input type="checkbox" name="radio" class="rad" id="checkbox">
      <span class="radio__control rad"></span>
      </span>
      <span class="radio__label rad">Same as shipping address</span>
  </label>
  <div class="form-input">
      <input type="text" placeholder="Full name" class="input part">
      <div class="phone-input input part">
          
          <input type="tel"  id="phone" name="phone">
      </div>
      <input type="text" placeholder="Address" class="input part">
      <div class="city">
          <input type="text" placeholder="City">
          <input type="text" placeholder="Zip Code">
      </div>
      <div class="country part">
          <input type="text" placeholder="Country">
          <img src="../img/drop-gray.png" alt="">
          <div class="country-container">
          <ul id="country" name="country">
            <li value="Afganistan">Afghanistan</li>
            <li value="Albania">Albania</li>
            <li value="Algeria">Algeria</li>
            <li value="American Samoa">American Samoa</li>
            <li value="Andorra">Andorra</li>
            <li value="Angola">Angola</li>
            <li value="Anguilla">Anguilla</li>
            <li value="Antigua & Barbuda">Antigua & Barbuda</li>
            <li value="Argentina">Argentina</li>
            <li value="Armenia">Armenia</li>
            <li value="Aruba">Aruba</li>
            <li value="Australia">Australia</li>
            <li value="Austria">Austria</li>
            <li value="Azerbaijan">Azerbaijan</li>
            <li value="Bahamas">Bahamas</li>
            <li value="Bahrain">Bahrain</li>
            <li value="Bangladesh">Bangladesh</li>
            <li value="Barbados">Barbados</li>
            <li value="Belarus">Belarus</li>
            <li value="Belgium">Belgium</li>
            <li value="Belize">Belize</li>
            <li value="Benin">Benin</li>
            <li value="Bermuda">Bermuda</li>
            <li value="Bhutan">Bhutan</li>
            <li value="Bolivia">Bolivia</li>
            <li value="Bonaire">Bonaire</li>
            <li value="Bosnia & Herzegovina">Bosnia & Herzegovina</li>
            <li value="Botswana">Botswana</li>
            <li value="Brazil">Brazil</li>
            <li value="British Indian Ocean Ter">British Indian Ocean Ter</li>
            <li value="Brunei">Brunei</li>
            <li value="Bulgaria">Bulgaria</li>
            <li value="Burkina Faso">Burkina Faso</li>
            <li value="Burundi">Burundi</li>
            <li value="Cambodia">Cambodia</li>
            <li value="Cameroon">Cameroon</li>
            <li value="Canada">Canada</li>
            <li value="Canary Islands">Canary Islands</li>
            <li value="Cape Verde">Cape Verde</li>
            <li value="Cayman Islands">Cayman Islands</li>
            <li value="Central African Republic">Central African Republic</li>
            <li value="Chad">Chad</li>
            <li value="Channel Islands">Channel Islands</li>
            <li value="Chile">Chile</li>
            <li value="China">China</li>
            <li value="Christmas Island">Christmas Island</li>
            <li value="Cocos Island">Cocos Island</li>
            <li value="Colombia">Colombia</li>
            <li value="Comoros">Comoros</li>
            <li value="Congo">Congo</li>
            <li value="Cook Islands">Cook Islands</li>
            <li value="Costa Rica">Costa Rica</li>
            <li value="Cote DIvoire">Cote DIvoire</li>
            <li value="Croatia">Croatia</li>
            <li value="Cuba">Cuba</li>
            <li value="Curaco">Curacao</li>
            <li value="Cyprus">Cyprus</li>
            <li value="Czech Republic">Czech Republic</li>
            <li value="Denmark">Denmark</li>
            <li value="Djibouti">Djibouti</li>
            <li value="Dominica">Dominica</li>
            <li value="Dominican Republic">Dominican Republic</li>
            <li value="East Timor">East Timor</li>
            <li value="Ecuador">Ecuador</li>
            <li value="Egypt">Egypt</li>
            <li value="El Salvador">El Salvador</li>
            <li value="Equatorial Guinea">Equatorial Guinea</li>
            <li value="Eritrea">Eritrea</li>
            <li value="Estonia">Estonia</li>
            <li value="Ethiopia">Ethiopia</li>
            <li value="Falkland Islands">Falkland Islands</li>
            <li value="Faroe Islands">Faroe Islands</li>
            <li value="Fiji">Fiji</li>
            <li value="Finland">Finland</li>
            <li value="France">France</li>
            <li value="French Guiana">French Guiana</li>
            <li value="French Polynesia">French Polynesia</li>
            <li value="French Southern Ter">French Southern Ter</li>
            <li value="Gabon">Gabon</li>
            <li value="Gambia">Gambia</li>
            <li value="Georgia">Georgia</li>
            <li value="Germany">Germany</li>
            <li value="Ghana">Ghana</li>
            <li value="Gibraltar">Gibraltar</li>
            <li value="Great Britain">Great Britain</li>
            <li value="Greece">Greece</li>
            <li value="Greenland">Greenland</li>
            <li value="Grenada">Grenada</li>
            <li value="Guadeloupe">Guadeloupe</li>
            <li value="Guam">Guam</li>
            <li value="Guatemala">Guatemala</li>
            <li value="Guinea">Guinea</li>
            <li value="Guyana">Guyana</li>
            <li value="Haiti">Haiti</li>
            <li value="Hawaii">Hawaii</li>
            <li value="Honduras">Honduras</li>
            <li value="Hong Kong">Hong Kong</li>
            <li value="Hungary">Hungary</li>
            <li value="Iceland">Iceland</li>
            <li value="Indonesia">Indonesia</li>
            <li value="India">India</li>
            <li value="Iran">Iran</li>
            <li value="Iraq">Iraq</li>
            <li value="Ireland">Ireland</li>
            <li value="Isle of Man">Isle of Man</li>
            <li value="Israel">Israel</li>
            <li value="Italy">Italy</li>
            <li value="Jamaica">Jamaica</li>
            <li value="Japan">Japan</li>
            <li value="Jordan">Jordan</li>
            <li value="Kazakhstan">Kazakhstan</li>
            <li value="Kenya">Kenya</li>
            <li value="Kiribati">Kiribati</li>
            <li value="Korea North">Korea North</li>
            <li value="Korea Sout">Korea South</li>
            <li value="Kuwait">Kuwait</li>
            <li value="Kyrgyzstan">Kyrgyzstan</li>
            <li value="Laos">Laos</li>
            <li value="Latvia">Latvia</li>
            <li value="Lebanon">Lebanon</li>
            <li value="Lesotho">Lesotho</li>
            <li value="Liberia">Liberia</li>
            <li value="Libya">Libya</li>
            <li value="Liechtenstein">Liechtenstein</li>
            <li value="Lithuania">Lithuania</li>
            <li value="Luxembourg">Luxembourg</li>
            <li value="Macau">Macau</li>
            <li value="Macedonia">Macedonia</li>
            <li value="Madagascar">Madagascar</li>
            <li value="Malaysia">Malaysia</li>
            <li value="Malawi">Malawi</li>
            <li value="Maldives">Maldives</li>
            <li value="Mali">Mali</li>
            <li value="Malta">Malta</li>
            <li value="Marshall Islands">Marshall Islands</li>
            <li value="Martinique">Martinique</li>
            <li value="Mauritania">Mauritania</li>
            <li value="Mauritius">Mauritius</li>
            <li value="Mayotte">Mayotte</li>
            <li value="Mexico">Mexico</li>
            <li value="Midway Islands">Midway Islands</li>
            <li value="Moldova">Moldova</li>
            <li value="Monaco">Monaco</li>
            <li value="Mongolia">Mongolia</li>
            <li value="Montserrat">Montserrat</li>
            <li value="Morocco">Morocco</li>
            <li value="Mozambique">Mozambique</li>
            <li value="Myanmar">Myanmar</li>
            <li value="Nambia">Nambia</li>
            <li value="Nauru">Nauru</li>
            <li value="Nepal">Nepal</li>
            <li value="Netherland Antilles">Netherland Antilles</li>
            <li value="Netherlands">Netherlands (Holland, Europe)</li>
            <li value="Nevis">Nevis</li>
            <li value="New Caledonia">New Caledonia</li>
            <li value="New Zealand">New Zealand</li>
            <li value="Nicaragua">Nicaragua</li>
            <li value="Niger">Niger</li>
            <li value="Nigeria">Nigeria</li>
            <li value="Niue">Niue</li>
            <li value="Norfolk Island">Norfolk Island</li>
            <li value="Norway">Norway</li>
            <li value="Oman">Oman</li>
            <li value="Pakistan">Pakistan</li>
            <li value="Palau Island">Palau Island</li>
            <li value="Palestine">Palestine</li>
            <li value="Panama">Panama</li>
            <li value="Papua New Guinea">Papua New Guinea</li>
            <li value="Paraguay">Paraguay</li>
            <li value="Peru">Peru</li>
            <li value="Phillipines">Philippines</li>
            <li value="Pitcairn Island">Pitcairn Island</li>
            <li value="Poland">Poland</li>
            <li value="Portugal">Portugal</li>
            <li value="Puerto Rico">Puerto Rico</li>
            <li value="Qatar">Qatar</li>
            <li value="Republic of Montenegro">Republic of Montenegro</li>
            <li value="Republic of Serbia">Republic of Serbia</li>
            <li value="Reunion">Reunion</li>
            <li value="Romania">Romania</li>
            <li value="Russia">Russia</li>
            <li value="Rwanda">Rwanda</li>
            <li value="St Barthelemy">St Barthelemy</li>
            <li value="St Eustatius">St Eustatius</li>
            <li value="St Helena">St Helena</li>
            <li value="St Kitts-Nevis">St Kitts-Nevis</li>
            <li value="St Lucia">St Lucia</li>
            <li value="St Maarten">St Maarten</li>
            <li value="St Pierre & Miquelon">St Pierre & Miquelon</li>
            <li value="St Vincent & Grenadines">St Vincent & Grenadines</li>
            <li value="Saipan">Saipan</li>
            <li value="Samoa">Samoa</li>
            <li value="Samoa American">Samoa American</li>
            <li value="San Marino">San Marino</li>
            <li value="Sao Tome & Principe">Sao Tome & Principe</li>
            <li value="Saudi Arabia">Saudi Arabia</li>
            <li value="Senegal">Senegal</li>
            <li value="Seychelles">Seychelles</li>
            <li value="Sierra Leone">Sierra Leone</li>
            <li value="Singapore">Singapore</li>
            <li value="Slovakia">Slovakia</li>
            <li value="Slovenia">Slovenia</li>
            <li value="Solomon Islands">Solomon Islands</li>
            <li value="Somalia">Somalia</li>
            <li value="South Africa">South Africa</li>
            <li value="Spain">Spain</li>
            <li value="Sri Lanka">Sri Lanka</li>
            <li value="Sudan">Sudan</li>
            <li value="Suriname">Suriname</li>
            <li value="Swaziland">Swaziland</li>
            <li value="Sweden">Sweden</li>
            <li value="Switzerland">Switzerland</li>
            <li value="Syria">Syria</li>
            <li value="Tahiti">Tahiti</li>
            <li value="Taiwan">Taiwan</li>
            <li value="Tajikistan">Tajikistan</li>
            <li value="Tanzania">Tanzania</li>
            <li value="Thailand">Thailand</li>
            <li value="Togo">Togo</li>
            <li value="Tokelau">Tokelau</li>
            <li value="Tonga">Tonga</li>
            <li value="Trinidad & Tobago">Trinidad & Tobago</li>
            <li value="Tunisia">Tunisia</li>
            <li value="Turkey">Turkey</li>
            <li value="Turkmenistan">Turkmenistan</li>
            <li value="Turks & Caicos Is">Turks & Caicos Is</li>
            <li value="Tuvalu">Tuvalu</li>
            <li value="Uganda">Uganda</li>
            <li value="United Kingdom">United Kingdom</li>
            <li value="Ukraine">Ukraine</li>
            <li value="United Arab Erimates">United Arab Emirates</li>
            <li value="United States of America">United States of America</li>
            <li value="Uraguay">Uruguay</li>
            <li value="Uzbekistan">Uzbekistan</li>
            <li value="Vanuatu">Vanuatu</li>
            <li value="Vatican City State">Vatican City State</li>
            <li value="Venezuela">Venezuela</li>
            <li value="Vietnam">Vietnam</li>
            <li value="Virgin Islands (Brit)">Virgin Islands (Brit)</li>
            <li value="Virgin Islands (USA)">Virgin Islands (USA)</li>
            <li value="Wake Island">Wake Island</li>
            <li value="Wallis & Futana Is">Wallis & Futana Is</li>
            <li value="Yemen">Yemen</li>
            <li value="Zaire">Zaire</li>
            <li value="Zambia">Zambia</li>
            <li value="Zimbabwe">Zimbabwe</li>
          </ul>
        </div>
      </div>
  </div>
  `,

  `<h3>billing details</h3>
  <div class="radio-input">
      <label class="radio radio-before pay">
          <span class="radio__input pay">
            <input type="radio" name="radio" value="credit" checked="checked" class="method pay">
            <span class="radio__control pay"></span>
          </span>
          <span class="radio__label pay">Credit Card</span>
      </label>
      <label class="radio radio-before pay">
          <span class="radio__input pay">
            <input type="radio" name="radio" value="paypal" class="method pay">
            <span class="radio__control pay"></span>
          </span>
          <span class="radio__label pay">Paypal</span>
      </label>
  </div>
  
  <div class="payment-form">
    <input type="text" class="input" placeholder="Card number">
  
    <div class="sub">
        <input type="text" placeholder="Expiry date">
        <input type="text" placeholder="CVV">
    </div>
    <div class="sub">
        <input type="text" placeholder="Country">
        <input type="text" placeholder="Zip code">
    </div>
  </div>
  `,
];

const step = document.querySelectorAll(".step");
const cartInfo = document.querySelector(".cart-info");
const contentContainer = document.querySelector(".content-container");
const delProductBtn = document.querySelectorAll(".del-btn");
const emptyAlert = document.querySelector(".cart-empty");
const totalPrice = document.querySelector(".total");
const editCart = document.querySelector(".edit-cart-btn");

//delete product section
delProductBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.remove();
    checkIfEmpty();
  });
});

//check if the product is empty or not
function checkIfEmpty() {
  let products = document.querySelectorAll(".product");
  if (products.length < 1) {
    emptyAlert.style.display = "block";
    totalPrice.style.display = "none";
    editCart.href = "subscription-plan.html";
    editCart.innerText = "SEE PRODUCTS";
  }
}

let currStep = 0;
contentContainer.innerHTML = contentArr[currStep];
telInput();
let continueBtn = document.querySelector(".continue-btn");

cartInfo.addEventListener("click", (e) => {
  if (e.target.classList.contains("rad")) {
    let check = document.getElementById("checkbox");
    let form = document.querySelector(".form-input");
    if (check.checked) {
      form.style.display = "none";
    } else {
      console.log("false");
      form.style.display = "block";
    }
  } else if (e.target.classList.contains("pay")) {
    let form = document.querySelector(".payment-form");
    let check = document.querySelectorAll(".method");
    check.forEach((input) => {
      if (input.checked) {
        if (input.value == "paypal") {
          form.style.display = "none";
          continueBtn.innerText = "continue with paypal";
          continueBtn.id = "paypal";
          console.log(continueBtn.id);
        } else {
          form.style.display = "block";
          continueBtn.innerText = "place order";
          continueBtn.id = "place-order";
        }
      }
    });
  }
});

continueBtn.addEventListener("click", changeContent);

step.forEach((e, index) => {
  e.addEventListener("click", () => {
    step.forEach((curr) => {
      curr.classList.remove("active");
    });
    e.classList.add("active");
    currStep = index;
    contentContainer.innerHTML = contentArr[index];
    if (index != 2) {
      continueBtn.innerText = "continue";
      continueBtn.id = "continue";
      console.log(continueBtn.id);
      telInput();
    } else {
      continueBtn.innerText = "place order";
      continueBtn.id = "place-order";
      console.log(continueBtn.id);
    }
  });
});

//change cart-info content based on step
function changeContent() {
  let lastStep = currStep;
  currStep++;
  if (continueBtn.id === "paypal" || continueBtn.id === "place-order") {
    return;
  }
  step[lastStep].classList.remove("active");
  step[currStep].classList.add("active");
  contentContainer.innerHTML = contentArr[currStep];

  if (currStep == 0 || currStep == 1) {
    continueBtn.id = "continue";
    continueBtn.innerText = "continue";
    telInput();
  }
  if (currStep == 2) {
    continueBtn.innerText = "place order";
    continueBtn.id = "place-order";
  }
}

//international telephone function from libs
function telInput() {
  var input = document.querySelector("#phone");
  window.intlTelInput(input, {
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "on",
    // dropdownContainer: document.body,
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // hiddenInput: "full_number",
    // initialCountry: "auto",
    // localizedCountries: { 'de': 'Deutschland' },
    // nationalMode: false,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
    separateDialCode: true,
    utilsScript: "../tel_input/build/js/utils.js",
  });

  setOutline();
  getCountryList();
}

function setOutline() {
  let phoneInputCont = document.querySelector(".phone-input");
  let telInput = document.querySelector("#phone");
  telInput.addEventListener("focus", () => {
    phoneInputCont.classList.toggle("active");
  });
  telInput.addEventListener("focusout", () => {
    phoneInputCont.classList.toggle("active");
  });
}

function getCountryList() {
  let container = document.querySelector(".country-container");
  let countryInput = document.querySelector(".country input");
  let countryList = document.querySelectorAll(".country-container ul li");
  countryInput.addEventListener("focus", () => {
    container.classList.add("active");
  });
  countryInput.addEventListener("focusout", () => {
    if (container.classList.contains("hovered")) {
      return;
    } else {
      container.classList.remove("active");
    }
  });

  container.addEventListener("mouseover", () => {
    container.classList.add("hovered");
  });
  container.addEventListener("mouseout", () => {
    container.classList.remove("hovered");
  });

  //get country by clicking the list
  countryList.forEach((list) => {
    list.addEventListener("click", () => {
      countryInput.value = list.innerText;
      container.classList.remove("hovered");
      container.classList.remove("active");
    });
  });

  //search by the input
  countryInput.addEventListener("keyup", () => {
    let filterValue = countryInput.value.toUpperCase();

    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].innerText.toUpperCase().indexOf(filterValue) > -1) {
        countryList[i].style.display = "";
      } else {
        countryList[i].style.display = "none";
      }
    }
  });
}
