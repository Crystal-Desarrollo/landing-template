<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PaginationFilters;

use Illuminate\Database\Eloquent\Builder;

readonly class UserFilterDto implements EloquentFilter
{
    public function __construct(
        public ?string $query = null,
        public ?array $roles = null,
    ) {}

    public static function fromArray(?array $filters = []): self
    {
        return new self(
            query: $filters['query'] ?? null,
            roles: $filters['roles'] ?? null,
        );
    }

    public function apply(Builder $builder): Builder
    {
        $builder->when($this->query, fn ($query, $search) => $query->where('name', 'like', "%{$search}%"));
        $builder->when($this->roles, fn ($query, $roles) => $query->whereHas('roles', fn ($q) => $q->whereIn('name', $roles)));

        return $builder;
    }
}
