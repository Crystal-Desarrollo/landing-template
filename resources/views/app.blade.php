<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1">
    <title inertia>{{ config('app.name', '') }}</title>

    <meta
        name="description"
        content="16° Edición Del 11 al 20 de octubre de 2024 en la Ciudad Cultural. Organiza Cámara de Comercio Exterior de Jujuy.">
    <meta
        name="keywords"
        content="Camara de comercio exterior, CAMCOMEX, ExpoJuy, Norte argentino, Jujuy, Turismo, industria, negocios, artesanos, emprendedurismo">
    <meta name="author" content="Cámara de Comercio Exterior de Jujuy">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('/manifest.json') }}">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <!-- Sharing -->
    <meta property="og:title" content="Expojuy - 16° Edición">
    <meta
        property="og:description"
        content="Del 11 al 20 de octubre de 2024 en la Ciudad Cultural. Organiza Cámara de Comercio Exterior de Jujuy.">
    <meta property="og:image" content="{{asset('logo.png')}}">
    <meta property="og:url" content="https://expojuy.camcomexjujuy.com.ar">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Expojuy - 16° Edición">
    <meta
        name="twitter:description"
        content="Del 11 al 20 de octubre de 2024 en la Ciudad Cultural. Organiza Cámara de Comercio Exterior de Jujuy.">
    <meta name="twitter:image" content="{{asset('logo.png')}}">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased min-h-dvh">
    @inertia

    <script>
        const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
        const $body = document.querySelector('body');

        if (darkModeEnabled) {
            $body.classList.add('dark');
        } else {
            $body.classList.remove('dark');
        }
    </script>
</body>

</html>