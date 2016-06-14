//循环队列
function hotPotato(names, num) {
  var queue = new Queue()
  var eliminated = ''
  for (var i = 0; i < names.length; i++) {
    queue.enQueue(names[i])
  }

  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enQueue(queue.deQueue())
    }

    eliminated = queue.deQueue()
    console.log(eliminated + '被淘汰')
  }

  return queue.deQueue()
}

var names = ['Nicholas', 'John', 'Zsss', 'Eeeee', 'Hei', 'Era']

var winner = hotPotato(names, Math.random() * 100)
console.log(winner)