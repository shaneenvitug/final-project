const Mutation = {
  async createActivity(parent, args, ctx, info) {

    const activity = await ctx.db.mutation.createActivity({
      data: {
        ...args
      }
    }, info)

    return activity;
  },
  updateActivity(parent, args, ctx, info) {
    // take a copy of the updates
    const updates = { ...args };
    // remove the ID from the updates
    delete updates.id;
    // run the update method
    return ctx.db.mutation.updateActivity({
      data: updates,
      where: {
        id: args.id,
      },
    },
    info
    )
  }
}

module.exports = Mutation;