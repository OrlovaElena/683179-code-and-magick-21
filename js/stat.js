'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const TEXT_WIDTH = 50;
let barHeight = CLOUD_HEIGHT - GAP - TEXT_WIDTH * 2 - GAP;
const BAR_WIDTH = 40;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );

  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;

  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP * 2
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP * 2,
      CLOUD_Y + GAP * 4
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {


    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(120, 100%, 20%)`;
    }


    ctx.fillRect(
        CLOUD_X + TEXT_WIDTH + GAP + (BAR_WIDTH + GAP + BAR_WIDTH) * i,
        CLOUD_Y + GAP + 220,
        BAR_WIDTH,
        (barHeight * times[i]) / maxTime * -1
    );

    ctx.fillStyle = `#000`;

    ctx.fillText(
        names[i],
        CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + GAP + BAR_WIDTH) * i,
        CLOUD_Y + GAP + 230
    );

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + GAP + BAR_WIDTH) * i,
        CLOUD_Y + GAP + TEXT_WIDTH
    );

  }
};

