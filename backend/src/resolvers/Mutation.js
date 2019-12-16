const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    return ctx.db.mutation.updateActivity(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    )
  },
  async deleteActivity(parent, args, ctx, info) {
    const where = { id: args.id }
    const activity = await ctx.db.query.activity({ where }, `{ id title }`);
    return ctx.db.mutation.deleteActivity({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    // hash password and generate salt
    const password = await bcrypt.hash(args.password, 10);
    // create user in the db
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ['USER'] },
        },
      },
      info
    );
    // create JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set JWT as a cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    return user;
  }
}

module.exports = Mutation;