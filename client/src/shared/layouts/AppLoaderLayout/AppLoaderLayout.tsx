import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from 'shared/ui/Stack';
import { MainLayout } from '../MainLayout';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => {
    return (
        <MainLayout
            header={
                <HStack className={cls.header} max justify="end">
                    <Skeleton width={160} height={50} border="16px" />
                </HStack>
            }
            content={
                <VStack gap="32" style={{ height: '100%' }}>
                    <VStack gap="16" style={{ height: '100%' }}>
                        <HStack gap="16">
                            <Skeleton width={400} height={42} border="8px" />
                            <Skeleton width={100} height={42} border="8px" />
                        </HStack>
                        <HStack gap="32">
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                        </HStack>
                    </VStack>
                    <VStack gap="16" style={{ height: '100%' }}>
                        <Skeleton width={400} height={42} border="8px" />
                        <HStack gap="32">
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                        </HStack>
                    </VStack>
                    <VStack gap="16" style={{ height: '100%' }}>
                        <Skeleton width={400} height={42} border="8px" />
                        <HStack gap="32">
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                            <Skeleton width={194} height={240} border="8px" />
                        </HStack>
                    </VStack>
                </VStack>
            }
            sidebar={
                <Skeleton
                    border="8px"
                    width={300}
                    height="calc(100vh - 100px)"
                />
            }
            bottom={<Skeleton border="8px" width="100%" height={100} />}
        />
    );
});
