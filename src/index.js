module.exports = function toReadable (number) {
    
    let arr20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arr10 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let str = number.toString()
    let check=Number(str.slice(1))
    let result = ''
    if (str.length == 3&&check!=0) {
        let num1 = Number(str[0])
        result += arr20[num1] + " hundred"
        let num2 = Number(str.slice(1))
        if (num2 < 20) result += ' ' + arr20[num2]
        else if (num2 >= 20 && str[2] != '0') result += ' ' + arr10[str[1]] + ' ' + arr20[str[2]]
        else result += ' ' + arr10[str[1]]
    }
    else if (str.length == 2) {
        let num = Number(str)
        if (num < 20) result += arr20[num]
        else if (num >= 20 && str[1] != '0') result += arr10[str[0]] + ' ' + arr20[str[1]]
        else result +=  arr10[str[0]]
    }
    else if (str.length==1){
        let num = Number(str)
        if(num!=0)result+=arr20[num]
        else result+="zero"
    }
    else result += arr20[Number(str[0])] + " hundred"

   return (result)

}


