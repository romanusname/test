'use client';

import { useEffect } from 'react';

export default function Error({error, reset}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('ОБРАБОТКА ОШИБОК');
    }, [error]);

    return (
        <div>
            <p>Сработала обработка!</p>
            <button onClick={() => reset()}>ПЕРЕЗАПУСТИТЬ</button>
        </div>
    );
}