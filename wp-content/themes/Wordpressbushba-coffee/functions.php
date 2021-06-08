<?php
/**
 * Bushba Coffee functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Bushba_Coffee
 */

if ( ! defined( 'BUSHBA_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'BUSHBA_VERSION', '0.0.1' );
}

if ( ! function_exists( 'bushba_coffee_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function bushba_coffee_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Bushba Coffee, use a find and replace
		 * to change 'bushba-coffee' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'bushba-coffee', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'bushba-coffee' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'bushba_coffee_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'bushba_coffee_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function bushba_coffee_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'bushba_coffee_content_width', 640 );
}
add_action( 'after_setup_theme', 'bushba_coffee_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function bushba_coffee_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'bushba-coffee' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'bushba-coffee' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'bushba_coffee_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function bushba_coffee_scripts() {
	wp_enqueue_style( 'bushba-coffee-style', get_stylesheet_uri(), array(), BUSHBA_VERSION );
	wp_style_add_data( 'bushba-coffee-style', 'rtl', 'replace' );

	wp_enqueue_script( 'bushba-coffee-navigation', get_template_directory_uri() . '/js/navigation.js', array(), BUSHBA_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	/** Bushba Coffee Script */
	/** Header */
	if ( is_page_template( 'templates/template-home.php' )
			|| is_page_template( 'templates/template-about.php' )
			|| is_page_template( 'templates/template-wholesale.php' )
			|| is_page_template( 'templates/template-product.php' ) ) :
		wp_enqueue_script( 'bushba-coffee-navbar', get_template_directory_uri() . '/js/bushba-js/navbar.js', array(), BUSHBA_VERSION, true );
	else :
		wp_enqueue_script( 'bushba-coffee-navbar-white', get_template_directory_uri() . '/js/bushba-js/navbar-white.js', array(), BUSHBA_VERSION, true );
	endif;

	if ( is_page_template( 'templates/template-home.php' ) ) :
		wp_enqueue_style( 'bushba-coffee-home-style', get_template_directory_uri() . '/bushba-page/homepage.css', array(), BUSHBA_VERSION );
		wp_enqueue_script( 'bushba-coffee-home', get_template_directory_uri() . '/js/bushba-js/home.js', array(), BUSHBA_VERSION, true );
		
	elseif ( is_page_template( 'templates/template-about.php' ) ) :
		wp_enqueue_style( 'bushba-coffee-about-style', get_template_directory_uri() . '/bushba-page/aboutpage.css', array(), BUSHBA_VERSION );
		wp_enqueue_script( 'bushba-coffee-about', get_template_directory_uri() . '/js/bushba-js/aboutPage.js', array(), BUSHBA_VERSION, true );
		
	elseif ( is_page_template( 'templates/template-location.php' ) ) :
		wp_enqueue_style( 'bushba-coffee-location-style', get_template_directory_uri() . '/bushba-page/locationpage.css', array(), BUSHBA_VERSION );
		
	elseif ( is_page_template( 'templates/template-wholesale.php' ) ) :
		wp_enqueue_style( 'bushba-coffee-wholesale-style', get_template_directory_uri() . '/bushba-page/wholesalepage.css', array(), BUSHBA_VERSION );
		wp_enqueue_style( 'bushba-coffee-wholesale-style-utils', get_template_directory_uri() . '/tel_input/build/css/intlTelInput.css', array(), BUSHBA_VERSION );

		wp_enqueue_script( 'bushba-coffee-wholesale-utils', get_template_directory_uri() . '/tel_input/build/js/utils.js', array(), BUSHBA_VERSION, true );
		wp_enqueue_script( 'bushba-coffee-wholesale-intelInput', get_template_directory_uri() . '/tel_input/build/js/intlTelInput.js', array(), BUSHBA_VERSION, true );
		wp_enqueue_script( 'bushba-coffee-wholesale', get_template_directory_uri() . '/js/bushba-js/wholesale.js', array(), BUSHBA_VERSION, true );
	
	elseif ( is_page_template( 'templates/template-product.php' ) ) :
		wp_enqueue_style( 'bushba-coffee-wholesale-style', get_template_directory_uri() . '/bushba-page/productpage.css', array(), BUSHBA_VERSION );
		wp_enqueue_script( 'bushba-coffee-product', get_template_directory_uri() . '/js/bushba-js/productPage.js', array(), BUSHBA_VERSION, true );
	
	elseif ( is_page( 'cart' ) ) :
		wp_enqueue_style( 'bushba-cart-style', get_template_directory_uri() . '/cartPage.css', array(), BUSHBA_VERSION );
		//wp_enqueue_style( 'bushba-cart-style', get_template_directory_uri() . '/bushba-page/cartPage.css', array(), BUSHBA_VERSION );
	endif;

}
add_action( 'wp_enqueue_scripts', 'bushba_coffee_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Load WooCommerce compatibility file.
 */
if ( class_exists( 'WooCommerce' ) ) {
	require get_template_directory() . '/inc/woocommerce.php';
}
