import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { IIconButton } from './IconButton';

const squre: IIconButton = {
  shape: 'squer',
  outline: true,
  children: <AdjustmentsHorizontalIcon className="h-5 w-5 text-white" />,
};

const circle: IIconButton = {
  shape: 'squer',
  outline: true,
  children: <AdjustmentsHorizontalIcon className="h-5 w-5 text-white" />,
};

export const mockIconButtonProps = {
  squre,
  circle,
};
