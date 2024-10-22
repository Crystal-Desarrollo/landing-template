<?php

declare(strict_types=1);

namespace App\Services;

use App\DataTransferObjects\PaginationFilters\FilterSortPaginateDto;
use App\DataTransferObjects\PaginationFilters\UserFilterDto;
use App\Models\Role;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

class UsersServices
{
    public function listUsers(FilterSortPaginateDto $dto): LengthAwarePaginator
    {
        $filters = UserFilterDto::fromArray($dto->filters);

        $builder = User::query()->with(['roles']);
        $filters->apply($builder);

        return $builder->paginate($dto->perPage)->withQueryString();
    }

    public function getRoles(): Collection
    {
        return Role::query()->orderBy('display_name')->get();
    }
}
