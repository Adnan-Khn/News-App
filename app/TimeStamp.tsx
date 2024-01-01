"use client"
import {useTimeAgo} from "next-timeago";
type Props={
    time:string
}
function TimeStamp({time}:Props) {
  const {TimeAgo}=useTimeAgo()
  return (
    <TimeAgo date={time}/>
  )
}
export default TimeStamp