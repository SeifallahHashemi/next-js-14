'use client'
import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

const TanStackQueryProviders = ({ children }: React.PropsWithChildren) => {
    const [client] = useState(new QueryClient());
    return (
        <QueryClientProvider client={client}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
    );
};

export default TanStackQueryProviders;