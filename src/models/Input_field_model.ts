class Input_field_model {
    constructor(
        public value: string,
        public type: string,
        public placeholder: string,
        public name: string,
        public id: string,
        public title: string,
        public required: boolean,
        public options?: any[]
    ) { }
}

export default Input_field_model;