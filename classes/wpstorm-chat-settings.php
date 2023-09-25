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

    private static $current_link;

    /**
     * Constructor
     */
    public function __construct()
    {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_script'], 99);
        add_action('admin_enqueue_scripts', [$this, 'admin_enqueue_scripts']);

        add_action('admin_menu', [$this, 'init_menu']);

        self::$current_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    }

    /**
     * Enqueue script
     * @return void
     */
    function enqueue_script()
    {
        wp_enqueue_script('wpstorm-chat-widget-init', WPSTORM_CHAT_URL . 'assets/js/chat-widget.js', array('jquery'), WPSTORM_CHAT_VERSION, true);
        wp_enqueue_script('wpstorm-chat-widget-app', WPSTORM_CHAT_URL . 'build/chat-widget/index.js', ['wpstorm-chat-widget-init', 'wp-element'], WPSTORM_CHAT_VERSION, true);
        wp_enqueue_style('wpstorm-chat-widget-app', WPSTORM_CHAT_URL . 'build/chat-widget/index.css', [], WPSTORM_CHAT_VERSION, 'all');


        /**
         * Add a localization object ,The base rest api url and a security nonce
         * @see https://since1979.dev/snippet-014-setup-axios-for-the-wordpress-rest-api/
         */
        wp_localize_script(
            'wpstorm-chat-widget-app',
            'wpstormChatJsObject',
            [
                'rootapiurl' => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest'),
                'settingsUrl' => WPSTORM_CHAT_SETTINGS_LINK,
            ]
        );
    }

    /**
     * Enqueue admin scripts
     *
     * @return void
     */
    public function admin_enqueue_scripts()
    {

        wp_enqueue_style('wpstorm-chat-admin-style', WPSTORM_CHAT_URL . 'build/admin-page/index.css', [], WPSTORM_CHAT_VERSION, 'all');

        wp_enqueue_script(
            'wpstorm-chat-admin-script',
            WPSTORM_CHAT_URL . 'build/admin-page/index.js',
            [
                'wp-element',
                'wp-i18n',
            ],
            WPSTORM_CHAT_VERSION,
            true
        );

        wp_localize_script(
            'wpstorm-chat-admin-script',
            'wpstormChatJsObject',
            [
                'rootapiurl' => esc_url_raw(rest_url()),
                'nonce' => wp_create_nonce('wp_rest'),
                'settingsUrl' => WPSTORM_CHAT_SETTINGS_LINK,
            ]
        );

        // Load Farazsms languages for JavaScript files.
        wp_set_script_translations('wpstorm-chat-admin-script', 'farazsms', WPSTORM_CHAT_PATH . '/languages');
    }

    /**
     * Add Admin Menu.
     *
     * @return void
     */
    public function init_menu()
    {
        add_menu_page(
            __('Wpstorm Chat', 'wpstorm-chat'),
            __('Wpstorm Chat', 'wpstorm-chat'),
            'manage_options',
            WPSTORM_CHAT_SLUG,
            [
                $this,
                'admin_page',
            ],
            'dashicons-format-chat',
            100
        );
        add_submenu_page(
            WPSTORM_CHAT_SLUG,
            __('Wpstorm Chat', 'wpstorm-chat'),
            __('Settings', 'wpstorm-chat'),
            'manage_options',
            WPSTORM_CHAT_SLUG,
            [
                $this,
                'admin_page',
            ]
        );
    }

    /**
     * Init Admin Page.
     *
     * @return void
     */
    public function admin_page()
    {
        ?>
        <div class="wrap">
            <div id="wpstorm-chat-settings-dashboard" class="wpstorm-chat-tailwind-class"></div>
        </div>
        <?php
    }

}

Wpstorm_Chat_Settings::get_instance();