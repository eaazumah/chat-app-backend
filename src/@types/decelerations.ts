import createLoader from '../loaders';

export type ILoaders = ReturnType<typeof createLoader>;

export interface IContext {
    loaders: ILoaders;
}
