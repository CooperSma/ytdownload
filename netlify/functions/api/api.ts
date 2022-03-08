import { Handler } from '@netlify/functions'
import ytdl, { YtResponse } from "youtube-dl-exec"  
import { getInfo } from 'ytdl-getinfo'
import fetch from "node-fetch"


export const handler: Handler = async (event, context) => {

    let id = event.queryStringParameters.id
    const geturl = await fetch("https://endydl.herokuapp.com/api/play?url=https://www.youtube.com/watch?v=" + id)
    let play = geturl["url"]
  
  
  return {
    statusCode: 200,
    body: play
  }
}
