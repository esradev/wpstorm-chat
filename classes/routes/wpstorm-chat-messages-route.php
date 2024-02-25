<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
  exit;
}

class Wpstorm_Chat_Messages_Route extends Wpstorm_Chat_Routes
{

  /**
   * Instance
   *
   * @var object Class object.
   * @since 1.0.0
   */
  protected static $instance;

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
    parent::__construct(); // Call parent constructor
  }

  /**
   * Register the routes for the objects of the controller.
   */
  public function register_routes()
  {
    register_rest_route($this->namespace, '/messages', [
      [
        'methods' => 'POST',
        'callback' => [$this, 'create_message'],
        'permission_callback' => [$this, 'user_permissions_check'],
      ],
      [
        'methods' => 'GET',
        'callback' => [$this, 'get_messages'],
        'permission_callback' => [$this, 'user_permissions_check'],
      ],
      [
        'methods' => 'DELETE',
        'callback' => [$this, 'delete_message'],
        'permission_callback' => [$this, 'user_permissions_check'],
      ],
      [
        'methods' => 'PUT',
        'callback' => [$this, 'update_message'],
        'permission_callback' => [$this, 'user_permissions_check'],
      ]
    ]);
  }

  /**
   * Create a message
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function create_message($request)
  {
    return new WP_REST_Response('Create a message', 200);
  }

  /**
   * Get messages
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function get_messages($request)
  {
    return new WP_REST_Response('Get messages', 200);
  }

  /**
   * Delete a message
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function delete_message($request)
  {
    return new WP_REST_Response('Delete a message', 200);
  }

  /**
   * Update a message
   *
   * @param WP_REST_Request $request Full data about the request.
   * @return WP_Error|WP_REST_Response
   */
  public function update_message($request)
  {
    return new WP_REST_Response('Update a message', 200);
  }
}

Wpstorm_Chat_Messages_Route::get_instance();