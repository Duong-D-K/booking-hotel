"use client";

import { useEffect } from "react";

import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
    error?: Error;
}
const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <ClientOnly>
            <EmptyState title="Uh Oh" subtitle="Something went wrong." />
        </ClientOnly>
    );
};

export default ErrorState;
