import type { ManipulateType } from 'dayjs';

import type { GRANULARITY, OPERATOR } from '@/services/asset-inventory/constants/metric-explorer-constant';


export interface Period {
    start?: string;
    end?: string;
}

export type RelativePeriod = {
    unit: ManipulateType;
    value: number;
    include_today: boolean;
};

export type Granularity = typeof GRANULARITY[keyof typeof GRANULARITY];

export type Operator = typeof OPERATOR[keyof typeof OPERATOR];
