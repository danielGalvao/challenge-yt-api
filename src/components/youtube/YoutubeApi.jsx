import axios from 'axios'
import * as YT from './YoutubeVars'

module.exports = function (opt, callback) {

  var params = {
    part: 'snippet',
    key: YT.API_KEY,
    channelId: YT.CHANNEL_ID,
    q: opt.term,
    maxResults: YT.MAX_RESULTS,
    type: 'video',
    order: 'date'
  }

  axios.get(YT.API_URL, { params: params })
    .then(function(resp) {
      if (callback) {
        callback(resp.data.items)
      }
    })
    .catch(function(error) {
      console.error(error)
    });
};
