export enum EErrorTypes {
  Auth = "auth",
  Input = "input"
}

export interface GlobalError extends Error {
  type: EErrorTypes;
}
