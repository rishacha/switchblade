const snekfetch = require('snekfetch')

module.exports = class Reddit {
  constructor (sub) {
    this.subReddit = sub
  }
  async getRandomPostFromSubreddit () {
    let subreddit = this.subReddit.replace('/r/', '')
    let { body } = await snekfetch.get(`https://reddit.com/r/${subreddit}/random/.json`)
    return body[0].data.children[0].data
  }
}