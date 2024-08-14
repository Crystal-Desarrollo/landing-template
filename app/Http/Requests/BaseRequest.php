<?php

declare(strict_types=1);

namespace App\Http\Requests;

use App\DTO\FilterSortPaginateDto;
use App\DTO\SortParametersDto;
use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{
    public function getFilterSortPaginateDto(): FilterSortPaginateDto
    {
        return new FilterSortPaginateDto(
            filters: $this->input('filters', []),
            sort: $this->getSortParams(),
            perPage: $this->integer('per_page'),
        );
    }

    protected function getBaseRules(): array
    {
        return array_merge(
            [
                'filters' => 'nullable|array',
                'filters.query' => 'nullable|string',
            ],
            $this->getPaginationRules(),
            $this->getSortInputRules(),
        );
    }

    protected function getSortInputRules(): array
    {
        return [
            'sort.field' => ['required_with:sort.direction'],
            'sort.direction' => ['required_with:sort.field', 'in:asc,desc'],
        ];
    }

    protected function getPaginationRules(): array
    {
        return [
            'page' => 'nullable|integer|min:1',
            'per_page' => 'nullable',
        ];
    }

    // ---------- [ Private Methods ] ----------
    private function getSortParams(): ?SortParametersDto
    {
        $sortField = $this->input('sort.field', $this->defaultSortField ?? null);
        $sortDirection = $this->input('sort.direction', $this->defaultSortDirection ?? null);

        return (!empty($sortField) && !empty($sortDirection))
            ? new SortParametersDto($sortField, $sortDirection)
            : null;
    }
}
