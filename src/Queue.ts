/*
    Copyright 2022 Luke A.C.A. Rieff (Skywa04885)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
    to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
    and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

export interface QueueNode<T> {
  data: T;
  next: QueueNode<T> | null;
}

export class Queue<T> {
  protected _head: QueueNode<T> | null = null;
  protected _tail: QueueNode<T> | null = null;
  protected _size: number = 0;

  /**
   * Getter for the size.
   */
  public get size(): number {
    return this._size;
  }

  /**
   * Checks if the queue is empty.
   */
  public get empty(): boolean {
    return this.size === 0;
  }

  /**
   * Enqueues the given data.
   * @param data the data.
   */
  public enqueue(data: T): void {
    // Constructs the queue node.
    const node: QueueNode<T> = { data, next: null };

    // If size is zero, make it the head and tail
    if (this._size++ === 0) {
      this._head = this._tail = node;
      return;
    }

    // Make it the next of the head, and makes it the head.
    (this._head as QueueNode<T>).next = node;
    this._head = node;
  }

  /**
   * Prints the queue.
   */
  public print(): void {
    let node: QueueNode<T> | null = this._tail;
    while (node !== null) {
      console.log(node);
      node = node.next;
    }
  }

  /**
   * Dequeues the tail.
   * @returns the data of the dequeued item.
   */
  public dequeue(): T {
    // Makes sure there is something to dequeue in the first place.
    if (this._size === 0) {
      throw new Error("Queue is empty, cannot dequeue tail.");
    }

    // Gets the current tail, so we can get the data from it
    //  and moves the tail / decreases the size.
    const node: QueueNode<T> = this._tail as QueueNode<T>;
    this._tail = (this._tail as QueueNode<T>).next;
    --this._size;

    // Returns the data.
    return node.data;
  }

  /**
   * Peeks the data of the tail.
   * @returns the peek.
   */
  public peek(): T {
    // Makes sure there is something to dequeue in the first place.
    if (this._size === 0) {
      throw new Error("Queue is empty, cannot peek tail.");
    }

    // Returns the data of the tail.
    return (this._tail as QueueNode<T>).data;
  }
}
