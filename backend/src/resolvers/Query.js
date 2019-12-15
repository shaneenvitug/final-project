const Query = {
  async activities(parent, args, ctx, info) {
    const activities = await ctx.db.query.activities();
    return activities;
  }
}

module.exports = Query;