'use strict';

/**
 * Products.js controller
 *
 * @description: A set of functions called "actions" for managing `Products`.
 */

module.exports = {

  /**
   * Retrieve products records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.products.fetchAll(ctx.query);
  },

  /**
   * Retrieve a products record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.products.fetch(ctx.params);
  },

  /**
   * Create a/an products record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.products.add(ctx.request.body);
  },

  /**
   * Update a/an products record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.products.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an products record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.products.remove(ctx.params);
  }
};
