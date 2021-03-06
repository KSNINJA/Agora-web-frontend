import { Deserializable } from './deserializable.model';

export class Credentials implements Deserializable {
    identifier: string;
    password: string;
    trustedDevice?: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
