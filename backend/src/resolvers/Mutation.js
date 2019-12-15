const Mutation = {
  async createActivity(parent, args, ctx, info) {

    const activity = await ctx.db.mutation.createActivity({
      data: {
        ...args
      }
    }, info)

    return activity;
  }
}

module.exports = Mutation;