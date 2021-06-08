<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'VnXVzAj3' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'T(cDHI.5 ;BstzcxYvW|pyH>3x-xw_].s`j`<ythP$KQgNCuERcSDRfZ;;qLjTSM' );
define( 'SECURE_AUTH_KEY',   'A;e`>lbhsKLw*sQ#jV)P?1i{NUzS$%h*@4@K_HQ9K]z;.,{*so(jcX?5AXkO5Y_e' );
define( 'LOGGED_IN_KEY',     '^%@AG`sTc(U3<ozNXd?e.;]K>>zVwfL6t:AN7<yS1bNR@)h&@,ua;a4Y+}WbV-/x' );
define( 'NONCE_KEY',         ',wD)aogi$$2W5[G,@s.AA:EuX5]]F6TnEYka:1R0DKuJ8u5rB;B((U6gkmmQ&,^1' );
define( 'AUTH_SALT',         '=eTLl=i%]#ed}fbEVBj&rlg&W@gP}Fotd=dH&3)9/EZcV{dJV<k_di:>!-[bw(3?' );
define( 'SECURE_AUTH_SALT',  '->9M_;{-T{i.~$&UD&XgTk!yp09)BT<qz-7s7K7wS=/KuQ/J_v *Lq+J~fAm 7JN' );
define( 'LOGGED_IN_SALT',    '26=%?@:+}dhYki@6_)]a)B$]^d0|Sngd@|q<kM%,+iSy0~&/C8+KNfEIbT=0p$yL' );
define( 'NONCE_SALT',        'lgw*uJf(Ov|*X0s.,_=Op_$UGqIcnKLXovQKEOJX;P:erelNkE!-+Vy(>~ nXUS]' );
define( 'WP_CACHE_KEY_SALT', 'uv Ckk> o^?*4uK#D8JB:e0.fu!jzurpOBGPXO5jO>-<s5kCMu&MS_Ucb%SDdJ7e' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


define('WP_ALLOW_MULTISITE', true);

define('WP_HOME','http://bushba.com');
define('WP_SITEURL','http://bushba.com');

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
