<?php

declare(strict_types=1);

namespace App\DateTransferObjects;

readonly class FilterSortPaginateDto
{
    public function __construct(
        public ?array $filters = null,
        public ?SortParametersDto $sort = null,
        public ?int $perPage = null,
    ) {}
}
