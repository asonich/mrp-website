<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitf746eba839f955f4152933ee1a8572fe
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Psr\\Log\\' => 8,
        ),
        'C' => 
        array (
            'Clockwork\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Psr\\Log\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/log/Psr/Log',
        ),
        'Clockwork\\' => 
        array (
            0 => __DIR__ . '/..' . '/itsgoingd/clockwork/Clockwork',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitf746eba839f955f4152933ee1a8572fe::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitf746eba839f955f4152933ee1a8572fe::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitf746eba839f955f4152933ee1a8572fe::$classMap;

        }, null, ClassLoader::class);
    }
}