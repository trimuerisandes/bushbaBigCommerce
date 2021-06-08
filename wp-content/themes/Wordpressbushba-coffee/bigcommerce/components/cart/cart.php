<?php
/**
 * Cart
 *
 * @package BigCommerce
 *
 * @var array  $cart
 * @var string $error_message The error message container
 * @var string $header        The cart table layout header
 * @var string $coupon_code   The cart table coupon code field
 * @var string $items         The cart items
 * @var string $footer        The cart table layout footer
 * @version 1.0.0
 */

?>
<!-- data-js="bc-cart" is required -->
<section class="bc-cart" data-js="bc-cart" data-cart_id="<?php echo esc_attr( $cart['cart_id'] ); ?>">
	<?php
	echo $error_message;
	echo $coupon_code;
	echo $header;
	echo ' <section class="products-section">
          <div class="product-list">';
	echo $items;
	echo '</div>';
	echo '       <div class="cart-info">
            <h3 class="total-title">Cart Total</h3>
            <div class="subtotal sub">
              <p>Subtotal</p>
              <p class="sub-total">$5</p>
            </div>
            <div class="tax sub">
              <p>Tax</p>
              <p class="total-tax">$10</p>
            </div>
            <div class="shipping sub">
              <p>Shipping</p>
              <p class="total-shipping">$20</p>
            </div>
            <div class="total sub">
              <p>Total</p>
              <p class="total-price">$200</p>
            </div>
            <div class="cart-empty">
              Whoops, You dont have any product or subscription plan to
              checkout, let shop now!
            </div>
            <button class="checkout-btn">checkout</button>

          </div>';
	echo '</section>';
	echo $footer;
	?>
</section>

