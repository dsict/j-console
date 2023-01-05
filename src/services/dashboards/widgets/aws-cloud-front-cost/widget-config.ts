import { GRANULARITY } from '@/services/dashboards/config';
import type { WidgetConfig } from '@/services/dashboards/widgets/_configs/config';
import { CHART_TYPE, GROUP_BY } from '@/services/dashboards/widgets/_configs/config';
import { GROUP_BY_ITEM_MAP } from '@/services/dashboards/widgets/_configs/view-config';
import { excludePropertiesFromDashboardCommonWidgetConfig } from '@/services/dashboards/widgets/_helpers/widget-options-schema-helper';

const {
    default_properties,
    inheritable_properties,
    schema,
} = excludePropertiesFromDashboardCommonWidgetConfig(['filters.provider']);

const awsCloudFrontCostWidgetConfig: WidgetConfig = {
    widget_config_id: 'awsCloudFrontCost',
    widget_component: () => ({
        component: import('@/services/dashboards/widgets/aws-cloud-front-cost/AWSCloudFrontCost.vue'),
    }),
    title: 'AWS CloudFront Cost',
    labels: ['Cost'],
    description: {
        translation_id: 'DASHBOARDS.WIDGET.AWS_CLOUD_FRONT_COST.DESC',
        preview_image: 'widget-img_awsCloudFrontCost--thumbnail.png',
    },
    scopes: ['PROJECT', 'WORKSPACE'],
    theme: {
        inherit: true,
        inherit_count: 3,
    },
    sizes: ['lg', 'full'],
    options: {
        chart_type: CHART_TYPE.STACKED_COLUMN,
        granularity: GRANULARITY.ACCUMULATED,
        legend_options: {
            enabled: true,
            show_at: 'chart',
        },
        selector_options: {
            enabled: true,
            type: 'cost-usage',
        },
        pagination_options: {
            enabled: true,
            page_size: 5,
        },
    },
    options_schema: {
        default_properties: [...new Set(['group_by'].concat(default_properties ?? []))],
        inheritable_properties: [...new Set(['group_by'].concat(inheritable_properties ?? []))],
        schema: {
            type: 'object',
            properties: {
                ...schema.properties,
                group_by: {
                    title: 'Group By',
                    type: 'string',
                    enum: Object.values(GROUP_BY),
                    menuItems: Object.values(GROUP_BY_ITEM_MAP),
                },
            },
            required: ['group_by'],
        },
    },
};

export default awsCloudFrontCostWidgetConfig;
