<?php

declare(strict_types=1);

use App\Http\Requests\BaseRequest;
use Illuminate\Support\Facades\Route;

Route::get('/', function (BaseRequest $request) {
    return 'Home';
})->name('home');

require __DIR__.'/auth.php';
