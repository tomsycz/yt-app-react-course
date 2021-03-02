import axios from "axios"
const KEY = "AIzaSyCuWL5UjpEvMprKcwb6LQztUWzQV6951uk"
// Pre-configure Axios in line with youtube API documentation 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
})
