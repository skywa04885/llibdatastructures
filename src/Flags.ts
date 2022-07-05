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

export class Flags {
  /**
   * Constructs a new flags class.
   * @param flags the initial flags.
   */
  public constructor(public flags: number = 0x00000000) {}

  /**
   * Sets the flags based on the given mask.
   * @param mask the mask to set.
   */
  public set(mask: number): void {
    this.flags |= mask;
  }

  /**
   * Clears the flags based on the given mask.
   * @param mask the mask to clear.
   */
  public clear(mask: number): void {
    this.flags &= ~mask;
  }

  /**
   * Gets all the bits matching the mask.
   * @param mask the bits to get.
   * @returns the bits, selected with the mask.
   */
  public get(mask: number): number {
    return this.flags & mask;
  }

  /**
   * checks if all the bits in the mask are set.
   * @param mask the mask to check.
   * @returns if all the bits in the mask are set.
   */
  public are_set(mask: number): boolean {
    return this.get(mask) === mask;
  }

  /**
   * Checks if all the bits in the mask are clear.
   * @param mask the mask to check.
   * @returns if all the bits in the mask are clear.
   */
  public are_clear(mask: number): boolean {
    return this.get(mask) === 0;
  }
}
