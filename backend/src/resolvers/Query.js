const { forwardTo } = require('prisma-binding');

const Query = {
  activities: forwardTo('db'),
  activity: forwardTo('db'),
  // async activities(parent, args, ctx, info) {
  //   const activities = await ctx.db.query.activities();
  //   return activities;
  // }
}

module.exports = Query;