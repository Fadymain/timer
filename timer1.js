const alarmTimes = process.argv.slice(2)

for (const aTime of alarmTimes) {
  if(aTime > -1 && !isNaN(aTime)) {
    setTimeout(() => {
      console.log("beep")
    }, aTime * 1000)
  }
  
}
