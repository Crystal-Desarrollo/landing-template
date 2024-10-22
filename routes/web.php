<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\ProfileController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home/home')->name('home');
Route::post('/contact-us', ContactUsController::class)->name('contact-us');

/* ---------- [ auth protected routes ] ----------  */
Route::group(['middleware' => 'auth', 'prefix' => 'admin'], function () {
    /* ---------- [ Profile ] ----------  */
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /* ---------- [ Dashboard ] ----------  */
    Route::inertia('/', 'admin/dashboard/dashboard')->name('dashboard');

    /* ---------- [ UsersList ] ----------  */
    Route::resource('users', UserController::class)->except(['show']);
});

require __DIR__ . '/auth.php';
