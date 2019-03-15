import {Action} from '@ngrx/store';
import {Product} from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle product code',
  SetCurrentProduct = '[Product] Set current product',
  ClearCurrentProduct = '[Product] Clear the current product',
  InitializeCurrentProduct = '[Product] Initialize the current product',
  Load = '[ Product ] Load',
  LoadFail = '[ Product ] Load fail',
  LoadSuccess = '[ Product ] Load success'
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {
  }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;
  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionTypes.Load;
}

export class LoadFail implements Action {
  readonly type = ProductActionTypes.LoadFail;
  constructor(payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = ProductActionTypes.LoadSuccess;
  constructor(payload: Product[]) { }
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadFail
  | LoadSuccess;
