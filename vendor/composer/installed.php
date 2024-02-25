<?php return array(
    'root' => array(
        'name' => 'wpstorm/wpstorm-chat',
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'reference' => '5be4ff2a2b9eac07ed0de79d254d653d22b4bc70',
        'type' => 'wordpress-plugin',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'composer/installers' => array(
            'pretty_version' => 'v1.12.0',
            'version' => '1.12.0.0',
            'reference' => 'd20a64ed3c94748397ff5973488761b22f6d3f19',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'roundcube/plugin-installer' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'shama/baton' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'wpstorm/wpstorm-chat' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'reference' => '5be4ff2a2b9eac07ed0de79d254d653d22b4bc70',
            'type' => 'wordpress-plugin',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
