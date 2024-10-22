<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\ContactUsRequest;
use App\Notifications\ContactUsNotification;
use Illuminate\Support\Facades\Notification;
use Log;

class ContactUsController extends Controller
{
    public function __invoke(ContactUsRequest $request)
    {
        try {
            Notification::route('mail', '')
                ->notify(
                    new ContactUsNotification(
                        $request->validated('name'),
                        $request->validated('email'),
                        $request->validated('message')
                    )
                );

            return back();
        } catch (\Throwable $th) {
            Log::error('Error sending Contact Us email', ['exception' => $th->getMessage()]);

            return redirect()->back()->withErrors(['contactUs' => 'Lo sentimos, se produjo un error inesperado. Intente nuevamente más tarde.']);
        }
    }
}
