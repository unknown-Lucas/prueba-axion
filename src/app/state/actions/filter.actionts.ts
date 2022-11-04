import { createAction, props } from "@ngrx/store";

export const onSearch = createAction(
    '[Search String] handle the search params',
    props<{ value: string}>()
);

