<?php

declare(strict_types=1);

use App\Http\Controllers\Auth\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/home');
})->name('home');

/* ---------- [ auth protected routes ] ----------  */
Route::group(['middleware' => 'auth', 'prefix' => 'admin'], function () {
    /* ---------- [ Profile ] ----------  */
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /* ---------- [ Dashboard ] ----------  */
    Route::inertia('/', 'admin/dashboard/dashboard')->name('admin.dashboard');
});

require __DIR__ . '/auth.php';
