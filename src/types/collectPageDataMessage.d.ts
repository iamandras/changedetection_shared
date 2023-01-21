export type CollectPageDataMessage = {
    messageId: string;
    customerId: string;
    siteId: number;
    url: string;
    closeModals: boolean;
    scrollPage: boolean;
};