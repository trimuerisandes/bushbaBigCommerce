<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Bushba_Coffee
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div class="wrapper">
	<?php if ( is_page_template( 'templates/template-home.php' ) ) : 
        get_template_part( 'components/header', 'home' ) ?>
	<?php elseif( is_page_template( 'templates/template-about.php' ) ): 
        get_template_part( 'components/header', 'about' ) ?>
	<?php elseif( is_page_template( 'templates/template-wholesale.php' ) ): 
        get_template_part( 'components/header', 'wholesale' ) ?>
	<?php elseif( is_page_template( 'templates/template-product.php' ) ): 
        get_template_part( 'components/header', 'product' ) ?>
	<?php else: 
        get_template_part( 'components/header', 'default' ) ?>
    <?php endif; ?>