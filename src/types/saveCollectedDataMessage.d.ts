import {CollectedPageData} from "./collectedPageData";

export type SaveCollectedDataMessage = {
    messageId: string;
    customerId: string;
    siteId: number;
    collectedData: CollectedPageData;
}