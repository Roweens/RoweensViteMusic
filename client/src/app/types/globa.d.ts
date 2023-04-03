type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __STATIC_URL__: string;
declare const __PROJECT__: 'Frontend' | 'Storybook';

declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}
