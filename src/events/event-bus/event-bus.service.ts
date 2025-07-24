import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';

@Injectable()
export class EventBusService extends EventEmitter {
  constructor() {
    super();
  }

  emitEvent(event: string, payload?: any): void {
    this.emit(event, payload);
  }

  onEvent(event: string, listener: (...args: any[]) => void): void {
    this.on(event, listener);
  }
}
