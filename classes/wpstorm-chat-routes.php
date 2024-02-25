<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Wpstorm_Chat_Routes
{
    /**
     * Instance
     *
     * @var object Class object.
     * @since 1.0.0
     */
    protected static $instance;

    /**
     * Version of the API
     * 
     * @var string
     */
    protected $version = '1';

    /**
     * Namespace for the API
     * 
     * @var string
     */
    protected $namespace;

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
        $this->namespace = 'wpstorm_chat/v' . $this->version;
        require_once plugin_dir_path(__DIR__) . 'classes/routes/wpstorm-chat-messages-route.php';
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * Register the routes for the objects of the controller.
     */
    public function register_routes()
    {
        // This method should be overridden in child class
    }

    /**
     * Check if a given request has user permissions
     *
     * @return bool
     */
    public function user_permissions_check($request)
    {
        return true;
    }

    /**
     * Check if a given request has admin permissions
     *
     * @return bool
     */
    public function admin_permissions_check($request)
    {
        return current_user_can('manage_options');
    }
}

Wpstorm_Chat_Routes::get_instance();