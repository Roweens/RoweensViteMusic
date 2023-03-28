import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('selectProfileData.test', () => {
    test('should return error', () => {
        const data = {
            firstname: 'Roweens',
            lastname: 'Roweens',
            country: Countries.Russia,
            username: 'Cognus',
            city: 'Moscow',
            age: 20,
            currency: Currencies.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(selectProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectProfileData(state as StateSchema)).toEqual(undefined);
    });
});
