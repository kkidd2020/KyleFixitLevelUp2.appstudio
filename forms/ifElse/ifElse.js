let firstName= prompt("Enter your first name:")
let userState = prompt ("Enter you state in the 2 letter acronym:")
let temp=Number(prompt("Enter a temperature in Fahreheit:"))

let stateCap=userState.toUpperCase()
let nameCap=firstName.charAt(0).toUpperCase()+firstName.slice(1)

let userInfo=[`${nameCap}`,`${nameCap}`,`${temp}`]
console.log(`${userInfo}`)

if (userState== "NE" && temp<32){
NSB.MsgBox(`${nameCap}, wear a warm coat, hat, scarf and gloves.`)
} else if (userState== "NE" && temp>32 && temp<50){
NSB.MsgBox(`${nameCap}, wear a warm coat but you won't need a hat, scarf or gloves.`)
} else if (userState=="FL" && temp>32 && temp<50){
NSB.MsgBox(`${nameCap}, wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
} else if (userState=="FL" && temp>50 && temp<70){
NSB.MsgBox(`${nameCap}, wear a warm coat, hat and gloves. Maybe a scarf too.`)
}