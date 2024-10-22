<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PaginationFilters;

use Illuminate\Database\Eloquent\Builder;

/**
 * @template Type
 */
interface EloquentFilter
{
    public static function fromArray(?array $filters = []): self;

    public function apply(Builder $builder): Builder;
}
