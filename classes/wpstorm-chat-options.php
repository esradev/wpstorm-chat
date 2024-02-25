<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Wpstorm_Chat_Options
{

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
    public static function get_instance()
    {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Constructor
     */
    public function __construct()
    {
        add_action('init', [$this, 'register_setting_options']);
    }

    /**
     * Register settings options.
     *
     * @return void
     * @since 2.0.0
     */
    public function register_setting_options()
    {
        $wpstorm_chat_setting_options = '';
        add_option('wpstorm_chat_settings_options', $wpstorm_chat_setting_options);
    }
}

Wpstorm_Chat_Options::get_instance();