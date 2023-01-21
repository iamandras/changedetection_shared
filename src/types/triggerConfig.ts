export type SiteTriggerGeneric = {
    x: number | null;
    y: number | null;
    w: number | null;
    h: number | null;
}

export type SiteTriggerContains = {
    text: string;
}

export type SiteTriggerNotContains = {
    text: string;
}

export type TriggerConfig = SiteTriggerGeneric | SiteTriggerContains | SiteTriggerNotContains;
