<?php
/*
 * Template Name: About page
 */
get_header();
?>
        <main class="main-page">
            <section class="title-section">
                <h2 class="title">COFFEE PLANTATION</h2>
            </section>
    
            <section class="main-section">
                <article class="process-section">
                    <div class="img-process">
                        <img src="<?php echo get_template_directory_uri() ?>/img/garden.png" alt="" class="img">
                        <button class="play-btn">
                            <img src="<?php echo get_template_directory_uri() ?>/img/play-btn.png" alt="">
                        </button>
                    </div>
                    <div class="process-description">
    
                        <h2 class="process-name">DRY PROCESS</h2>
                       
                       
                        <div class="description-text">
                            <p>In the dry process, ripe cherries are first dried in the sun, after which the dried skin, pulp, and parchment are removed from the bean (seed).</p>
                            <br>
                            <p>The process takes about two weeks and the cherries must be raked while drying to avoid mildew. Dry processing produces coffees with less acidity and more body compared to the wet process.</p>
                        </div>
    
                    </div>
                </article>
    
    
                <article class="process-section">
                    <div class="img-process">
                        <img src="<?php echo get_template_directory_uri() ?>/img/technology.png" alt="" class="img">
                        <button class="play-btn">
                            <img src="<?php echo get_template_directory_uri() ?>/img/play-btn.png" alt="">
                        </button>
                    </div>
                    <div class="process-description">
    
                        <h2 class="process-name">ROASTED WITH ZERO-EMMISIONS</h2>
                       
                        
                        <div class="description-text">
                            <p>Have you ever wondered what traditional roasting does to our planet? At Bushba we care about our planet. Our roasting process uses same fundamental processes and techniques as traditional commercial coffee roasters.</p>
                            <br>
                            <p>The beans are held in a drum-shaped roasting chamber, exposed to heat, and tumbled constantly using a rotary agitator and roasted to perfection!. The difference is we use a Zero- Emissions Roaster to do the roasting. WE LOVE OUR PLANET!</p>
                        </div>
    
                    </div>
                </article>
    
    
                <article class="process-section">
                    <div class="img-process">
                        <img src="<?php echo get_template_directory_uri() ?>/img/saved.png" alt="" class="img">
                        
                    </div>
                    <div class="process-description">
    
                        <h2 class="process-name">Saved and cared for lovingly</h2>
                       
                       
                        <div class="description-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut ultrices faucibus convallis malesuada..</p>
                            <br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut ultrices faucibus convallis malesuada.</p>
                        </div>
    
                    </div>
                </article>
    
    
                <article class="process-section">
                    <div class="img-process">
                        <img src="<?php echo get_template_directory_uri() ?>/img/coffe-process.png" alt="" class="img">
                        
                    </div>
                    <div class="process-description">
    
                        <h2 class="process-name">Produces high quality coffee</h2>
                        
                        
                        <div class="description-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut ultrices faucibus convallis malesuada..</p>
                            <br>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices id amet dolor tempus vel id vivamus viverra nam. Turpis neque donec tincidunt lectus ut ultrices faucibus convallis malesuada.</p>
                        </div>
    
                    </div>
                </article>
            </section>
    
            <section class="coffee-pics">
                <div class="title">
                    <p>feel it now</p>
                    <h2>And it's your turn to feel the <br> pleasure of Bushba coffee<h2>
                        
                </div>
    
                <div class="images">
                    <div class="img">
                        <img src="<?php echo get_template_directory_uri() ?>/img/feel-it-now-01.jpg" alt="" >
                    </div>
                    <div class="img">
                        <img src="<?php echo get_template_directory_uri() ?>/img/feel-it-now-02.jpg" alt="" >
                    </div>
                    <div class="img">
                        <img src="<?php echo get_template_directory_uri() ?>/img/feel-it-now-03.jpg" alt="" >
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
    
    
            <div class="video-section">
                <img src="<?php echo get_template_directory_uri() ?>/img/close-2.png" alt="" class="close-video">
                <video controls src="<?php echo get_template_directory_uri() ?>/video/1.mp4" class="video"></video>

            </div>
            <div class="background"></div>
        </main>
<?php
get_footer();
