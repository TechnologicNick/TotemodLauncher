import type { JSONSchema7 } from 'json-schema';

export type NodeFieldProps<T> = {
    schema: JSONSchema7;
    definition: string;
    propertyName: string;
    getCurrentValue?: (propertyName: string) => T | undefined;
    onChange?: (value: T, propertyName: string) => void;
}
