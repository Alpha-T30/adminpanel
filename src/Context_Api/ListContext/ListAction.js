export const listStart = () => ({ type: "list_start" });
export const listSuccess = (lists) => ({ type: "list_success", payload:lists });
export const listFailure = () => ({ type: "list_failure" });


export const listdeleteStart = () => ({ type: "list_delete_start" });
export const listdeleteSuccess = (id) => ({ type: "list_delete_success", payload:id });
export const listdeleteFailure = () => ({ type: "list_delete_failure" });


export const listcreateStart = () => ({ type: "list_create_start" });
export const listcreateSuccess = (list) => ({ type: "list_create_success", payload:list});
export const listcreateFailure = () => ({ type: "list_create_failure" });

export const listupdateStart = () => ({ type: "list_update_start" });
export const listupdateSuccess = (list) => ({ type: "list_update_success", payload:list});
export const listupdateFailure = () => ({ type: "list_update_failure" });