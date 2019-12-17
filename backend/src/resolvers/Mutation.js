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
  },
  async login(parent, { email, password }, ctx, info) {
    // check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email }});
    if (!user) {
      throw new Error(`No such user found for ${email}`);
    }
    // check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('The password entered is incorrect');
    }
    // generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
}

module.exports = Mutation;