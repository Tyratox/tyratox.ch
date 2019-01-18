<?php
	
add_action('wp_enqueue_scripts', function(){
	wp_deregister_script('jquery');
	
	//Styles
	wp_enqueue_style(	'materialize-css',		get_template_directory_uri() . '/bower_components/materialize/dist/css/materialize.min.css'	);
	wp_enqueue_style(	'materialize-icons',	'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto+Condensed:400,700');
	wp_enqueue_style(	'social-icons',			get_template_directory_uri() . '/font/icomoon/style.css');
	wp_enqueue_style(	'tyratox-css',			get_template_directory_uri() . '/css/tyratox.css');
	
	//Scipts
	
	wp_enqueue_script(	'jquery', 				get_template_directory_uri() . '/bower_components/jquery/dist/jquery.min.js', array(), false, false );
	
	wp_enqueue_script(	'materialize-js', 		get_template_directory_uri() . '/bower_components/materialize/dist/js/materialize.min.js', array('jquery'), false, true );
	
	wp_enqueue_script(	'tyratox-js', 			get_template_directory_uri() . '/js/min/tyratox.min.js', array('jquery', 'materialize-js'), false, true );
});

add_action('admin_menu', function(){
	//remove_menu_page('edit.php');
	remove_menu_page('edit-comments.php');
});

add_action('init', function(){
	set_post_thumbnail_size( 1000, 250, true );
	
	register_nav_menus(
		array(
			'mobile-menu'		=> __( 'Mobile Menu', 'tyratox' )
		)
	);
	
	register_post_type('portfolio', array(
		'labels' => array(
			'name' => __('Portfolio', 'tyratox'),
			'singular_name' => __('Portfolio', 'tyratox')
		),
		'public' => true,
		'show_in_rest' => true,
		'has_archive' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-hammer',
		'hierarchical' => true,
		'supports' => array('title', 'thumbnail', 'editor')
	));
	
	register_post_type('collaborator', array(
		'labels' => array(
			'name' => __('Collaborators', 'tyratox'),
			'singular_name' => __('Collaborator', 'tyratox')
		),
		'public' => true,
		'show_in_rest' => true,
		'has_archive' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-id',
		'hierarchical' => true,
		'supports' => array('title')
	));
	
	register_post_type('license', array(
		'labels' => array(
			'name' => __('Licenses', 'tyratox'),
			'singular_name' => __('License', 'tyratox')
		),
		'public' => true,
		'show_in_rest' => true,
		'has_archive' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-media-text',
		'hierarchical' => true,
		'supports' => array('title')
	));
	
	register_taxonomy('programming-languages', array('portfolio'), array(
		'labels' => array(
			'name' => __('Programming Languages', 'tyratox'),
				'singular_name' => __('Programming Language', 'tyratox')
		),
		'public' => true,
		'show_in_rest' => true,
		'show_ui' => true,
		'show_in_nav_menus' => true,
		'show_tagcloud' => true
	));
});

add_action('after_setup_theme',	function(){
	add_theme_support('post-thumbnails');
	add_theme_support('html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption'));
});

add_action('admin_init', function(){
	/*add_editor_style(get_template_directory_uri() . '/bower_components/materialize/dist/css/materialize.min.css');
	add_editor_style('https://fonts.googleapis.com/icon?family=Material+Icons|Maven+Pro:400,500');
	add_editor_style(get_template_directory_uri() . '/css/tyratox.css');*/
});

add_action('admin_head', function(){
	echo '<style>svg, img[src*=".svg"] {max-width: 150px !important;max-height: 150px !important;height: auto !important; width: auto !important;}</style>';
});

add_filter('upload_mimes', function($mimes){
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
});

add_filter('show_admin_bar', function(){
	return false;
});

/* ACF */
if( function_exists('acf_add_options_page') ) {

	acf_add_options_sub_page(array(
        'title'			=> __("Theme Settings", "tyratox"),
        'parent'		=> 'themes.php',
        'capability'	=> 'manage_options'
    ));

}