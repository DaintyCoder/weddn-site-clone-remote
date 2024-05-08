export interface ILocation {
    email: string;
    payload?: unknown; // Consider replacing `unknown` with a more specific type if possible
}

/* Purpose of CanonicalProps: 
   This interface ensures that any component or function that uses it will receive a canonical property of type string. 
   In the context of the IndexPage function, it uses this canonical prop to set canonical URLs, 
   which are important for SEO (Search Engine Optimization) to avoid duplicate content issues and to signify the preferred URL 
   for a page. */

export interface CanonicalProps {
    canonical: string; // Fixed typo from 'carnonical' to 'canonical'
}

export interface LayoutProps {
    isWedding?: boolean;
}

export interface PageDataProps {
    _id: string;
    userID: string;
    ubxdid: string;
    coverImage: string;
    hashtag: string;
    schedules: unknown[]; // Replace with specific type if known
    wishlist: unknown[]; // Replace with specific type if known
}

export interface IUBXDProps {
    canonical: string; // Fixed typo from 'carnonical' to 'canonical'
    context: string;
    pageData: PageDataProps | unknown; // Consider defining a more specific type instead of `unknown`
    imageProps: unknown; // Consider defining a more specific type
}

export interface IAddToCalendarDetails {
    name: string;
    startDate: string;
    endDate?: string;
    startTime: string;
    location: string;
}

export interface IMenuItemCmp {
    name: string;
    onClick?: () => void;
}

export interface IWishlistItems {
    coverImage?: string;
    wishTitle?: string;
    wishPrice?: string | unknown; // Consider using a more specific type or removing `unknown`
    netPaid?: string | unknown; // Consider using a more specific type or removing `unknown`
    netCost?: string | unknown; // Consider using a more specific type or removing `unknown`
    percentage?: number;
}

export interface IListWish {
    cashfundExists?: boolean;
    wishlists: unknown[]; // Replace with specific type if known
    dashboardData: unknown[]; // Replace with specific type if known
}


/* 
   In TypeScript, interfaces are used to define the structure of an object. They are a powerful way to define contracts 
   within your code as well as contracts with code outside of your project. Interfaces are not compiled into JavaScript; 
   they are only used by TypeScript for type checking during development.
   
   Why Export Interfaces?: Exporting an interface allows it to be imported and used in other parts of the application or even 
   in other applications if the code is part of a library. This promotes reusability and modularity. 
   For example, by exporting CanonicalProps, it can be imported wherever it's needed across the project to ensure components 
   conform to the expected prop structure, enhancing code consistency and maintainability.

   Overall, the choice between using an interface or a type alias can depend on the specific requirements of your project 
   and your coding style preferences. Interfaces are generally preferred for defining object shapes that will be implemented by 
   classes or used extensively across a project due to their extendability and mergeability features.
*/