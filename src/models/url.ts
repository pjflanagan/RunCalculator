

import { Distance } from ".";

export class URL {
  urlParams: URLSearchParams

  constructor(search: string = '') {
    this.urlParams = new URLSearchParams(search);
  }

  loadParams(search: string) {
    this.urlParams = new URLSearchParams(search);
  }

  getParamOrDefault<T>(name: string, defaultValue: T): T {
    if (this.urlParams.has(name)) {
      const value = this.urlParams.get(name);
      switch (name) {
        case 'race':
          return (Distance.getEvent(value as Distance.EventName) as unknown) as T || defaultValue;
        case 'split':
          return (Distance.getSplit(value as Distance.EventName) as unknown) as T || defaultValue;
        case 'distanceMode':
        case 'paceMode':
          return (value === 'true') as unknown as T || defaultValue;
        case 'distance':
          return parseFloat(value) as unknown as T || defaultValue;
        case 'timeIn':
          return parseInt(value) as unknown as T || defaultValue;
        case 'unit':
          return (value === 'm' || value === 'k')
            ? value as unknown as T
            : defaultValue;
      }
    }
    return defaultValue;
  }

  setParams(params): string {
    Object.keys(params).forEach((key) => {
      this.urlParams.set(key, params[key]);
    });
    return `?${this.urlParams.toString()}`;
  }
}
