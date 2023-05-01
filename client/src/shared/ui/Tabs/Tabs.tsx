import {
    ReactNode, useCallback, useEffect, useMemo, useState,
} from 'react';
import classNames from 'classnames';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';
import { HStack, VStack } from '../Stack';

export interface TabItem<T extends string> {
    id: number
   value: T,
   content: ReactNode;
}

interface TabsProps<T extends string> {
   className?: string;
   tabs: TabItem<T>[];
   value: string;
   onTabClick: (tab: TabItem<T>) => void;
     align: 'vertical' | 'horizontal'
}

export const Tabs = <T extends string>(props:TabsProps<T>) => {
    const {
        className, onTabClick, tabs, value, align = 'horizontal',
    } = props;

    const initialItem = useMemo(() => tabs.find((tab) => tab.value === value), [tabs, value]);

    const [hoveredItemId, setHoveredItemId] = useState(initialItem!.id);

    const onTabClickHandle = useCallback((tab: TabItem<T>) => {
        onTabClick(tab);
    }, [onTabClick]);

    const onTabKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') {
            if (hoveredItemId < tabs.length) {
                const newItem = tabs.find((tab) => tab.id === hoveredItemId + 1);
                if (newItem) setHoveredItemId(newItem.id);
            }
        } if (e.key === 'ArrowLeft') {
            if (hoveredItemId !== 1) {
                const newItem = tabs.find((tab) => tab.id === hoveredItemId - 1);
                if (newItem) setHoveredItemId(newItem.id);
            }
        }
        if (e.key === 'Enter') {
            if (hoveredItemId) {
                const newItem = tabs.find((tab) => tab.id === hoveredItemId);
                if (newItem) onTabClickHandle(newItem);
            }
        }
    }, [hoveredItemId, onTabClickHandle, tabs]);

    useEffect(() => {
        window.addEventListener('keydown', onTabKeyDown);

        return () => {
            window.removeEventListener('keydown', onTabKeyDown);
        };
    }, [onTabKeyDown]);

    const content = tabs.map((tab) => (
        <Card
            className={classNames(
                cls.tab,
                { [cls.hovered]: hoveredItemId === tab.id },
                [],
            )}
            key={tab.value}
            onClick={() => onTabClickHandle(tab)}
            theme={tab.value === value ? CardTheme.PRIMARY : CardTheme.SECONDARY}
        >
            {tab.content}
        </Card>
    ));

    return (
        <>
            {align === 'horizontal'
                ? (
                    <HStack className={classNames(cls.Tabs, {}, [className])} gap="8">
                        {content}
                    </HStack>
                ) : (
                    <VStack className={classNames(cls.Tabs, {}, [className])} gap="8">
                        {content}
                    </VStack>
                )}

        </>
    );
};
