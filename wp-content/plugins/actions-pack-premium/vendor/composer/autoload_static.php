<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitc85c1969b2bb3f19f158105895efbfdc
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Actions_Pack\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Actions_Pack\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitc85c1969b2bb3f19f158105895efbfdc::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitc85c1969b2bb3f19f158105895efbfdc::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
