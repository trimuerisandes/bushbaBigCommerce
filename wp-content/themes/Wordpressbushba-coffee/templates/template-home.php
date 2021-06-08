<?php
/*
 * Template Name: Homepage
 */
get_header();
?>
<main class="main-page">
    <section class="products-section">
        <div class="title">
            <h2>OUR PRODUCTS</h2>
        </div>
        <div class="product-list">
            <a href="products/blue-bourbon-coffee/" class="product">
                <img src="<?php echo get_template_directory_uri() ?>/img/productWhite.png" alt="" class="img">
                <div class="info">
                    <h3>Blue Burbon Coffe</h3>
                    <p>Lorem ipsum dolor sit amet, azin consectetur adipiscing elit. </p>
                </div>
            </a>
            <a href="Product-page.html" class="product">
                <img src="<?php echo get_template_directory_uri() ?>/img/productBlack.png" alt="" class="img">
                <div class="info">
                    <h3>Product name</h3>
                    <p>Lorem ipsum dolor sit amet, azin consectetur adipiscing elit. </p>
                </div>
            </a>
            <a href="Product-page.html" class="product">
                <img src="<?php echo get_template_directory_uri() ?>/img/productWhite.png" alt="" class="img">
                <div class="info">
                    <h3>Product name</h3>
                    <p>Lorem ipsum dolor sit amet, azin consectetur adipiscing elit. </p>
                </div>
            </a>
            <a href="Product-page.html" class="product">
                <img src="<?php echo get_template_directory_uri() ?>/img/productBlack.png" alt="" class="img">
                <div class="info">
                    <h3>Product name</h3>
                    <p>Lorem ipsum dolor sit amet, azin consectetur adipiscing elit. </p>
                </div>
            </a>
        </div>
    </section>
    <section class="about-section">
        <div class="about-wrapper">
            <div class="text">
                <h1 class="main-title">about us</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet
                    dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut ultrices
                    faucibus convallis malesuada.</p>
                <a href="About-page.html" class="read-btn">READ MORE</a>
            </div>
        </div>
    </section>
    <section class="testimonial">
        <div class="title">
            <h2>TESTIMONIAL</h2>
        </div>
        <div class="wrapper-testi">
            <button class="next-btn" id="nextBtn">
                <img src="<?php echo get_template_directory_uri() ?>/img/right-arrow.png" alt="">
            </button>
            <button class="prev-btn">
                <img src="<?php echo get_template_directory_uri() ?>/img/right-arrow.png" alt="" id="prevBtn">
            </button>
            <div class="container">
                <div class="content">

                    <div class="testi">
                        <img src="<?php echo get_template_directory_uri() ?>/img/testi.png" alt="">
                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id
                            amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut
                            ultrices faucibus convallis malesuada.</p>
                        <p class="name">John Watson</p>
                    </div>
                    <div class="testi">
                        <img src="<?php echo get_template_directory_uri() ?>/img/testi.png" alt="">
                        <p class="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id
                            amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut
                            ultrices faucibus convallis malesuada.</p>
                        <p class="name">John Watson</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="subscribe-footer-section">
        <h4 class="store-name">BUSBHA COFFEE</h4>
        <h1 class="title">SUBSCRIBE FOR YOUR FAVORITE COFFEE</h1>
        <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet dolor
            tempus vel id vivamus viverra nam. Turpis neque donec tincidunt.</p>
        <a href="subscription.html" class="subscribe-btn">SUBSCRIBE NOW</a>
    </section>
</main>
<?php
get_footer();
