<?php

namespace Actions_Pack\Dynamic_Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;


Class Image_Meta extends Data_Tag {

    public function get_name() {
        return 'ap_image_meta';
    }

    public function get_title() {
        return __( 'Image Meta', 'actions-pack' );
    }

    public function get_group() {
        return [ Module::AUTHOR_GROUP ];
    }

    public function get_categories() {
        return [ Module::IMAGE_CATEGORY ];
    }

    public function register_controls() {
        $this->add_control(
            'key',
            [
                'label' => __( 'Meta Key', 'actions-pack' ),
            ]
        );
    }

    public function get_panel_template_setting_key() {
        return 'key';
    }

    public function get_panel_template() {
        return ' ({{{ key }}})';
    }

    public function get_value( array $options = [] ){


        if ( is_author() ) {
            $key = $this->get_settings( 'key' );
            if( !empty($key)){
                $url = get_user_meta( get_queried_object_id(), $key, true );
            }else{
                $url = \Elementor\Utils::get_placeholder_image_src();
            }
        }else{
            $url = \Elementor\Utils::get_placeholder_image_src();
        }

        return [
            'id' => '',
            'url' => $url,
        ];
    }
}