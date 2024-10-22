<?php

declare(strict_types=1);

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactUsNotification extends Notification
{
    use Queueable;

    public function __construct(public readonly string $name, public readonly string $email, public readonly string $message) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Nueva consulta')
            ->greeting('Se recibio una nueva consulta en el sitio web de: ' . config('app.name'))
            ->line('Nombre: ' . $this->name)
            ->line('Del correo electronico: ' . $this->email)
            ->line('Consulta:')
            ->line($this->message)
            ->salutation('');
    }
}
