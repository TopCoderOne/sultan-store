export interface ISliderData {
    id: number;
    image?: string;
    validityPeriod?: string;
    title?: string;
    text?: string;
    buttonText?: string;
}

const SliderData: ISliderData[] = [
    {
        "id": 1,
        "validityPeriod": "*Акция действует до 04/09/22",
        "title": "Название Акции 1",
        "text": "Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк",
        "buttonText": "ПРИНЯТЬ УЧАСТИЕ"
    },
    {
        "id": 2,
        "validityPeriod": "*Акция действует до 04/09/22",
        "title": "Название Акции 2",
        "text": "Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк",
        "buttonText": "ПРИНЯТЬ УЧАСТИЕ"
    },
    {
        "id": 3,
        "validityPeriod": "*Акция действует до 04/09/22",
        "title": "Название Акции 3",
        "text": "Условия акции в пару строк, Условия акции в пару строк, Условия акции в пару строк",
        "buttonText": "ПРИНЯТЬ УЧАСТИЕ"
    },
];

export default SliderData;