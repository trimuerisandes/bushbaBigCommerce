<?php
/*
 * Template Name: Wholesale page
 */
get_header();
?>
      <main class="main-page">
        <section class="title-section">
          <h2 class="title">wholesale</h2>
        </section>

        <section class="main-section">
          <article class="product-section">
            <img src="<?php echo get_template_directory_uri() ?>/img/wholesale_2.png" alt="" class="img-product" />
            <div class="product-description">
              <h2 class="product-name">
                Supplying 100% Fair Trade, Arabica Single Origin Specialty
                Coffee
              </h2>

              <div class="description-text">
                <p>
                  Located in Austin Texas, Bushba Coffee Roasters supplies
                  coffee houses, natural foods markets, co-ops, restaurants,
                  fundraising groups, and other organizations across the country
                  with some of the best specialty-grade coffee directly sourced
                  from family owned farms. All of our coffee is Sustainable
                  Shade Grown Direct Trade, organic 100% Arabica Coffee.
                </p>
              </div>
            </div>
          </article>

          <article class="product-section">
            <img src="<?php echo get_template_directory_uri() ?>/img/wholesale_3.png" alt="" class="img-product" />
            <div class="product-description">
              <h2 class="product-name">
                Enterprise Whole Sale Coffee Ordering
              </h2>

              <div class="description-text">
                <p>
                  Our minimum order is only 10 pounds, and order turnaround time
                  is a maximum of 24 hours, so you always receive freshly
                  roasted coffee. Orders placed before 9am Central Time Monday
                  through Friday are roasted and shipped the same day! We also
                  sell every one of our coffees in unroasted from- ideal for
                  full micro roasting operations.
                </p>
              </div>
            </div>
          </article>

          <article class="inquiry-form" id="inquiry">
            <div class="inquiry-title">
              <h2>Wholesale Coffee Inquiry Form</h2>
              <p>
                Thank you for contacting Bushba Coffee Roasters! We would love
                to learn more about your business, and your coffee passion
                needs. Please answer the following questions so we may follow up
                with you ASAP.
              </p>
            </div>

            <form action="" class="form">
              <div class="input">
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="Contact name" />
              </div>
              <div class="input">
                <input type="text" id="phone" />
                <input type="email" placeholder="Email address" />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Company address"
              ></textarea>
              <div class="years-input">
                <h4>How many years in business?</h4>
                <div class="radios">
                  <label class="radio-container">
                    Not yet
                    <input type="radio" name="year-input" />
                    <span class="fake-radio"></span>
                  </label>
                  <label class="radio-container">
                    New - Less than 1 year
                    <input type="radio" name="year-input" />
                    <span class="fake-radio"></span>
                  </label>
                  <label class="radio-container">
                    1-3 years
                    <input type="radio" name="year-input" />
                    <span class="fake-radio"></span>
                  </label>
                  <label class="radio-container">
                    More than 3 years
                    <input type="radio" name="year-input" />
                    <span class="fake-radio"></span>
                  </label>
                </div>
              </div>
              <div class="input">
                <div class="business-type part">
                  <input type="text" placeholder="Type of Business" />
                  <img src="<?php echo get_template_directory_uri() ?>/img/drop-gray.png" alt="" />
                  <div class="list-container">
                    <ul>
                      <li>Bakery/Donut shop</li>
                      <li>Cafe</li>
                      <li>Coffeehouse</li>
                      <li>Convenience store</li>
                      <li>Church</li>
                      <li>Farmers Market</li>

                      <li>Grocery</li>
                      <li>Hotel</li>
                      <li>Office</li>
                      <li>Restaurant</li>
                      <li>Other</li>
                    </ul>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="How did you hear about Cafe Campesino?"
                />
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Anything else you'd like us to know? (optional)"
              ></textarea>

              <div class="btn">
                <button class="submit-btn btn-2">SUBMIT</button>
              </div>
            </form>
          </article>
        </section>
      </main>
<?php
get_footer();