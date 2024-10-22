<?php

declare(strict_types=1);

namespace App\Services;

use App\DataTransferObjects\PaginationFilters\ArticleFilterDto;
use App\DataTransferObjects\PaginationFilters\FilterSortPaginateDto;
use App\Models\Article;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ArticlesService
{
    public function listArticles(FilterSortPaginateDto $dto): LengthAwarePaginator
    {
        $builder = Article::query();

        ArticleFilterDto::fromArray($dto->filters)->apply($builder);

        return $builder->paginate($dto->perPage)->withQueryString();
    }
}
