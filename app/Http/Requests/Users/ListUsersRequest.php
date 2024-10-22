<?php

declare(strict_types=1);

namespace App\Http\Requests\Users;

use App\Enums\RoleEnum;
use App\Http\Requests\Traits\FilterSortAndPaginate;
use Illuminate\Foundation\Http\FormRequest;

class ListUsersRequest extends FormRequest
{
    use FilterSortAndPaginate;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->user()->hasRole([RoleEnum::ADMIN]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
}
