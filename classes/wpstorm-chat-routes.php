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
     * @access private
     * @var object Class object.
     * @since 1.0.0
     */
    private static object $instance;

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
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    /**
     * Register the routes for the objects of the controller.
     */
    public function register_routes()
    {
        $version = '1';
        $namespace = 'wpstorm_chat/v' . $version;

        //Register collect_user_data rest route
        register_rest_route($namespace, '/' . 'users_data', [
            [
                'methods' => 'GET',
                'callback' => [$this, 'get_all_users_data'],
                'permission_callback' => [$this, 'admin_permissions_check'],
            ], [
                'methods' => 'POST',
                'callback' => [$this, 'collect_one_user_data'],
                'permission_callback' => [$this, 'user_permissions_check'],
            ],
        ]);
    }

    public function collect_one_user_data(WP_REST_Request $request)
    {
        $user_data = $request->get_json_params();

        if (!$this->user_data_exists($user_data)) {
            $inserted = $this->insert_user_data($user_data);

            if ($inserted) {
                return rest_ensure_response(array('message' => 'User data collected.'));
            } else {
                return new WP_Error(
                    'user_data_collection_error',
                    'Failed to collect and store user data.',
                    array('status' => 500)
                );
            }
        }

        return rest_ensure_response(array('message' => 'User data already exists.'));
    }

    private function user_data_exists($user_data): bool
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'wpstorm_chat_users';

        error_log(print_r($user_data['geolocation'], true));
        // Sanitize the data for comparison
        // Convert the geolocation array to JSON
        $geolocation_json = json_encode($user_data['geolocation']);
        $device_type = sanitize_text_field($user_data['deviceType']);
        $ip_address = sanitize_text_field($user_data['ipAddress']);

        // Define the query to check if user data exists
        $query = $wpdb->prepare(
            "SELECT COUNT(*) FROM $table_name WHERE
        geolocation = %s AND
        device_type = %s AND
        ip_address = %s",
            $geolocation_json,
            $device_type,
            $ip_address
        );

        // Execute the query
        $exists = $wpdb->get_var($query);

        if ($exists) {
            return true;
        } else {
            return false;
        }
    }

    private function insert_user_data($user_data)
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'wpstorm_chat_users';

        // Convert the geolocation array to JSON
        $geolocation_json = json_encode($user_data['geolocation']);

        // Sanitize and insert user data into the database
        // Implement your data insertion logic here

        return $wpdb->insert(
            $table_name,
            array(
                'user_name' => sanitize_text_field($user_data['user_name'] ?? 'Guest User'),
                'user_email' => sanitize_email($user_data['user_email'] ?? 'No Email Yet'),
                'user_phone' => sanitize_text_field($user_data['user_phone'] ?? 'No Phone Yet'),
                'geolocation' => $geolocation_json,
                'device_type' => sanitize_text_field($user_data['deviceType']),
                'user_agent' => sanitize_text_field($user_data['userAgent']),
                'ip_address' => sanitize_text_field($user_data['ipAddress']),
                'user_language' => sanitize_text_field($user_data['language']),
            )
        );
    }

    /**
     * Function to get all users data
     *
     * @param $request
     * @return WP_Error|WP_HTTP_Response|WP_REST_Response
     */

    public function get_all_users_data($request)
    {
        global $wpdb;

        $table_name = $wpdb->prefix . 'wpstorm_chat_users';

        $query = "SELECT * FROM $table_name";
        $results = $wpdb->get_results($query, ARRAY_A);

        return rest_ensure_response($results);
    }
    /**
     * Check if a given request has user permissions
     *
     * @return bool
     */
    public function user_permissions_check($request)
    {
        //return true; <--use to make readable by all
        return true;
    }

    /**
     * Check if a given request has admin permissions
     *
     * @return bool
     */
    public function admin_permissions_check($request)
    {
        //return true; <--use to make readable by all
        return current_user_can('manage_options');
    }
}

Wpstorm_Chat_Routes::get_instance();