// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { GetCustomDbRolesArgs, GetCustomDbRolesResult } from "./getCustomDbRoles";
export const getCustomDbRoles: typeof import("./getCustomDbRoles").getCustomDbRoles = null as any;
utilities.lazyLoad(exports, ["getCustomDbRoles"], () => require("./getCustomDbRoles"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as types from "./types";

export {
    types,
};
pulumi.runtime.registerResourcePackage("mongodbatlas", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:mongodbatlas") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
