<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bushba_Coffee
 */

?>
      <footer class="footer-page">
        <div class="footer-wrapper">
          <div class="company-logo">
            <img src="<?php echo get_template_directory_uri() ?>/img/logo.png" alt="" />
            <p>Copyright &copy; 2021 Busbha.com</p>
          </div>
          <div class="subscription section">
            <h2 class="header">Subscription</h2>
            <p>
              <a href="subscription.html">Detail</a>
            </p>
            <p>
              <a href="subscription-plan.html">Choose Plan</a>
            </p>
          </div>
          <div class="legal section">
            <h2>Legal</h2>
            <p>
              <a href="#">Term of Service</a>
            </p>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
          <div class="company section">
            <h2>Company</h2>
            <p>
              <a href="About-page.html">About</a>
            </p>
            <p>
              <a href="#">FAQ</a>
            </p>
            <p>
              <a href="">Contact</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
    <?php wp_footer(); ?>
	<script>/* 
	jQuery(document).ready(function(){
		jQuery("button.plus-btn").on('click',function(){
			var availableCount = jQuery(this).siblings("input.bc-cart-item__quantity-input.count-elm").attr("max");
			var catCount = jQuery(this).siblings("input.bc-cart-item__quantity-input.count-elm").val();
			console.log(availableCount);
			if(catCount < availableCount){
				var catCount1 = jQuery(this).siblings("input.bc-cart-item__quantity-input.count-elm").val();
				catCount1++;
				console.log("Current Cart Count = "+ catCount1);
				jQuery(this).siblings("input.bc-cart-item__quantity-input.count-elm").val(catCount1);
				jQuery(this).siblings("input.bc-cart-item__quantity-input.count-elm").attr("data-currentvalue", catCount1);
				console.log("Current Cart Count = "+ catCount1);
			}
			
		}); 
	}); */
	
	</script>

</body>
</html>
