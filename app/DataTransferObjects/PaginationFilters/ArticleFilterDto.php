<?php

declare(strict_types=1);

namespace App\DataTransferObjects\PaginationFilters;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

readonly class ArticleFilterDto implements EloquentFilter
{
    public function __construct(
        public ?string $query = null,
        public ?Carbon $dateFrom = null,
        public ?Carbon $dateTo = null,
        public ?array $authors = null,
    ) {}

    public static function fromArray(?array $filters = []): self
    {
        return new self(
            query: $filters['query'] ?? null,
            dateFrom: isset($filters['dateFrom']) ? Carbon::parse($filters['dateFrom']) : null,
            dateTo: isset($filters['dateTo']) ? Carbon::parse($filters['dateTo']) : null,
            authors: $filters['authors'] ?? null,
        );
    }

    public function apply(Builder $builder): Builder
    {
        $builder->when($this->query, fn ($query, $search) => $query->where('title', 'like', "%{$search}%"));
        $builder->when($this->dateFrom, fn ($query, $dateFrom) => $query->whereDate('created_at', '>=', $dateFrom));
        $builder->when($this->dateTo, fn ($query, $dateTo) => $query->whereDate('created_at', '<=', $dateTo));

        return $builder;
    }
}
