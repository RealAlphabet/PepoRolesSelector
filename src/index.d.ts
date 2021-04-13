import * as React from 'react';


////////////////////////////////////////////
//  INTERFACES
////////////////////////////////////////////


export interface Role {
    id      : number,
    name    : string,
    color   : number
}

export interface RolesSelectorProps {
    roles   : Role[];
    onSelect(state: number[], changed: number): any;
}


////////////////////////////////////////////
//  EXPORT
////////////////////////////////////////////


declare class RolesSelector extends React.Component<RolesSelectorProps, any> {}

export default RolesSelector;
