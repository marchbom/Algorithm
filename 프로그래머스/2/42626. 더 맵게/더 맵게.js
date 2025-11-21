class MinHeap {
    constructor() {
        this.heap = []
    }
    // 값 추가
    push(value) {
        this.heap.push(value);
        this._bubbleUp()
    }
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return min;
    }
    
    peek() {
        return this.heap[0];
    }
    
    _bubbleUp() {
        let idx = this.heap.length - 1;
        
        while(idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if(this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent
        }
    }
    
    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        
        while(true) {
            let left = idx * 2 + 1;
            let right = idx * 2 + 2;
            let smallest = idx;
            
             if (left < length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest])
        smallest = right;

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] =
        [this.heap[smallest], this.heap[idx]];
      idx = smallest;
        }
    }
}


function solution(scoville, K) {
  const heap = new MinHeap();
  for (const s of scoville) heap.push(s);

  let mix = 0;

  while (heap.peek() < K) {
    let first = heap.pop();
    let second = heap.pop();

    if (second === null) return -1; // 두 번째가 없으면 실패

    let newFood = first + second * 2;
    heap.push(newFood);
    mix++;
  }

  return mix;
}
