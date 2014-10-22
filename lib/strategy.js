/**
 * Module dependencies.
 */
var util = require('util'),
  Oauth1Strategy = require('passport-oauth1');

function Strategy(options, verify) {
  options = options || {};
  if(!options.subdomain){
  	options.subdomain = 'developer';
  }
  if(!options.domain){
  	options.domain = 'uservoice.com';
  }
	this.baseUrl = 'https://' + options.subdomain + '.' + options.domain;
  options.requestTokenURL = this.baseUrl + '/api/v1/oauth/request_token.json';
  options.accessTokenURL = this.baseUrl + '/api/v1/oauth/access_token.json';
  options.userAuthorizationURL = this.baseUrl + '/api/v1/oauth/authorize.json';

  this.options = options;

  Oauth1Strategy.call(this, options, verify);

  this.name = 'uservoice';
}

util.inherits(Strategy, Oauth1Strategy);

module.exports = Strategy;