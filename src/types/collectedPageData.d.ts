type TextBox = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export type CollectedPageData = {
    texts: string[];
    textBoxes: TextBox[];
}