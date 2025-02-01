export class Memory {
  #data;
  constructor(initialData) {
    this.#data = [...initialData];
  }

  getCellValue(cellNumber) {
    return this.#data[cellNumber - 1];
  }

  getPointerValue(cellNumber) {
    return this.#data[this.#data[cellNumber - 1] - 1];
  }

  setCellValue(resultCell, value) {
    this.#data[resultCell - 1] = value;
  }

  getData() {
    return this.#data;
  }
}
