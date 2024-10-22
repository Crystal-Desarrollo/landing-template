<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\User;
use Exception;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @throws Exception
     */
    public function run(): void
    {
        if (!config('auth.admin_user.email') || !config('auth.admin_user.password')) {
            throw new Exception('Credenciales de administrador no configuradas');
        }

        $user = User::create([
            'name' => 'Crystal Desarrollo',
            'email' => config('auth.admin_user.email'),
            'password' => config('auth.admin_user.password'),
        ]);

        $user->addRole(RoleEnum::ADMIN);
    }
}
