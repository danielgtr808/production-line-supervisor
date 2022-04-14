export type InputConfig = {
    max?: number,
    min?: number,
    type: "input"
}

export type SelectConfig = {
    data: ({ defaultValue?: boolean, display: any, value: string | number })[],
    type: "select"
}

export type FieldConfig = InputConfig | SelectConfig