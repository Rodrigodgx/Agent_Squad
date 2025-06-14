<?php
add_action( 'rest_api_init', function () {
  // Endpoint para listar notícias
  register_rest_route( 'custom/v1', '/news', array(
    'methods'  => 'GET',
    'callback' => 'get_news',
  ) );

  // Endpoint para listar modelos (com filtros)
  register_rest_route( 'custom/v1', '/models', array(
    'methods'  => 'GET',
    'callback' => 'get_models',
  ) );

  // Endpoint para detalhes de um modelo
  register_rest_route( 'custom/v1', '/models/(?P<id>\d+)', array(
    'methods'  => 'GET',
    'callback' => 'get_model_details',
  ) );
});

// Funções de callback para cada endpoint
function get_news( $request ) {
  // Lógica para buscar notícias do WordPress
  $posts = get_posts( array( 'category_name' => 'noticias', 'numberposts' => 10 ) );
  $data = array();
  foreach($posts as $post){
      $data[] = array(
          'title' => $post->post_title,
          'content' => $post->post_content,
          'date' => $post->post_date,
          'link' => get_permalink($post->ID)
      );
  }
  return $data;
}

function get_models( $request ) {
    // Lógica para buscar modelos do WordPress com filtros
    $marca = $request['marca']; // Exemplo de filtro por marca
    $posts = get_posts( array( 'category_name' => 'modelos', 'numberposts' => 10, 'tag' => $marca ) );
    $data = array();
    foreach($posts as $post){
        $data[] = array(
            'title' => $post->post_title,
            'content' => $post->post_content,
            'date' => $post->post_date,
            'link' => get_permalink($post->ID),
            'thumbnail' => get_the_post_thumbnail_url($post->ID, 'medium'),
            'ID' => $post->ID
        );
    }
    return $data;
}

function get_model_details( $request ) {
    $id = $request['id'];
    $post = get_post($id);
    return array(
        'title' => $post->post_title,
        'content' => $post->post_content,
        'date' => $post->post_date,
        'link' => get_permalink($post->ID),
        'thumbnail' => get_the_post_thumbnail_url($post->ID, 'large')
    );
}
?>