<?php

declare(strict_types=1);

namespace App\DateTransferObjects;

use InvalidArgumentException;

readonly class SortParametersDto
{
    public const DIRECTION_ASC = 'asc';

    public const DIRECTION_DESC = 'desc';

    /**
     * @throws InvalidArgumentException
     */
    public function __construct(private string $sortField, private string $sortDirection = self::DIRECTION_ASC)
    {
        if (!$sortField) {
            throw new InvalidArgumentException('Sort field cannot be empty.');
        }
        if (!in_array($sortDirection, [self::DIRECTION_ASC, self::DIRECTION_DESC], true)) {
            throw new InvalidArgumentException("Invalid sort direction '{$sortDirection}'.");
        }
    }

    public function toArray(): array
    {
        return [
            'sortField' => $this->getSortField(),
            'sortDirection' => $this->getSortDirection(),
        ];
    }

    public function getSortField(): string
    {
        return $this->sortField;
    }

    public function getSortDirection(): string
    {
        return $this->sortDirection;
    }
}
