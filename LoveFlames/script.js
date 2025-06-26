var btn = document.getElementById("btn")
const name1 = document.getElementById("name1")
const name2 = document.getElementById("name2")
var answer = document.getElementById("ans")
var nError = document.getElementById("nameError")
var cnError = document.getElementById("cnameError")
var noError = true;

function clearMessages() {
            answer.innerHTML = ''; // Clear existing messages
        }

function flames(){
    const string1 = name1.value
    const string2 = name2.value
    var maxLength = Math.max(string1.length,string2.length)
    var count = string1.length+string2.length
    string3 = string1.toLowerCase()
    string4 = string2.toLowerCase()
    
    var array1 = string3.split('')
    var array2 = string4.split('')
    var i = 0;
    var j=0;
    while(i< string1.length && j<string2.length){
        if(array1[i] == array2[j]){
            count = count-2
            array1[i] = ""
            array2[j] = ""
            i++
            j=0
        }else{
            j++;
            if(j == string2.length){
                j=0
                i++
            }
        }
    }
    console.log(count)

    const flames = "flames"
    var array3 = flames.split('')
    var l = array3.length
    var d = 0
    while(l>1){
        var num = count%l
        if(d==0){
        d = d+num
        }else{
            d = d+num-1
        }
        if(d>l){
            d=d-l
        }
        console.log(d)
        console.log(array3[d-1])
        array3.splice(d-1,1)
        l--
    }
    console.log(array3[0])
    var message
    switch(array3[0]){
        case 'f': message = "The relation between you is friendship"
        break;
        case 'l': message = "The relation between you is love"
        break;
        case 'a': message = "The relation between you is affection"
        break;
        case 'm': message = "The relation between you is marriage"
        break;
        case 'e': message = "The relation between you is enmity"
        break;
        case 's': message = "The relation between you is siblinghood"
        break;
        
    }
    

    answer.append(message)
}
function validateInputs(){
    nError.textContent = ''
    cnError.textContent = ''
    
    if(name1.value === ''){
        noError = false;
        nError.textContent = 'Please enter your name'
    }
     if(name2.value === ''){
        noError = false;
        cnError.textContent = 'Please enter your crush\'s name'
     }
}

btn.addEventListener("click", () => {
    
    clearMessages();
    validateInputs();
    if(noError){
    
    flames();
    }
    noError = true
    
})