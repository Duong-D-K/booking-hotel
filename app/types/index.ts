import { Listing, Reservation, User } from "@prisma/client";

// When fetching data from server component and passing it data to client component.
// Next.js expects only plain JavaScript objects (like objects with primitive types such as strings, numbers, booleans) to be passed between Server and Client Components.
// so we need change data type to string.

export type SafeListing = Omit<Listing, "createdAt"> & {
    createdAt: string;
};

export type SafeReservation = Omit<Reservation, "startDate" | "endDate" | "createdAt" | "listing"> & {
    startDate: string;
    endDate: string;
    createdAt: string;
    listing: SafeListing;
};

export type SafeUser = Omit<User, "createdAt" | "updatedAt" | "emailVerified"> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
