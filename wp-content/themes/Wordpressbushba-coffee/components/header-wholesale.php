<header class="header-page">
        <div class="nav-wrapper">
          <nav class="navbar">
            <div class="nav-list-wrapper">
              <ul class="nav-list">
                <li class="logo-1">
                  <a href="<?php _e( site_url() ) ?>">
                    <img src="<?php echo get_template_directory_uri() ?>/img/logo.png" alt="" />
                  </a>
                </li>
                        <li class="menu-container">
                                <ul class="menu-list">
                                    
                                    <li class="shop dropdown">
                                        <div class="container-text">
                                            <p>SHOP</p>
                                            <span>
                                                <img src="<?php echo get_template_directory_uri() ?>/img/drop.png" alt="">
                                            </span>
                                        </div>


                                        <ul>
                                            <li> 
                                                <a href="<?php _e( site_url( 'coffee' ) ) ?>">coffee</a>
                                            </li>
                                            <li>
                          <a href="<?php _e( site_url( 'wholesale' ) ) ?>">wholesale</a>
                        </li>
                                            
                                        </ul>

                                    </li>
                                    <li>
                                        <a href="<?php _e( site_url( 'about' ) ) ?>">ABOUT</a>
                                    </li>
                                    
                                    <li>
                                        <a href="<?php _e( site_url( 'location' ) ) ?>">LOCATION</a>
                                    </li>
                                    <li class="account dropdown">
                                        <div class="container-text">
                                            <p>ACCOUNT</p>
                                            <span>
                                                <img src="<?php echo get_template_directory_uri() ?>/img/drop.png" alt="">
                                            </span>
                                        </div>


                                        <ul>
                                            <li>
                                                <a href="manage-subscription.html">my subscription</a>
                                            </li>
                                            <li>
                                                <a href="account.html">my profile information</a>
                                            </li>
                                            <li>
                          <a href="">logout</a>
                        </li>
                                        </ul>
                                    </li>
                                    <li class="cart-dekstop">
                                        <a href="./cartPage.html"
                        >MY CART<span class="cart-count"
                          >(<span class="number">0</span>)</span
                        ></a
                      >
                                    </li>
                                </ul>
                            </li>
                            <li class="search-li">
                                <div class="search">
                                    <input type="text" placeholder="Search Bushba" class="search-input">
                                    <div class="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="11.7666" cy="11.7666" r="8.98856" stroke="#262C35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M18.0183 18.4851L21.5423 22" stroke="#262C35" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </div>
                                </div>
                            </li>
                            <li class="login-btn">
                                <button>LOG OUT</button>
                            </li>
              </ul>
            </div>

            <div class="mob-ver">
              <ul class="nav-mob-wrapper">
                <li class="hamburger">
                  <img src="<?php echo get_template_directory_uri() ?>/img/hamburger.png" alt="" />
                </li>
                <li class="logo">
                  <a href="index.html">
                    <img src="<?php echo get_template_directory_uri() ?>/img/logo-black.png" alt="" />
                  </a>
                </li>
                <li class="cart-icon">
                  <a href="cartPage.html">
                    <img src="<?php echo get_template_directory_uri() ?>/img/Cart.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="main-text">
          <h1 class="main-title">
            WHOLE SALE <br />
            COFFE BEANS
          </h1>
          <p class="description">
            We buy raw beans directly from the family farmer
          </p>
          <a href="#inquiry" class="shop-btn">START WHOLESALE </a>
        </div>
      </header>