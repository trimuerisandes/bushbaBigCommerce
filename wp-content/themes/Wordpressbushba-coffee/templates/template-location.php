<?php
/*
 * Template Name: Location page
 */
get_header();
?>
      <main class="main-page">
        <div class="content">
          <div class="title-page">
            <p>Visit the Bushba coffee shop</p>
            <h1>our location</h1>
          </div>

          <div class="img">
            <img src="<?php echo get_template_directory_uri() ?>/img/location-image.jpg" alt="">
          </div>

          <div class="location">
            <div class="text">
              <h2>
                Bushba coffee shop <br />
                coming soon near you
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultrices id amet dolor tempus vel id vivamus viverra nam. Turpis
                neque donec tincidunt lectus ut ultrices faucibus convallis
                malesuada.
              </p>
            </div>
          </div>
        </div>

        <section class="subscribe-footer-section">
          <h4 class="store-name">BUSBHA COFFEE</h4>
          <h1 class="title">SUBSCRIBE FOR YOUR FAVORITE COFFEE</h1>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id
            amet dolor tempus vel id vivamus viverra nam. Turpis neque donec
            tincidunt.
          </p>
          <a href="subscription.html" class="subscribe-btn">SUBSCRIBE NOW</a>
        </section>
      </main>
<?php
get_footer();