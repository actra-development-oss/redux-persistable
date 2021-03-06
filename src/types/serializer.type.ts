/**
 * @author Gabriel Schuster <opensource@actra.de>
 */


import { Record } from 'immutable';


export type SerializerType = {
    setRecords: (records: Array<Record<any>>) => void,
    serialize:  (state: any) => string,
    parse:      (data: string) => any
};
