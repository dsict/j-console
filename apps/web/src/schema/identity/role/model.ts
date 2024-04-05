import type { Tags } from '@/schema/_common/model';
import type { RoleType, RoleState } from '@/schema/identity/role/type';


export interface RoleModel {
    role_id: string;
    name: string;
    state: RoleState;
    role_type: RoleType;
    permissions: string[];
    page_access: string[];
    tags?: Tags;
    is_managed: boolean;
    domain_id: string;
    created_at: string;
    updated_at: string;
}
