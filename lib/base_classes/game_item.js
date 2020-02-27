export default class GameItem {
  constructor(options) {
    this.properties = { ...options };
  }
  tick(ctx) {
    this.move && this.move();
    this.render(ctx);
    if (this.subItems) {
      this.subItems.forEach(function (item) {
        item.tick(ctx)
      });
    }
  }
  render(ctx) {
    //virtual method only, do some rendering with ctx
  }
};
