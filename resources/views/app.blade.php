<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', '') }}</title>

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
