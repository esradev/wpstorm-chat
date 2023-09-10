<?php

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class Wpstorm_Chat_I18n.
 */
class Wpstorm_Chat_I18n {
    /**
     * Instance
     *
     * @access private
     * @var object Class object.
     * @since 1.0.0
     */
    private static $instance;

    /**
     * Initiator
     *
     * @return object Initialized object of class.
     * @since 1.0.0
     */
    public static function get_instance() {
        if ( ! isset( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Constructor
     */
    public function __construct() {
        add_action( 'plugins_loaded', [$this, 'load_plugin_textdomain'] );
    }

    /**
     * Load Wpstorm Chat Text Domain for translation..
     *
     * @since  1.0.0
     * @return void
     */

    public function load_plugin_textdomain()
    {
        // Default languages directory for Wpstorm Chat.
        $lang_dir = dirname(WPSTORM_CHAT_BASE) . '/languages';

        //Load Wpstorm Chat languages for PHP files.
        load_plugin_textdomain('wpstorm-chat', false, $lang_dir);
    }
}

Wpstorm_Chat_I18n::get_instance();

