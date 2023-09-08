<?php
// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Wpstorm_Chat_Settings
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
        add_action('wp_enqueue_scripts', [$this, 'enqueue_chat_widget_script'], 99);

    }

    function enqueue_chat_widget_script() {
        wp_enqueue_script('wpstorm-chat-widget', WPSTORM_CHAT_URL . 'assets/js/chat-widget.js', array('jquery'), WPSTORM_CHAT_VERSION, true);
        wp_enqueue_script('wpstorm-chat-widget-app', WPSTORM_CHAT_URL . 'build/index.js', ['wpstorm-chat-widget', 'wp-element'], WPSTORM_CHAT_VERSION, true);
        wp_enqueue_style('wpstorm-chat-widget-app', WPSTORM_CHAT_URL . 'build/index.css', [], WPSTORM_CHAT_VERSION, 'all');
    }

}

Wpstorm_Chat_Settings::get_instance();