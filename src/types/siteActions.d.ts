export type SiteActionEmail = {
    actionType: string;
    email: string;
    subject: string;
    body: string;
}

export type SiteActionApi = {
    actionType: string;
    apiUrl: string;
}

export type SiteAction = SiteActionEmail | SiteActionApi;
