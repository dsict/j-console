import { Mutation } from 'vuex';
import {
    CostAnalysisStoreState, GroupByItem,
} from '@/services/billing/cost-management/cost-analysis/store/type';
import {
    CHART_TYPE, FILTER_ITEM, FilterItem, CostQuerySetModel, Period,
} from '@/services/billing/cost-management/cost-analysis/lib/config';


export const setChartType: Mutation<CostAnalysisStoreState> = (state, chartType: CHART_TYPE) => {
    state.chartType = chartType;
};

export const setGranularity: Mutation<CostAnalysisStoreState> = (state, granularity: string) => {
    state.granularity = granularity;
};

export const setGroupByItems: Mutation<CostAnalysisStoreState> = (state, groupByItems: Array<GroupByItem>) => {
    state.groupByItems = groupByItems;
};

export const setGroupBy: Mutation<CostAnalysisStoreState> = (state, groupBy?: string) => {
    state.groupBy = groupBy;
};

export const setPeriod: Mutation<CostAnalysisStoreState> = (state, period: Period) => {
    state.period = period;
};

export const setFilters: Mutation<CostAnalysisStoreState> = (state, filters: Record<FILTER_ITEM, FilterItem[]>) => {
    state.filters = filters;
};

export const setSelectedQueryId: Mutation<CostAnalysisStoreState> = (state, selectedQueryId: string) => {
    state.selectedQueryId = selectedQueryId;
};

export const setCostQueryList: Mutation<CostAnalysisStoreState> = (state, costQueryList: CostQuerySetModel[]) => {
    state.costQueryList = costQueryList;
};
