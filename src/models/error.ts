
export namespace Error {

  export type ErrorMessage = null | {
    message: string;
  }

  export const hasError = (error: ErrorMessage): boolean => {
    if (error) {
      console.error(error.message);
    }
    return !!error;
  }

  export const NO_ERROR = null;
  export const DISTANCE_SHORTER_THAN_SPLIT: ErrorMessage = {
    message: 'The distance is shorter than split'
  }
  export const TIME_IS_TOO_LONG: ErrorMessage = {
    message: 'The time is longer than can be displayed'
  }

}