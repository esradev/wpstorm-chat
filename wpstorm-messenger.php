<?php
/*
* Plugin Name:       Wpstorm Chat
* Plugin URI:        https://wpstorm.ir/wpstorm-chat/
* Description:       Enhance your WordPress website with Wpstorm Chat, the ultimate chat-bot plugin from wpstorm. Wpstorm Chat is a powerful and versatile tool that brings interactive chat and intelligent automation to your website, helping you engage visitors, provide instant support, and boost user satisfaction.
* Version:           1.0.0
* Requires at least: 5.8
* Requires PHP:      7.4
* Author:            Wpstorm Genius
* Author URI:        https://wpstorm.ir/about/
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       wpstorm-chat
* Domain Path:       /languages
*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Wpstorm_Chat
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
        $this->define_constants();
        $this->wpstorm_chat_loader();

        add_action('activated_plugin', [$this, 'activation_redirect']);
    }

    /**
     * Defines all constants
     *
     * @since 1.0.0
     */
    public function define_constants()
    {

        /**
         * Defines all constants
         *
         * @since 1.0.0
         */
        define('WPSTORM_CHAT_VERSION', '1.0.1');
        define('WPSTORM_CHAT_FILE', __FILE__);
        define('WPSTORM_CHAT_PATH', plugin_dir_path(WPSTORM_CHAT_FILE));
        define('WPSTORM_CHAT_BASE', plugin_basename(WPSTORM_CHAT_FILE));
        define('WPSTORM_CHAT_SLUG', 'wpstorm_chat_settings');
        define('WPSTORM_CHAT_SETTINGS_LINK', admin_url('admin.php?page=' . WPSTORM_CHAT_SLUG));
        define('WPSTORM_CHAT_CLASSES_PATH', WPSTORM_CHAT_PATH . 'classes/');
        define('WPSTORM_CHAT_MODULES_PATH', WPSTORM_CHAT_PATH . 'modules/');
        define('WPSTORM_CHAT_URL', plugins_url('/', WPSTORM_CHAT_FILE));
        define('WPSTORM_CHAT_WEB_MAIN', 'https://wpstorm.com/');
        define('WPSTORM_CHAT_WEB_MAIN_DOC', WPSTORM_CHAT_WEB_MAIN . 'wpstorm-chat/');
    }

    /**
     * Require loader wpstorm class.
     *
     * @return void
     */
    public function wpstorm_chat_loader()
    {
        require WPSTORM_CHAT_CLASSES_PATH . 'wpstorm-chat-database.php';
        require WPSTORM_CHAT_CLASSES_PATH . 'wpstorm-chat-settings.php';
        require WPSTORM_CHAT_CLASSES_PATH . 'wpstorm-chat-i18n.php';
        require WPSTORM_CHAT_CLASSES_PATH . 'wpstorm-chat-options.php';
        require WPSTORM_CHAT_CLASSES_PATH . 'wpstorm-chat-routes.php';

        // Register activation hook.
        register_activation_hook(__FILE__, [Wpstorm_Chat_Database::get_instance(), 'activate']);
    }


    /**
     * Redirect user to plugin settings page after plugin activated.
     *
     * @return void
     */
    public function activation_redirect()
    {
        if (get_option('wpstorm_chat_do_activation_redirect', false)) {
            delete_option('wpstorm_chat_do_activation_redirect');
            exit(wp_redirect(WPSTORM_CHAT_SETTINGS_LINK));
        }
    }
}

Wpstorm_Chat::get_instance();