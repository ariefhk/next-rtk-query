'use client';

import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { apiSlice } from '@/redux/api/apiSlice';

export default function ApiProviders({ children }) {
    return <ApiProvider api={apiSlice}>{children}</ApiProvider>;
}
