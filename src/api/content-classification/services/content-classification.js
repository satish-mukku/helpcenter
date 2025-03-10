'use strict';

/**
 * content-classification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-classification.content-classification');
