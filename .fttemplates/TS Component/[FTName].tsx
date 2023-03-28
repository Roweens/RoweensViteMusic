import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import  classNames  from 'classnames';
import cls from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = memo((props:[FTName]Props) => {
   const { className } = props;
   const { t } = useTranslation()

   return (
      <div className={classNames(cls.[FTName | camelcase], {}, [className])}>

      </div>
   );
})