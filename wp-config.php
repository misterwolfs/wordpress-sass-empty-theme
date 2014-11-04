<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */


define('FS_METHOD', 'direct');


define('WP_ENV', 'development');

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db_name');

/** MySQL database username */
define('DB_USER', 'username');

/** MySQL database password */
define('DB_PASSWORD', 'password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');



define('WP_HOME', 'http://yoursite.com/');
define('WP_SITEURL', 'http://yoursite.com/');


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '1Bo|^4qmk.;|:)5g2]]P!P_S!7}9+fc0JXr@X_Y[*`Ck:,a6UvTaYD,^)UKgZUyd');
define('SECURE_AUTH_KEY',  '^w~te!eYX$kx*3rSSm1R;+>|_|rClH=k@4TW$P+yaEmR|].2|lor@!l2+,a9ukdJ');
define('LOGGED_IN_KEY',    'u 3T1-nD?ys5&*invanKeeD/#>mKN,f0`V8: g f/A%R1|Sz`Kv89S:+p*~+P?SJ');
define('NONCE_KEY',        '%bEVA&ta30ltkz[z.yLBim7|UT+6&q;ytq))JN(Mxxv-*06-PM ;val.ttX`QI-s');
define('AUTH_SALT',        'ek$FMv5A4[m$dfaT]lR*]EqY!&c!zKAB<~CY$4q-9)&Q74WD}/,^<}Tnp7=obHYC');
define('SECURE_AUTH_SALT', '[L7;%+amHwTM*FATe<=TF1]DnX+7^.vguL^xJ>hZHK[9nb8a<=(rEa5:)o[*pUa6');
define('LOGGED_IN_SALT',   '}X1^|}}WKyR?gB!dujH)hT=1Ic)|j.&#XLH95!?AM|o#F# KaS*ps{T[rbw!9+?F');
define('NONCE_SALT',       '3PP=M7UkAq5!}->JIc^e8}R}*a @NY+7}+->k|9L3PQxxulRFt|CZ$~]@~!7@8=G');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
