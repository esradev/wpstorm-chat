<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Wpstorm_Chat_Database
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

    private $database_version;
    private $chat_rooms_table;
    private $chat_participants_table;
    private $chat_messages_table;
    private $users_table;

    public function __construct()
    {
        global $wpdb;
        $this->database_version = '1.0';

        // Define table names.
        $this->chat_rooms_table = $wpdb->prefix . 'wpstorm_chat_rooms';
        $this->chat_participants_table = $wpdb->prefix . 'wpstorm_chat_participants';
        $this->chat_messages_table = $wpdb->prefix . 'wpstorm_chat_messages';
        $this->users_table = $wpdb->prefix . 'wpstorm_chat_users';
    }

    public function activate()
    {
        $this->create_chat_tables();
        add_option('wpstorm_chat_database_version', $this->database_version);
    }

    public function create_chat_tables()
    {
        error_log('DB Created!');
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $this->users_table (
            user_id INT AUTO_INCREMENT PRIMARY KEY,
            user_name VARCHAR(255) NOT NULL,
            user_email VARCHAR(255) NOT NULL,
            user_phone VARCHAR(255) NOT NULL
        ) $charset_collate;";

        // SQL statement to create the chat rooms table.
        $sql .= "CREATE TABLE $this->chat_rooms_table (
            room_id INT AUTO_INCREMENT PRIMARY KEY,
            room_name VARCHAR(255) NOT NULL,
            created_by INT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (created_by) REFERENCES $this->users_table(user_id)
        ) $charset_collate;";

        // SQL statement to create the chat participants table.
        $sql .= "CREATE TABLE $this->chat_participants_table (
            participant_id INT AUTO_INCREMENT PRIMARY KEY,
            room_id INT NOT NULL,
            user_id INT NOT NULL,
            joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (room_id) REFERENCES $this->chat_rooms_table(room_id),
            FOREIGN KEY (user_id) REFERENCES $this->users_table(user_id)
        ) $charset_collate;";

        // SQL statement to create the chat messages table.
        $sql .= "CREATE TABLE $this->chat_messages_table (
            message_id INT AUTO_INCREMENT PRIMARY KEY,
            room_id INT NOT NULL,
            user_id INT NOT NULL,
            message_content TEXT NOT NULL,
            attachment_path VARCHAR(255),
            read_status BOOLEAN DEFAULT FALSE,
            timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (room_id) REFERENCES $this->chat_rooms_table(room_id),
            FOREIGN KEY (user_id) REFERENCES $this->users_table(user_id)
        ) $charset_collate;";

        // Execute the SQL statements.
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);

        // This option added for redirect after activation
        add_option('wpstorm_chat_do_activation_redirect', true);

    }

}

Wpstorm_Chat_Database::get_instance();