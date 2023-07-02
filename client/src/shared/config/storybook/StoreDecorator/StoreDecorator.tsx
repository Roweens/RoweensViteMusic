import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import 'app/styles/index.scss';
import { albumReducer } from 'entities/Album/testing';
import { artistReducer } from 'entities/Artist/testing';
import { profileReducer } from 'entities/Profile/testing';
import { ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

const defaultAsyncReducers: ReducersList = {
    profile: profileReducer,
    artist: artistReducer,
    album: albumReducer,
};

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
