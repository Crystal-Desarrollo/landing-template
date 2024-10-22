<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\Users\ListUsersRequest;
use App\Http\Requests\Users\StoreUserRequest;
use App\Http\Requests\Users\UpdateUserRequest;
use App\Models\User;
use App\Services\UsersServices;
use Illuminate\Support\Facades\Redirect;
use illuminate\Support\Str;
use Inertia\Inertia;

class UserController extends Controller
{
    public function __construct(private readonly UsersServices $usersServices) {}

    public function index(ListUsersRequest $request)
    {
        return Inertia::render('admin/users/users-list', [
            'users' => $this->usersServices->listUsers($request->getFilterSortPaginateDto()),
        ]);
    }

    public function create()
    {
        return Inertia::render('admin/users/create-user', [
            'roles' => $this->usersServices->getRoles(),
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Str::random(8),
            'roles' => $request->input('roles'),
        ]);

        return Redirect::route('users.index');
    }

    public function edit(User $user)
    {
        return Inertia::render('admin/users/create-user', [
            'roles' => $this->usersServices->getRoles(),
            'user' => $user->load('roles'),
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'roles' => $request->input('roles'),
        ]);

        $user->syncRoles($request->input('roles'));

        return Redirect::route('users.index');
    }

    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->back();
    }
}
