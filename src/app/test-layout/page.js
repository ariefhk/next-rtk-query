'use client';

import { useRouter } from 'next/navigation';

export default function TestLayout() {
    const router = useRouter();

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={() => router.back()}>Go Back</button>
        </div>
    );
}
