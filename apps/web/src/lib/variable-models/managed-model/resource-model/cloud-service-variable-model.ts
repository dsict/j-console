import type { CloudServiceModel } from '@/schema/inventory/cloud-service/model';

import ResourceVariableModel from '@/lib/variable-models/_base/resource-variable-model';


export default class CloudServiceVariableModel extends ResourceVariableModel<CloudServiceModel> {
    provider = this.generateProperty({ key: 'provider', name: 'Provider' });

    static _meta = {
        key: 'cloud_service',
        name: 'Cloud Service',
        resourceType: 'inventory.CloudService',
        idKey: 'cloud_service_id',
        nameKey: 'name',
    };

    constructor() {
        super();
        this._meta = CloudServiceVariableModel._meta;
    }
}
